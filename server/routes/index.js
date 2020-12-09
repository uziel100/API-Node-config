const express = require('express');
const api = express.Router(); 

const testCtrl = require('../controllers/test');


api.get('/', testCtrl.gretting);
api.get('/test', testCtrl.test);


module.exports = api;

