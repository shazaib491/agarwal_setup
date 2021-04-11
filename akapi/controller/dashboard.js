const con = require("../database/db");


exports.getDashbaord = async (req, res, next) => {
    const id = req.user;
    const sql = `SELECT * FROM customers WHERE id=${id}`;
    con.query(sql, (err, row) => {
        if (err) throw err;
        res.status(200).json({
            row
        })
    })

}