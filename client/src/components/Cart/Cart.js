import React from "react";
import { ListGroup } from "react-bootstrap";
import './Cart.css';
const Cart = props => {

    return (
        <div className='Cart'>
            <ListGroup>
                <ListGroup.Item active >
                    My Cart
                </ListGroup.Item>
                <ListGroup.Item >
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item onClick={() => console.log("as")} >
                    This one is a button
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Cart;