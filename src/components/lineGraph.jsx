import React, {Component} from "react";
import {Area, AreaChart, Legend, Tooltip, XAxis, YAxis} from "recharts";
import * as axios from "axios";

export class LineGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            chartWidth: 0,
            data: []
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        //https://api.covid19api.com/country/tanzania?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
        axios.default.get(
            'https://api.covid19api.com/dayone/country/tanzania'
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
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
        if (this.state.width < 1300) {
            this.setState({
                chartWidth: (this.state.width - 10),
                data: this.state.data
            })
        } else {
            this.setState({
                chartWidth: this.state.width * .75,
                data: this.state.data
            })
        }
    }

    render() {
        return (
            <div className={`area-chart`}>
                <AreaChart width={this.state.chartWidth} height={this.state.height/2} data={this.state.data}
                           margin={{top: 5, right: 35, left: 0, bottom: 5}}>
                    {/*<CartesianGrid strokeDasharray="3 3"/>*/}
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="deaths" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff0844" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#ffb199" stopOpacity={0.2}/>
                        </linearGradient>
                        <linearGradient id="recovered" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#96e6a1" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="Date"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Area type="monotone" dataKey="Confirmed" stroke="#8884d8" fillOpacity={1} fill={`url(#colorUv)`}/>
                    <Area type="monotone" dataKey="Deaths" stroke="#ff0844" fillOpacity={1} fill={`url(#deaths)`}/>
                    <Area type="monotone" dataKey="Recovered" stroke="#82ca9d" fillOpacity={1} fill={`url(#recovered)`}/>
                </AreaChart>
            </div>
        );
    }
}