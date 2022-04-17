import React from "react";

const Cart = (props) => {
    const {quantity = 0, handleCartVisibility = Function.prototype} = props;

    return (
        <div className="cart blue darken-4 white-text" onClick={handleCartVisibility}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}

export {Cart};