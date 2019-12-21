var express = require('express');
var router = express.Router();
import paypal from "paypal-rest-sdk";


paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ATbH9kBoWMrtQnO3QCUKa2LGI090XZfmbEG2bfIoO_npZ9y_5T1v3NXbhv3dGXiVuhmdbTsihE5z3h_r',
    'client_secret': 'EFwLIhIuuVzgGAq5RHo0a5Q4AwwfzkL89Sdd8P2FEWIO2kJPEl--yPEbHMKLU26DC7hJ9HmCoV0mw5Ia'
});


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

router.post('/payment', function (req, res, next) {
    const create_payment_json = req.body;

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            console.log(error)
            res.send("err")
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            res.json(payment);
        }
    });

});

module.exports = router;
