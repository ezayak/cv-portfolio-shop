import React , {useEffect, useState, useContext} from "react";
import { ShopContext } from "../context";
import { CartItem } from "./CartItem";

const CartItems = (props) => {
    const [sum, setSum] = useState(0);
    const {changeCartVisibility = Function.prototype, order = []} = useContext(ShopContext);
    
    useEffect(() => {
        setSum(order.reduce((res, item) => res + item.price*item.quantity, 0));
    }, [order]);

    return (
        <ul className="collection cart-items">
            <li className="collection-item active"><h6>Order<span className="right" onClick={changeCartVisibility} style={{'cursor': 'pointer'}}><i className="material-icons">close</i></span></h6></li>
            {order.length ? 
                order.map(item => {
                    return (<CartItem {...item} key={item.mainId}/>)
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