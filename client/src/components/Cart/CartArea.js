import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import './CartArea.css'
import CartItem from "./components/CartItem";
import CheckoutAction from './components/CheckoutAction';
import PaypalButtonTest from "../PaypalButtonTest";

const CartArea = props => {

    const cart = useSelector(state => state.cart);
    let { items } = cart.item_list;

    const [step, setStep] = useState("cart_item");

    return (
        <div className="CartArea">
            {{
                cart_item: <>
                    <CartItem items={items} />
                    <CheckoutAction setStep={setStep} total={cart.amount.total} currency={cart.amount.currency} />
                </>,
                payment_method: <PaypalButtonTest />,
            }[step]}
        </div>
    )
}

export default CartArea;