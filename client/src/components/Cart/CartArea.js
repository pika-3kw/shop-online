import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import './CartArea.css'
import CartItem from "./components/CartItem";
import CheckoutAction from './components/CheckoutAction';
import PaypalButton from "./components/PaypalButton";

const CartArea = props => {
    const cart = useSelector(state => state.cart);
    let { items } = cart.item_list;

    return (
        <div className="CartArea">
            <PaypalButton />
            {/* <CartItem items={items} />
            <CheckoutAction total={cart.amount.total} currency={cart.amount.currency} /> */}
        </div>
    )
}

export default CartArea;