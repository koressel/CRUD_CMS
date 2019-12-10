const superagent = require('superagent');

module.exports = {

  upload: img => {
    let uploadProduct = new Promise((resolve, reject) => {
      superagent.post('https://api.imgur.com/3/upload')
        .set('Authorization', 'Client-ID c9ba60e96146847')
        .send(img)
        .type('jpg')
        .end((err, res) => {
          if (err) reject(err);
          else resolve(res.body.data.link);
        });
    });
    return uploadProduct;
  }

};
