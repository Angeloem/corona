import React, {Component} from "react";
import './styles/menu.scss';
import {faHandsWash, faHeadSideCoughSlash, faHome, faPeopleArrows} from "@fortawesome/free-solid-svg-icons";
import {iconAndText} from "./iconNText";

export class SafetyMeasures extends Component {
    constructor () {
        super();
        this.state = {
            listOfMeasures: []
        }
    }

    componentDidMount() {
        this.setState({
            listOfMeasures: [
                {
                    text: 'Stay Home',
                    icon: faHome
                },
                {
                    text: 'Safe Distance',
                    icon: faPeopleArrows
                },
                {
                    text: 'Wash Hands',
                    icon: faHandsWash
                },
                {
                    text: 'Cover your cough',
                    icon: faHeadSideCoughSlash
                }
            ]
        });
    }

    render() {
        return (
            <nav className={`safety-header`}>
                <div className={`dashboard-heading`}>
                    <h4>Safety Measures</h4>
                    <div>Source: <b>WHO</b></div>
                </div>
                <div className={`tiles-list`}>
                    {
                        this.state.listOfMeasures.map((item, index) => {
                            /*console.log(item.text);*/
                            return iconAndText(item.text, item.icon);
                        })
                    }
                </div>
            </nav>
        );
    }

}