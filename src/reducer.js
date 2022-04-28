export function reducer(state, {type, payload})  {
    switch (type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: payload,
                loading: false
            };
        case 'ADD_TO_CART': return {
            ...state,
            alertMessage: payload.displayName,
            order: addToCart(state.order, payload)
        };
        case 'CART_VISIBILITY': 
            return {
                ...state,
                isCartVisible: !state.isCartVisible
            };
        case 'CHANGE_ORDER':
            return {
                ...state,
                order: changerOrder(state.order, payload.id, payload.number)
            };
        case 'CLOSE_ALERT': 
            return {
                ...state,
                alertMessage: '',
            };
        default:
            return state;
    }
}

function changerOrder(order, id, number) {
    if (number === 0) {
        return order.filter(item => item.mainId !== id);
    } else {
        return order.map(item => {
            if (item.mainId === id) {
                return {...item, quantity: item.quantity + number}
            } else {
                return item;
            };
        });
    }

}

function addToCart(order, item) {
    const findItemOrderIndex = order.findIndex(element => element.mainId === item.mainId);

    if (findItemOrderIndex < 0) {
        const newItem = {
            mainId: item.mainId,
            price: item.price,
            displayName: item.displayName,
            urlImage: item.urlImage,
            quantity: 1,

        }
        return [...order, newItem];
    } else {
        return order.map((orderItem, index) => {
            if (index === findItemOrderIndex) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                };

            } else {
                return orderItem;
            }
        });
    }
}