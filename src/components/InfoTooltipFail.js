import React from "react";
import InfoTooltip from "./InfoTooltip";
import fail from "../images/fail.svg";



export default function InfoTooltipFail(props) {
  return (
    <InfoTooltip isOpen={props.isOpen} onClose={props.onClose} >
      <img srс={fail} className="popup__img-message" alt="Картинка с красным крестиком" />
      <p className="popup__message">
        Что-то пошло не так! Попробуйте ещё раз.
      </p>
    </InfoTooltip>
  );
}
