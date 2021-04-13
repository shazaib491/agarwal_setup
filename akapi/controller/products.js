const con = require("./../database/db");
exports.products = (req, res, next) => {

  const data = con.query(`SELECT * FROM category`, (err, row) => {
    if (err) throw err;
    res.status(200).json({
      post: row
    });
  });
};

exports.addproducts = async (req, res, next) => {
  const product = {
    productid: req.body.productid,
    productimage: req.body.lastname,
    product: req.body.product,
    description: req.body.description,
    pdate: req.body.pdate,
    length: req.body.length,
    width: req.body.width,
    thick: req.body.thick,
    brand: req.body.brand,
    grade: req.body.grade,
    color: req.body.color,
    priceone: req.body.priceone,
    pricetwo: req.body.pricetwo,
    pricethree: req.body.pricethree,
    minorder: req.body.minorder,
    maxorder: req.body.maxorder,
    // created_at: created_at,
    // updated_at: updated_at,
    // date: date,
    // status: status,
  };

  con.query("INSERT INTO productcategory SET ?", product, (err, resp) => {
    if (err) throw err;
    res.status(201).json({
      message: "data inserted",
      id: resp.insertId,
    });
  });
};

exports.cart_bucket = async (req, res, next) => {
  const existingCart = `SELECT * FROM cart_bucket WHERE pid='${req.body.id}'`;
  con.query(existingCart, (err, count) => {

    let addTocart = req.body.cart;
    const cart = {
      pid: req.body.id,
      pname: req.body.product,
      price: req.body.priceone,
      quantity: 1,
      producttotal: req.body.priceone * 1
    }
    if (addTocart) {
      const sql = `INSERT INTO cart_bucket (pid,pname,price,quantity,producttotal) VALUES('${cart.pid}','${cart.pname}','${cart.price}','${cart.quantity}','${cart.producttotal}')`;
      con.query(sql, (err, cart) => {
        if (err) throw err;
        res.status(201).json({
          message: "product is added to cart",
          cart: cart
        })
      })
    } else {
      const sql = `DELETE FROM cart_bucket WHERE pid=${cart.pid}`;
      con.query(sql, (err, cart) => {
        if (err) throw err;
        res.status(201).json({
          message: "product is remove to cart"
        })
      })

    }
  })
}


exports.carts = async (req, res, next) => {
  try {
    const sql = `SELECT  * FROM cart_bucket`;
    con.query(sql, (err, bukcet) => {
      if (err) throw err;
      res.status(200).json({
        message: "bucket data fetched",
        bucket: bukcet
      })
    })
  } catch (error) {

  }
}