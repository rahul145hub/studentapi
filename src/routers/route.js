const express = require('express');
const router = new express.Router();
require('../db/conn.js');
const Student = require('../models/students.js');

router.get('/', (req, res) => {
    res.send('Hello!!!');
});

router.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const data = await user.save();
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/students', async (req, res) => {
    try {
        const data = await Student.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/students/:id', async (req, res) => {
    try {
        const data = await Student.findById(req.params.id);
        
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send('!!!');
    }
});

router.patch('/students/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await Student.findByIdAndUpdate(req.params.id,req.body, {
                new: true                
        });
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send('!!!');
    }
});

router.delete('/students/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await Student.deleteOne({ _id : req.params.id });
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send('!!!');
    }
});

module.exports = router;