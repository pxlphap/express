const express = require('express');
const {getHomepage, getA} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/getA', getA);
router.get('/sample', (req, res) => {
    res.render('sample.ejs');
});


module.exports = router