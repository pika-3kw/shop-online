var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    res.json({
        test: true
    })
});

router.get('/', function (req, res, next) {
    res.json({
        test: true
    })
});

router.post('/transaction-complete', (req, res) => {
    console.log("Completed.");
    console.log(req.body);
    res.send(200);
})

module.exports = router;
