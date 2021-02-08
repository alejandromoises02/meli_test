import React, { useContext, useEffect } from "react";
import { BreadcrumbContext } from "../context/BreadcrumbContext";
import { Link } from "react-router-dom";


const Breadcrumb = ({search}) => {
    search = search.toLowerCase() 
    search = search.charAt(0).toUpperCase() + search.slice(1)
    
  const [breadcrumb, setBreadcrumb] = useContext(BreadcrumbContext);
  

  return (
      <div className="container"> 
       <div className="row">
    <div className="bann_breadcrumb col-10 offset-1 justify">
     {breadcrumb?.length > 0? (
         breadcrumb.map((element, index) => (
             
            <Link className="prop_breadcrumb" key={index} to={'#'}>{element}</Link>
            
         ))
     ):(<Link className="prop_breadcrumb" to={'#'}>{
        search = search.charAt(0).toUpperCase() + search.slice(1)
     }</Link>)}
               
    
    </div>
    </div>
    </div>
  );
};

export default Breadcrumb;
