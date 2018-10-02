const sql = require('mssql');
const keys = require('../config/dev');

module.exports = app => {
  app.get('/api/data', async (req, res) => {
    const conn = await new sql.connect(keys);
    const request = new sql.Request(conn);
    request.input('Table', sql.Int, 1);
    request.execute('usp_GetTableById', (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send(err);
      }
    });
  });
};
