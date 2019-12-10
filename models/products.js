const mysql = require('mysql');
const superagent = require('superagent');

module.exports = {

  getAll: () => {
    let getAllProducts = new Promise((resolve, reject) => {
      let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
      });

      con.connect(err => {
        if (err) reject(err);
        else {
          const sql = `SELECT * FROM products;`;
          con.query(sql, (err, products, field) => {
            if (err) {
              reject(err);
            }
            else {
              resolve(products);
            }
          });
        }
      });
    });
    return getAllProducts;
  },

  create: req => {

    let createProduct = new Promise((resolve, reject) => {

      let data = {};

      let body = req.body;
      data.title = body.title;
      data.dimensions = body.dimensions;
      data.price = body.price;
      data.shipping = body.shipping;
      let productImage = req.files.productImage.data;

      let uploadToImgur = new Promise((resolve, reject) => {

        superagent.post('https://api.imgur.com/3/upload')
          .set('Authorization', 'Client-ID c9ba60e96146847')
          .send(productImage)
          .type('jpg')
          .end((err, res) => {
            if (err) reject(err);
            else resolve(res.body.data.link);
          });
      });

      uploadToImgur
        .then(imgURL => {

          let con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'mydb'
          });

          con.connect(err => {
            if (err) reject(err);
            else {
              let sql = `INSERT INTO products (title, image, dimensions, price, shipping) VALUES ("${data.title}", "${imgURL}", "${data.dimensions}", ${data.price},${data.shipping})`;

              con.query(sql, (err, products, field) => {
                if (err) {
                  console.log(err);
                  reject(`Query failed: ${sql}`);
                }
                else {
                  resolve(`Successfully created product.`);
                }
              });
            }
          });
        })
        .catch(err => { reject(err); });
    });
    return createProduct;
  },

  delete: (productName) => {
    let deleteProduct = new Promise((resolve, reject) => {

      let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
      });

      con.connect(err => {
        const sql = `DELETE FROM products WHERE title="${productName}";`;
        con.query(sql, (err, products, field) => {
          if (err) {
            console.log(err);
            reject(`Query failed: ${sql}`);
          }
          else {
            resolve(`Successfully deleted ${productName}`);
          }
        });
      });
    });

    return deleteProduct;
  }
};
