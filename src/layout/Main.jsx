import React, {useContext, useEffect} from "react";
import { API_URL, API_KEY } from "../config";
import { Preloader } from "../components/Preloader";
import { Items } from "../components/Items";
import { Cart } from "../components/Cart";
import { CartItems } from "../components/CartItems";
import { Alert } from "../components/Alert";
import { ShopContext } from "../context";

const Main = () => {
    const {setItems, changeCartVisibility, order, alertMessage, loading, isCartVisible} = useContext(ShopContext);

    const loadItems = () => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
        .then(res => res.json())
        .then(res => {
            res.shop && setItems(res.shop);
        })
    };

    const handleCartVisibility = () => {
        changeCartVisibility();
    };

    useEffect(function getItems(){
        loadItems();
        //eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handleCartVisibility={handleCartVisibility}></Cart>
            {loading 
                ? <Preloader /> :
                <Items/>
            }
            {isCartVisible && <CartItems/>}
            {alertMessage && <Alert/>}
        </main>
    );
}

export {Main};