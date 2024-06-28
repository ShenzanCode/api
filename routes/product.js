const express = require('express');
const { getallProucts, getallProuctstesting } = require('../controller/product');
const router= express.Router();

router.route("/me").get(getallProucts)
router.route("/test/:key").get(getallProuctstesting)

module.exports = router;