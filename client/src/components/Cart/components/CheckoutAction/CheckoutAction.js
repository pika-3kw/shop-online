import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./CheckoutAction.css";
import axios from "axios";

const CheckoutAction = props => {

    const cart = useSelector(state => state.cart);

    const { total, currency } = props;
    let create_payment_json;

    const checkoutEvent = () => {
        if (cart.length === 0) return;

        create_payment_json = {
            intent: "order",
            payer: {
                payment_method: "paypal"
            },
            redirect_urls: {
                return_url: "http://return.url",
                cancel_url: "http://cancel.url"
            },
            transactions: [{
                ...cart,
                description: "This is the payment description."
            }],

        };

        delete create_payment_json.transactions[0].cartId;

        axios.post('/api/payment', create_payment_json)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    return (
        <div className='CheckoutAction'>
            <div className="">
                Cart total: {total} {currency}
            </div>
            <Button onClick={checkoutEvent} variant="success">Checkout</Button>
        </div>)
}

export default CheckoutAction;