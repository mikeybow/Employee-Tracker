const orm = require('../config/orm');

const staff = {
    all: function(cb) {
        orm.selectAll('employee', function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.insertOne('first_name', name, function(res) {
            cb(res);
        });

        orm.insertOne('last_name', name , function(res) {
            cb(res);
        });
    },
    update: function(colID, cb) {
        orm.updateOne('employee', colID, function(res) {
            cb(res);
        });
    }
};

module.exports = staff;