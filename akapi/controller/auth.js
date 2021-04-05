// model mandatory
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const con = require("../database/db");

exports.register = async (req, res, next) => {
    try {
        const {
            fname,
            lname,
            desgination,
            department,
            company_nm,
            streetHouse,
            address_I,
            address_II,
            country,
            state,
            city,
            pincode,
            shipping_address,
            shipping_street_no,
            shipping_address_I,
            shipping_address_II,
            shipping_country,
            shipping_state,
            shipping_city,
            phone_no,
            mobile_no,
            fax_number,
            email,
            alternate_email,
            preferred_username,
            password,
            cpassword,
            gst,
            pancard,
        } = req.body;
        if (!email && !password && !cpassword) {
            return res.status(400).json({
                errorMessage: "Please enter all required fields",
            });
        }
        if (password.length < 6) {
            return res.status(400).json({
                errorMessage: "please enter atleast 6 digit",
            });
        }
        if (password !== cpassword) {
            res.status(400).json({
                errorMessage: "please enter same password twice",
            });
        }
        const salt = 10;
        const hash = await bcrypt.hash(password, salt);
        const existingUser = `SELECT * FROM Customers_I WHERE email='${email}'`;
        con.query(existingUser, (err, row) => {
            const numRows = row.length;
            if (numRows > 0) {
                res.status(400).json({
                    errorMessage: "user already exist",
                });
            } else {
                console.log(pincode);
                const insert = `INSERT INTO Customers_I(
            fname,
            lname,
            designation,
            department,
            company_nm,
            streetHouse,
            address_I,
            address_II,
            country,
            state,
            city,
            shipping_address,
            shipping_street_no,
            shipping_address_I,
            shipping_address_II,
            shipping_country,
            shipping_state,
            shipping_city,
            phone_no,
            mobile_no,
            fax_number,
            email, 
            alternate_email, 
            preferred_username,
            password,
            gst,
            pancard
                )VALUES
                (   '${fname}',
                    '${lname}',
                    '${desgination}',
                    '${department}',
                    '${company_nm}',
                    '${streetHouse}',
                    '${address_I}',
                    '${address_II}',
                    '${country}',
                    '${state}',
                    '${city}',
                    '${shipping_address}',
                    '${shipping_street_no}',
                    '${shipping_address_I}',
                    '${shipping_address_II}',
                    '${shipping_country}',
                    '${shipping_state}',
                    '${shipping_city}',
                    '${phone_no}',
                    '${mobile_no}',
                    '${fax_number}',
                    '${email}',
                    '${alternate_email}',
                    '${preferred_username}',
                    '${hash}',
                    '${gst}',
                    '${pancard}'
                    )`;
                con.query(insert, (err, result) => {
                    if (err) throw err;
                    con.query(
                        `SELECT * FROM Customers_I WHERE id='${result.insertId}'`,
                        (err, row) => {
                            row.forEach((element) => {
                                const token = jwt.sign(
                                    { userId: element.id, username: element.email },
                                    "admin@123",
                                    { expiresIn: "1h" }
                                );
                                res
                                    .cookie("token", token, {
                                        httpOnly: true,
                                    })
                                    .send({
                                        user: token,
                                    });
                            });
                        }
                    );
                });
            }
        });
    } catch (e) {
        res.status(500).json().send();
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email && !password) {
        return res.status(400).json({
            errorMessage: "Please enter all required fields",
        });
    }
    const existingUser = `SELECT * FROM Customers_I WHERE email='${email}'`;
    con.query(existingUser, (err, row) => {
        const numRows = row.length;
        if (numRows === 0) {
            res.status(401).json({
                errorMessage: "Wrong cradential",
            });
        } else {
            row.forEach(async (element) => {
                const passworCorrect = await bcrypt.compare(password, element.password);
                if (!passworCorrect) {
                    return res
                        .status(401)
                        .json({ errorMessage: "Wrong email or password" });
                } else {
                    const token = jwt.sign(
                        { userId: element.id, username: element.email },
                        "admin@123",
                        { expiresIn: "1h" }
                    );
                    res
                        .cookie("token", token, {
                            httpOnly: true,
                        })
                        .send();
                }
            });
        }
    });
};

exports.loggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);
        await jwt.verify(token, "admin@123");
        res.send(true);
    } catch (error) {
        res.json({ err: false });
    }
};

exports.logout = async (req, res, next) => {
    try {
        console.log("hello");
        res
            .cookie("token", "", {
                httpOnly: true,
                expires: new Date(0),
            })
            .send();
    } catch (error) {
        res.status(500).send();
    }
};
