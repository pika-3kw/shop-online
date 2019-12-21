import React from "react";
import './CartItem.css'
import { ListGroup, Image } from "react-bootstrap";

const CartItem = props => {
    const { items } = props;
    return (
        <div className="CartItems" style={{ overflowY: "auto" }}>
            {items.map(item =>
                <ListGroup.Item key={item.sku} >
                    <Image src="https://via.placeholder.com/100x100" rounded />
                    <div className="itemInfo">
                        <h5>{item.name}</h5>
                        <p>Price: {item.price} {item.currency}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p className='Total'>Total: {item.price * item.quantity} {item.currency}</p>
                    </div>
                </ListGroup.Item>
            )}
        </div>
    )
}

export default CartItem;