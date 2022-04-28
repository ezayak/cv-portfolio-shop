import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    items: [],
    loading: true,
    order: [],
    isCartVisible: false,
    alertMessage: ''
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer,initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    };

    value.changeOrder = (itemId, number) => {
        dispatch({type: 'CHANGE_ORDER', payload: {id: itemId, number: number}});
    }

    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item});
    }

    value.changeCartVisibility = () => {
        dispatch({type: 'CART_VISIBILITY'});
    };

    value.setItems = (data) => {
        dispatch({type: 'SET_ITEMS', payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}