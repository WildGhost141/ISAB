import { createContext, useState } from "react";
//import { createContext } from "react";

export const PopupContext = createContext();

function PopupProvider({ children }) {
  // {
  //   title: "Popup header title"
  //   elements: <Element />
  // }
  const [popup, setPopup] = useState({});

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
