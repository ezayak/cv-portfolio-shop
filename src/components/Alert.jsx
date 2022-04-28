import React, {useContext, useEffect} from "react";
import { ShopContext } from "../context";

const Alert = () => {
    const {displayName, closeAlert = Function.prototype} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        }
    //eslint-disable-next-line
    },[displayName]);

    return (
        <div id="toast-container">
            <div className="toast">{displayName} is added to Cart</div>
        </div>
    );
}

export {Alert};