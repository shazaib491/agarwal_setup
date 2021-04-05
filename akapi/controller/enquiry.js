const con = require("./../database/db")
exports.addQuery = async (req, res, next) => {
    const enquiry = {
        id:1,
        username: req.body.name,
        email: req.body.email,
        message: req.body.message
    }
    con.query("INSERT INTO enquiries SET ?", enquiry, (err, resp) => {
        if (err) throw err;
        res.status(201).json({
            message: "We Will contact you soon",
            id: resp.insertId,
        });
    });
}