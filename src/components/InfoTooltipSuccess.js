import React from "react";
import InfoTooltip from "./InfoTooltip";
import union from "../images/Union.svg";



export default function InfoTooltipSuccess(props) {
  return (
    <InfoTooltip isOpen={props.isOpen} onClose={props.onClose} >
      <img srс={union} className="popup__img-message"  alt="Картинка с галкой" />
      <p className="popup__message">
        Вы успешно зарегистрировались!
      </p>
    </InfoTooltip>
  );
}
