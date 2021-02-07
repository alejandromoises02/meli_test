import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

const Items = () => {
  const [productos, setProductos] = useContext(ProductsContext);
  const search = new URLSearchParams(useLocation().search).get("search");

  useEffect(() => {
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=:" + search;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        const aux = {
          author: {
            name: "Alejandro",
            lastname: "Fernandez",
          },

          categories: data.available_filters[0].values.map(
            (element) => element.name
          ),

          items: [
            data.results.map((element) => ({
              id: element.id,
              title: element.title,
              price: {
                currency: element.currency_id,
                amount: Math.trunc(element.price),
                decimals: element.price - Math.trunc(element.price),
              },
              picture: element.thumbnail,
              condition: element.attributes[2],
              free_shipping: element.shipping.free_shipping,
            })),
          ],
        };
        setProductos(aux);
      });
  }, [search]);

  return (
    <>
      <h1>{search}</h1>
    </>
  );
};

export default Items;
