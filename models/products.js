const mysql = require('mysql');

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

  create: product => {

    let createProduct = new Promise((resolve, reject) => {

      let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
      });

      con.connect(err => {
        if (err) reject(err);
        else {
          let sql = `INSERT INTO products (title, image, dimensions, price, shipping) VALUES ("${product.title}", "${product.image}", "${product.dimensions}", ${product.price},${product.shipping})`;

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
