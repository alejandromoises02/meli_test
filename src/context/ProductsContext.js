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
