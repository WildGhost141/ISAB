import "../../assets/css/components/popups.css";

import { useContext } from "react";
import { PopupContext } from "../../providers/PopupProvider";
import PopupRenderer from "./PopupRenderer";

export default function GlobalsContainer() {
  const { popup, setPopup } = useContext(PopupContext);

  return (
    <>
      {popup.elements ? (
        <PopupRenderer params={popup}>{popup.elements}</PopupRenderer>
      ) : null}
    </>
  );
}
