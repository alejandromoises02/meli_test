import React, { useState } from "react";

export const ProductsContext = React.createContext([]);

export const ProductsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  return (
    <ProductsContext.Provider value={[productos, setProductos]}>
      {children}
    </ProductsContext.Provider>
  );
};

/*{
  “author”: {
  “name”: String
  “lastname”: String
  },
  categories: [String, String, String, ...],
  items: [
  {
  "id": String,
  "title": String,
  "price": {
  "currency": String,
  "amount": Number,
  "decimals": Number
  },
  “picture”: String,
  "condition": String,
  "free_shipping": Boolean
  },
  {...},
  {...},
  {...}
  ]
  }*/

