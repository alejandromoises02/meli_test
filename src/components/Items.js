import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { BreadcrumbContext } from "../context/BreadcrumbContext";
import Breadcrumb from "./Breadcrumb";
import ItemsDetalContainer from "./ItemsDetalContainer";


const Items = () => {
  const [productos, setProductos] = useContext(ProductsContext);
  const [breadcrumb, setBreadcrumb] = useContext(BreadcrumbContext);
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

          categories: data.available_filters[0]?.values.map(
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
              address: element.address.state_name
            })),
          ],
        };
        setProductos(aux);
        console.log(aux);
        const breadAux = data.filters[0]?.values[0].path_from_root.map(
                (element) => element.name
            )
        setBreadcrumb(breadAux)
      });
  }, [search]);

  return (
    <>
      <Breadcrumb search = {search} />
      <ItemsDetalContainer/>
    </>
  );
};

export default Items;
