const connection = require('./connection');

const orm = {
    selectAll: function(table, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, table, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, employee, cb) {
        let queryString = 'INSERT INTO ??(employee, first_name, last_name) VALUES(?,?)';
        connection.query(queryString,[table, employee, 0], function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, queryID, cb) {
        let queryString = 'UPDATE ?? SET name = ? WHERE id = ?';
        connection.query(queryString, [table, 1, queryID], function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;