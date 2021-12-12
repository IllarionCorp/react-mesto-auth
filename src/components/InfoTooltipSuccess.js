import React from "react";
import InfoTooltip from "./InfoTooltip";
import success from "../images/success.svg";



export default function InfoTooltipSuccess(props) {
  return (
    <InfoTooltip isOpen={props.isOpen} onClose={props.onClose} >
      <img srс={success} className="popup__img-message"  alt="Картинка с галкой" />
      <p className="popup__message">
        Вы успешно зарегистрировались!
      </p>
    </InfoTooltip>
  );
}
