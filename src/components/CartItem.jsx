import React, { useContext } from "react";
import { ShopContext } from "../context";

const CartItem = (props) => {
    const {mainId, price, quantity, displayName} = props;
    const {changeOrder} = useContext(ShopContext);
 
    const removeItemFromOrder = () => {
        changeOrder(mainId, 0);
    }

    const changeQuantity = (numberAdd) => {
        if (quantity + numberAdd !== 0) {
            changeOrder(mainId, numberAdd);
        } else {
            changeOrder(mainId, 0);
        }
    }

    return (
        <li className="collection-item">
            {displayName} x {quantity} x {price} = {quantity*price}
            <span className="secondary-content">
                <i className="material-icons"  style={{'cursor': 'pointer'}} onClick={() => changeQuantity(1)}>add</i>
                <i className="material-icons"  style={{'cursor': 'pointer'}} onClick={() => changeQuantity(-1)}>remove</i>
                <i className="material-icons"  style={{'cursor': 'pointer'}} onClick={removeItemFromOrder}>close</i>
            </span>
        </li>
    );
}

export {CartItem};