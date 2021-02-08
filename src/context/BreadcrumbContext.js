import React, { useState } from "react";

export const BreadcrumbContext = React.createContext([]);

export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  return (
    <BreadcrumbContext.Provider value={[breadcrumb, setBreadcrumb]}>
      {children}
    </BreadcrumbContext.Provider>
  );
};