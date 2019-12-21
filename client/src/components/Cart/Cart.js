import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkout from "./components/Checkout";
import './Cart.css';
const Cart = props => {
    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState();

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        let { items } = cart.item_list;
        if (items.length === 0)
            setCartItems("Cart Empty")
        else
            setCartItems(items.map(item =>
                <ListGroup.Item key={item.sku} >
                    <Image src="https://via.placeholder.com/100x100" rounded />
                    <div className="itemInfo">
                        <h5>{item.name}</h5>
                        <p>Price: {item.price} {item.currency}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p className='Total'>Total: {item.price * item.quantity} {item.currency}</p>
                    </div>
                </ListGroup.Item>
            ))
    }, [cart])

    const btnClose = () => {
        dispatch({ type: "CLOSE" });
    }

    return (
        <div className='Cart'>
            <span className="btnClose" onClick={btnClose}>
                <FontAwesomeIcon icon="times" />
            </span>
            <ListGroup>
                <ListGroup.Item active >My Cart</ListGroup.Item>
                <div className="cartItems" style={{ overflowY: "auto" }}>
                    {cartItems}
                </div>
                <Checkout total={cart.amount.total} currency={cart.amount.currenc} />
            </ListGroup>
        </div>
    )
}

export default Cart;