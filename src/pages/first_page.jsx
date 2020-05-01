import React, {Component} from "react";
import {Sidemenu} from "../components/sidemenu";
import {Menu} from "../components/menu";
import {Tile, Tile2, Tile3, Tile4} from "../components/tile";
import {LineGraph} from "../components/lineGraph";
import {SafetyMeasures} from "../components/safety-measures";
import {AboutMe} from "../animations/aboutMe";
import * as axios from "axios";

import './styles/first_page.scss';


export class FirstPage extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            newConfirmed: '',
            totalDeaths: '',
            totalRecoveries: '',
            totalConfirmed: '',
        };
    }

    componentDidMount(){
        axios.default.get(
            'https://api.covid19api.com/summary'
        ).then((res) => {
            this.setState({
                totalDeaths: res.data.Global['TotalDeaths'],
                newConfirmed: res.data.Global['NewConfirmed'],
                totalRecoveries: res.data.Global['TotalRecovered'],
                totalConfirmed: res.data.Global['TotalConfirmed']
            });
            console.log(res.data.Global['TotalDeaths']);
        }).catch((err) => {
            alert('Data loading failed, please try again!!');
        });
    }

    render() {
        return (
            <div className={`container`}>
                {/*<div className={'sidebar'}>
                    <Sidemenu/>
                </div>*/}
                <div className={`middle-container`}>
                    <div className={`nav-bar`}>
                        {/* craze menu here */}
                        <Menu/>
                    </div>
                    <div className={`tiles`}>
                        {/* tiles here*/}
                        { Tile(this.state.newConfirmed ) }
                        { Tile2(this.state.totalConfirmed) }
                        { Tile3(this.state.totalRecoveries) }
                        { Tile4(this.state.totalDeaths) }
                    </div>
                    <div className={`graphs`}>
                        {/* graphs here */}
                        {/*<CoronaChase />*/}
                        <h4>Tanzania's Stats</h4>
                        <div className={`area-chart`}>
                            <LineGraph />
                        </div>
                    </div>
                    <div>
                        {/* recommendations here */}
                    </div>
                </div>
                <div className={`final-container`}>
                    <SafetyMeasures />
                    <div className="about-me">
                        <AboutMe />
                    </div>
                </div>
            </div>
        );
    }
}