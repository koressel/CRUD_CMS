const mysql = require('mysql');
const superagent = require('superagent');

module.exports = {

  getAllUnsold: () => {
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
          const sql = `SELECT * FROM product WHERE sold=0;`;
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

  getAllSold: () => {
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
          const sql = `SELECT * FROM product WHERE sold=1;`;
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
      data.price = body.price;
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
              let sql = `INSERT INTO product (title, image, price, sold, customerID) VALUES ("${data.title}", "${imgURL}", ${data.price}, 0, 0)`;

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

  update: (req) => {
    let updateProduct = new Promise((resolve, reject) => {
      let data = {};

      let body = req.body;
      data.title = body.title;
      data.price = body.price;
      data.field = body.field;

      if (req.files) {
        let productImage = req.files.image.data;

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
                let sql = `UPDATE product SET title="${data.title}",price="${data.price}", image="${imgURL}" WHERE title="${data.field}";`;
                con.query(sql, (err, products, field) => {
                  if (err) {
                    console.log(err);
                    reject(`Query failed: ${sql}`);
                  }
                  else {
                    resolve(`Successfully updated product.`);
                  }
                });
              }
            });
          })
          .catch(err => { reject(err); });
      }
      else {
        let con = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'mydb'
        });

        con.connect(err => {
          if (err) reject(err);
          else {
            let sql = `UPDATE product SET title="${data.title}", price=${data.price} WHERE title="${data.field}";`;

            con.query(sql, (err, products, field) => {
              if (err) {
                console.log(err);
                reject(`Query failed: ${sql}`);
              }
              else {
                resolve(`Successfully updated product.`);
              }
            });
          }
        });
      }
    });
    return updateProduct;
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
        const sql = `DELETE FROM product WHERE title="${productName}";`;
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
