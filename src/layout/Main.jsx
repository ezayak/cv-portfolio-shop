import React, {useState, useEffect} from "react";
import { API_URL, API_KEY } from "../config";
import { Preloader } from "../components/Preloader";
import { Items } from "../components/Items";
import { Cart } from "../components/Cart";
import { CartItems } from "../components/CartItems";
import { Alert } from "../components/Alert";

const Main = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [alertMessage, setAlert] = useState('');

    const loadItems = () => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
        .then(res => res.json())
        .then(res => {
            res.shop && setItems(res.shop);
            res.shop && setLoading(false);
        })
    };

    const handleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };
    
    const closeAlert = () => {
        setAlert('');
    }

    const addToCart = (item) => {
            const findItemOrderIndex = order.findIndex(element => element.mainId === item.mainId);
            setAlert(item.displayName);

            if (findItemOrderIndex < 0) {
                item = {
                    mainId: item.mainId,
                    price: item.price,
                    displayName: item.displayName,
                    urlImage: item.urlImage,
                    quantity: 1,
    
                }
                setOrder([...order, item]);
            } else {
                setOrder(order.map((orderItem, index) => {
                    if (index === findItemOrderIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };

                    } else {
                        return orderItem;
                    }
                }));
            }

    }

    const changeOrder = (id, number) => {
        if (number === 0) {
            setOrder(order.filter(item => item.mainId !== id));
        } else {
            setOrder(order.map(item => {
                if (item.mainId === id) {
                    return {...item, quantity: item.quantity + number}
                } else {
                    return item;
                };
            }));
        }
    }

    useEffect(function getItems(){
        loadItems();
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handleCartVisibility={handleCartVisibility}></Cart>
            {loading 
                ? <Preloader /> :
                <Items items={items} addToCart={addToCart}/>
            }
            {isCartVisible && <CartItems order={order} handleCartVisibility={handleCartVisibility} changeOrder={changeOrder}/>}
            {alertMessage && <Alert displayName={alertMessage} closeAlert={closeAlert}/>}
        </main>
    );
}

export {Main};