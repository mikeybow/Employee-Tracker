const express = require('express');
const router = express.Router();
const employeeStaff = require('../models/employee');

router.get('/', (_req, res) => {
    employeeStaff.all(data => {
        res.render('index', {staff: data})
    });
});

router.post('/api/employee', (req, res) => {
    employeeStaff.create(req.body.first_name, result => {
        console.log(result);
        res.redirect('/');
    });
});

router.post('/api/employee', (req, res) => {
    employeeStaff.create(req.body.last_name, result => {
        console.log(result);
        res.redirect('/');
    });
});

router.put('/api/employee/:id', (req, res) => {
    employeeStaff.update(req.params.id, result => {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;