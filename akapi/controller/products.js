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
    const sql = `SELECT  DISTINCT pid,pname,price,quantity,producttotal FROM cart_bucket `;
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



exports.deleteCarts = async (req, res, next) => {
  try {
    const id = req.query.id;
    const sql = `DELETE  FROM cart_bucket WHERE pid=${id}`;
    con.query(sql, (err, deletedCart) => {
      if (err) throw err;
      res.status(200).json({
        message: "Bucket Deleted From Cart",
        deletedCart: deletedCart
      })
    })
  } catch (error) {

  }
}


exports.orders = async (req, res, next) => {
  const id = req.user;
  const { ptotal, sprice, tax, total } = req.body;
  var radnowAr = 'AR';
  var no = Math.floor((Math.random() * 10000000000) + 1);
  let orderno = radnowAr + no;
  var today = new Date();
  var dates = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const sql = `INSERT INTO orders (orderno,billno,custid, ptotal, tax, sprice, total,date)
                            VALUES('${orderno}','${orderno}','${id}','${ptotal}','${tax}','${sprice}','${total}','${dates}')`;
  con.query(sql, (err, orders) => {
    if (err) throw err;
    res.status(201).json({
      message: 'order Confirmed',
      orders: orders
    })
  })
}

exports.shippindDetail = async (req, res, next) => {
  try {
    const id = req.user;
    let state;
    let city;
    let result;

    const sql = `SELECT name,email,mobile,state,city,pincode,address From customers WHERE id=${id}`;
    con.query(sql, (err, shipping) => {
      // console.log(shipping['RowDataPacket']);
      result = Object.values(JSON.parse(JSON.stringify(shipping)));
      // console.log(user);
      if (err) throw err;
      const stateSql = `SELECT state FROM state WHERE id=${result[0].state}`;
      con.query(stateSql, (err, states) => {
        state = states
        if (err) throw err;
        const citySql = `SELECT city FROM city WHERE id=${result[0].city}`;
        con.query(citySql, (err, cities) => {
          city = cities
          if (err) throw err;
          res.status(200).json({
            message: 'fetched',
            user: result,
            state: state,
            city: city
          })
        })
      });

    })
  } catch (error) {
    console.log(error);
  }
}


exports.totalExpenses = async (req, res, next) => {
  const id = req.user;
  const sql = `SELECT * FROM orders WHERE custid='${id}' ORDER BY id DESC LIMIT 1 ` ;
  con.query(sql, (err, totalExpenses) => {
    if (err) throw err;
    res.status(200).json({
      message: 'bill fetched',
      expreses: totalExpenses
    })
  })
}