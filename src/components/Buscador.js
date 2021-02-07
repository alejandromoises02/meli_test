import React, { useState } from "react";
import LogoIcon from "./LogoIcon";
import SearchIcon from "./SearchIcon";
import { Link } from "react-router-dom";

const Buscador = () => {
  const [busqueda, setbusqueda] = useState("");

  const busquedaInputChange = (event) => {
    setbusqueda(event.target.value);
  };

  return (
    <div className="navback ">
      <div className="container">
        <div className="row justify-content-center">
          <LogoIcon className="col-1" />
          <div className="col-9 search">
            <input
              type="text"
              name="finder"
              onChange={busquedaInputChange}
              className="input_search"
              placeholder="Nunca dejes de buscar"
              maxLength="120"
            />
            <button type="submit" className="button_search">
              <Link to={'/items?search='+busqueda}>
                <SearchIcon />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
