import React, {Component} from "react";
import './styles/coronaChase.scss';

export class CoronaChase extends Component {
    render() {
        return (
            <div className={`coChaseContainer`}>
                <div className="corona"> </div>
                <div className="person"> </div>
            </div>
        );
    }
}