import React from "react";
import { Item } from "./Item";

const Items = (props) => {
    if (!props.items) {
        return (
            <h3>Nothing is here</h3>
        );
    }

    const items = props.items.map((item) => {
        const urlImage = !item.displayAssets.length ? `https://via.placeholder.com/300x450?text=${item.displayName}` : item.displayAssets[0].full_background;
        return {
            mainId: item.mainId,
            displayName: item.displayName,
            displayDescription: item.displayDescription,
            price: item.price.regularPrice,
            urlImage: urlImage
        };
    });
    
    return (
        <div className="items">
            {items.map((item) => {
                return(<Item key={item.mainId} {...item} addToCart={props.addToCart}/>);
            })}
        </div>
    );
}

export {Items};