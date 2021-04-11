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
