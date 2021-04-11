const con = require("./../database/db")
exports.addQuery = async (req, res, next) => {
    const { name, mobile, email, message } = req.body;
    const sql = `INSERT INTO enquiries (username,email,mobile,message) VALUES ('${name}','${email}','${mobile}','${message}')`;
    con.query(sql, (err, resp) => {
        if (err) throw err;
        res.status(201).json({
            message: "We Will contact you soon",
            id: resp.insertId,
        });
    });
}