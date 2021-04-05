const con = require("../database/db");

exports.addCategorybyId = (req, res, next) => {
    const id = req.query.id;
    const sql = `SELECT * FROM category WHERE id='${id}'`;
    con.query(sql, (err, row) => {
        if (err) throw err;
        console.log(id);
        const sql = `INSERT INTO productss(product, productimage, catid, brid, quantity, price, description,status,p_id)VALUES ('mobile','harkuch.jpg','0','1','5','20','kya malom','1',${id})`;
        con.query(sql, (err, row) => {
            if (err) throw err;
            res.status(200).json({
                message: "record fetched",
                post: row
            })

        })
    });
}


exports.getCategory = (req, res, next) => {
    const id = req.query.id;
    const sql = `SELECT     id,product,productimage,priceone FROM products WHERE cid = ${id}`;
    con.query(sql, (err, row) => {
        if (err) throw err;
        res.status(200).json({
            message: "record fetched",
            post: row
        })
    })
}

exports.getProduct = async (req, res, next) => {
    const id = req.query.id;
    const sql = `SELECT * FROM products WHERE id=${id}`;
    con.query(sql, (err, row) => {
        if (err) throw err;
        res.status(200).json({
            message: "record fetched",
            post: row
        })
    })
}