import React from 'react';
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MiniCart.css';


const MiniCart = props => {

    const dispatch = useDispatch();

    const click = () => {
        dispatch({ type: 'OPEN_MINI_CART' });
    }

    return (
        <span className="MiniCart">
            <FontAwesomeIcon onClick={click} icon="shopping-bag" size="lg" color='white' />
        </span>
    )
}
export default MiniCart;