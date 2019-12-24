import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./CheckoutAction.css";
import axios from "axios";

const CheckoutAction = props => {

    const cart = useSelector(state => state.cart);

    const { total, currency, setStep } = props;

    return (
        <div className='CheckoutAction'>
            <div className="">
                Cart total: {total} {currency}
            </div>
            <Button disabled={cart.item_list.items.length === 0} onClick={() => setStep("payment_method")} variant="success">Checkout</Button>
        </div>)
}

export default CheckoutAction;