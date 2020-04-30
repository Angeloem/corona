import React from "react";
import './styles/list.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const iconAndText = (text, icon) => {
    return (
        <div className={`container-icon`}>
            <div className={`text`}>
                { text }
            </div>
            <div className={`icon`}>
                <FontAwesomeIcon icon={icon} />
            </div>
        </div>
    );
};
