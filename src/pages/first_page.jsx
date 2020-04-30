import React, {Component} from "react";
import {Sidemenu} from "../components/sidemenu";
import {Menu} from "../components/menu";
import {Tile, Tile2, Tile3, Tile4} from "../components/tile";
import {LineGraph} from "../components/lineGraph";

import './styles/first_page.scss';
import {ScatterPlot} from "../components/scatterPlot";
import {SafetyMeasures} from "../components/safety-measures";
import {CoronaChase} from "../animations/coronaChasingPerson";

export class FirstPage extends Component {
    render() {
        return (
            <div className={`container`}>
                <div className={'sidebar'}>
                    <Sidemenu/>
                </div>
                <div className={`middle-container`}>
                    <div className={`nav-bar`}>
                        {/* craze menu here */}
                        <Menu/>
                    </div>
                    <div className={`tiles`}>
                        {/* tiles here*/}
                        <Tile/>
                        <Tile2/>
                        <Tile3/>
                        <Tile4/>
                    </div>
                    <div className={`graphs`}>
                        {/* graphs here */}
                        <CoronaChase />
                        <div className={`area-chart`}>
                            <LineGraph />
                        </div>
                        <div className={`scatter-plot`}>
                            <ScatterPlot />
                        </div>
                    </div>
                    <div>
                        {/* recommendations here */}
                    </div>
                </div>
                <div className={`final-container`}>
                    <SafetyMeasures />
                </div>
            </div>
        );
    }
}