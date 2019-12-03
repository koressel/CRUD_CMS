const mysql = require('mysql');

module.exports = {

  validateLoginInfo: (username, password) => {
    let validation = new Promise((resolve, reject) => {
      let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
      });

      con.connect(err => {
        if (err) reject(err);
        else {
          const sql =
            `SELECT userId
             FROM users 
             WHERE username = "${username}"
             AND password = "${password}";`;

          con.query(sql, (err, result, field) => {
            userId = result[0];
            if (!err) {
              resolve(userId);
            }
            else {
              reject(err);
            }
          });
        }

      });
    });

    return validation;
  }

};
