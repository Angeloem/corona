import React, {Component} from "react";
import {Area, AreaChart, Legend, Tooltip, XAxis, YAxis} from "recharts";
import * as axios from "axios";

export class LineGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            data: []
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        axios.default.get(
            'https://api.covid19api.com/country/tanzania?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z'
        ).then((res) => {
            this.setState({
                data: res.data
            });
        }).catch((err) => {
            alert('Data loading failed, please try again!!');
        });
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        return (
            <div className={`area-chart`}>
                <AreaChart width={730} height={this.state.height/2} data={this.state.data}
                           margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                    {/*<CartesianGrid strokeDasharray="3 3"/>*/}
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="Date"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Area type="monotone" dataKey="Confirmed" stroke="#8884d8" fillOpacity={1} fill={`url(#colorUv)`}/>
                </AreaChart>
            </div>
        );
    }
}