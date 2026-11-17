import { useContext } from "react";
import closeIcon from "../../assets/img/icons/icon_close.svg";
import { PopupContext } from "../../providers/PopupProvider";

export default function PopupRenderer({ params, children }) {
  const { popup, setPopup } = useContext(PopupContext);

  return (
    <div
      className="popup-overlay"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="popup-container">
        <div className="popup-header">
          <h2>{params.title ?? "Popup"}</h2>
          <button onClick={(e) => setPopup({})}>
            <img src={closeIcon} />
          </button>
        </div>

        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "var(--primary-col)",
            marginBottom: "0.5rem",
          }}
        ></div>

        {children}
      </div>
    </div>
  );
}
