const express = require('express');

const Controller = require('../Controllers/formPage');
const router = express.Router();

router.get('/add-user',Controller.getAddProduct);
router.post('/add-user',Controller.postAddProduct);
// router.delete();
// router.put();

module.exports= router;