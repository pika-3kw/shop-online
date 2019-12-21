import React from "react";
import { useDispatch } from 'react-redux';
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cart.css';
const Cart = props => {
    const dispatch = useDispatch();

    const btnClose = () => {
        dispatch({ type: "CLOSE" });
    }

    return (
        <div className='Cart'>
            <span className="btnClose" onClick={btnClose}>
                <FontAwesomeIcon icon="times" />
            </span>
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