import React , {useEffect, useState} from "react";
import { CartItem } from "./CartItem";

const CartItems = (props) => {
    const {order = [], handleCartVisibility = Function.prototype, changeOrder = Function.prototype} = props;
    const [sum, setSum] = useState(0);
    
    useEffect(() => {
        setSum(order.reduce((res, item) => res + item.price*item.quantity, 0));
    }, [order]);

    return (
        <ul className="collection cart-items">
            <li className="collection-item active"><h6>Order<span className="right" onClick={handleCartVisibility} style={{'cursor': 'pointer'}}><i className="material-icons">close</i></span></h6></li>
            {order.length ? 
                order.map(item => {
                    return (<CartItem {...item} key={item.mainId} changeOrder={changeOrder}/>)
                })
            : 
                <li className="collection-item">Cart is empty</li>
            }
            <li className="collection-item active">
                Total: {sum}
                <button className="right waves-effect waves-teal btn-flat white-text btn-small">Purchase</button>
            </li>
        </ul>                
    );
}

export {CartItems};