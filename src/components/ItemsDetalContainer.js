import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ShippingIcon from "./ShippingIcon";

const ItemsDetalContainer = () => {
  const [productos, setProductos] = useContext(ProductsContext);
  let num;

  return (
    <div className="container">
      <div className="row">
        {productos.length === 0 ? (
          <div></div>
        ) : (
          productos.items[0].map(
            (element, index) =>
              index < 4 && (
                <div className="item_cont col-10 offset-1" key={index}>
                  <img className="img_items" src={element.picture} />
                  <div>
                    <div className="price_shipping">
                      <h2>
                        {element.price.currency==="ARS" && "$ "}
                        {element.price.amount
                          .toString()
                          .split("")
                          .reverse()
                          .join("")
                          .replace(/(?=\d*\.?)(\d{3})/g, "$1.")
                          .split("")
                          .reverse()
                          .join("")
                          .replace(/^[\.]/, "")}
                      </h2>

                      {element.free_shipping && <ShippingIcon />}
                    </div>
                    <h3>{element.title}</h3>
                  </div>
                  <h4>{element.address}</h4>
                </div>
              )
          )
        )}
      </div>
    </div>
  );
};

export default ItemsDetalContainer;
