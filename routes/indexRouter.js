let express = require('express');
let router = express.Router();

let indexController = require('../controllers/indexController');

// test route
router.get('/test', indexController.test);


module.exports = router;