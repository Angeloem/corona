import React, {Component} from "react";
import './styles/sidemenu.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faMedkit, faSearch, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";

export class Sidemenu extends Component {
    render() {
        return (
            <aside>
                <ul className={'side-menu'}>
                    <li>
                        <FontAwesomeIcon icon={faHome} size={200}/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSearch} size={200} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMedkit} size={200} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSkullCrossbones} size={200} />
                    </li>
                </ul>
            </aside>
        );
    }
}
