import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./Checkout.css";

const Checkout = props => {

    const cart = useSelector(state => state.cart);

    const { total, currency } = props;
    let create_payment_json;


    const checkoutEvent = () => {
        if (cart.length === 0) return;
        let create_payment_json = {
            intent: "sale",
            payer: {
                payment_method: "paypal"
            },
            redirect_urls: {
                return_url: "http://return.url",
                cancel_url: "http://cancel.url"
            },
            transactions: [cart]
        };
    }

    return (
        <div className='Checkout'>
            <div className="">
                Cart total: {total} {currency}
            </div>
            <Button onClick={checkoutEvent} variant="success">Checkout</Button>
        </div>)
}

export default Checkout;