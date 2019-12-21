import React from "react";
import { Button } from "react-bootstrap";
import "./Checkout.css";

const Checkout = props => {

    const { total, currency } = props;
    return (
        <div className='Checkout'>
            <div className="">
                Cart total: {total} {currency}
            </div>
            <Button variant="success">Checkout</Button>
        </div>)
}

export default Checkout;