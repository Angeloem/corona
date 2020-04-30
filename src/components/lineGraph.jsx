import React, {Component} from "react";
import {Area, AreaChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis} from "recharts";

export class LineGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    data = [
        {
            "name": "Page A",
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "pv": 4300,
            "amt": 2100
        }
    ];

    render() {
        return (
            <div className={`area-chart`}>
                <AreaChart width={730} height={this.state.height/2} data={this.data}
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
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Area type="monotone" dataKey="pv" stroke="#8884d8" fillOpacity={1} fill={`url(#colorUv)`}/>
                </AreaChart>
            </div>
        );
    }
}