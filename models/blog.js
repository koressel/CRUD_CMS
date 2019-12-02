const mysql = require('mysql');

module.exports = {

  getAll: () => {
    let getAllBlogPosts = new Promise((resolve, reject) => {
      let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
      });

      con.connect(err => {
        if (err) reject(err)
        else {
          const sql = `SELECT * FROM blogposts;`;
          con.query(sql, (err, blogposts, field) => {
            if (err) {
              reject(err);
            }
            else {
              resolve(blogposts);
            }
          });
        }
        
      });
    });

    return getAllBlogPosts;
  },

  delete: (blogPostName) => {
    let deleteBlogPost = new Promise((resolve, reject) => {

      let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
      });

      con.connect(err => {
        const sql = `DELETE FROM blogposts WHERE title="${blogPostName}";`;
        con.query(sql, (err, products, field) => {
          if (err) {
            console.log(err);
            reject(`Query failed: ${sql}`);
          }
          else {
            resolve(`Successfully deleted ${blogPostName}`);
          }
        });
      });
    });

    return deleteBlogPost;
  }

};
