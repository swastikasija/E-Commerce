import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [value, setValue] = useState("");

  return (
    <ShopContext.Provider value={{ value, setValue }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
