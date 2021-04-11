const con = require("../database/db");

exports.addCategorybyId = (req, res, next) => {
    // const id = req.query.id;
    // const sql = `SELECT * FROM category WHERE id='${id}'`;
    // con.query(sql, (err, row) => {
    //     if (err) throw err;
    //     console.log(id);
    //     const sql = `INSERT INTO productss(product, productimage, catid, brid, quantity, price, description,status,p_id)VALUES ('mobile','harkuch.jpg','0','1','5','20','kya malom','1',${id})`;
    //     con.query(sql, (err, row) => {
    //         if (err) throw err;
    //         res.status(200).json({
    //             message: "record fetched",
    //             post: row
    //         })

    //     })
    // });
}


exports.getCategory = (req, res, next) => {
    const id = req.query.id;
    let catgeory;
    let godown;
    const godownSql = `SELECT  * FROM godown`;
    con.query(godownSql, (err, godowns) => {
        if (err) throw err;
        godown = godowns;
    })
    const catSql = `SELECT  * FROM category WHERE id = ${id}`;
    con.query(catSql, (err, cats) => {
        if (err) throw err;
        catgeory = cats;
    })
    const sql = `SELECT * FROM products WHERE cid = ${id}`;
    con.query(sql, (err, row) => {
        if (err) throw err;
        res.status(200).json({
            message: "record fetched",
            post: row,
            category: catgeory,
            godown: godown
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


exports.getStock = async (req, res, next) => {
    const id = req.query.id;
    const sql = `SELECT  * FROM stock WHERE gid=${id}`;
    con.query(sql, (err, stock) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Stock Fetched',
            stock: stock
        })
    })

}
exports.getCategoryByStock = async (req, res, next) => {
    const id = req.query.id;
    const sql = `SELECT * FROM category `;
    con.query(sql, (err, category) => {
        res.status(200).json({
            message: 'category comes by stock id',
            category: category
        })
    })
}

exports.getProductByStock = async (req, res, next) => {
    const id = req.query.id;
    const sql = `SELECT * FROM products`;
    con.query(sql, (err, products) => {
        res.status(200).json({
            message: 'product comes by stock id',
            products: products
        })
    })
}

exports.getProductByCategory = async (req, res, next) => {
    const id = req.query.id;
    const sql = `SELECT * FROM products WHERE cid=${id}`;
    con.query(sql, (err, product) => {
        if (err) throw err;
        res.status(200).json({
            message: "record fetched",
            product: product
        })
    })
}