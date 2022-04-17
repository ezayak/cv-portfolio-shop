import React from "react";


const Item = (props) => {
    const {displayName, urlImage, price, displayDescription, addToCart = Function.prototype, mainId} = props;

    const handleBuy = () => {
      addToCart({
        mainId: mainId,
        displayName: displayName,
        urlImage: urlImage,
        price: price
      });
    }

    return (
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator"  src={urlImage} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{displayName}</span>
        </div>
        <div className="card-reveal">
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
            <button className="btn" onClick={handleBuy}>Buy</button>
            <span className="right" style={{fontSize: '1.8rem'}}>{price} USD</span>
        </div>
      </div>
    );
}

export {Item};