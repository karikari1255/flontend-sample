import * as React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartState, ChartDate } from "./Entities";
import { DispatchActions } from "./DispatchActions";

interface Props {
  state: ChartState;
  actions: DispatchActions;
}

const sampleData = [
  { name: '201701', uv: 4000, pv: 2400, amt: 2400 },
  { name: '201702', uv: 3000, pv: 1398, amt: 2210 },
  { name: '201703', uv: 2000, pv: 9800, amt: 2290 },
  { name: '201704', uv: 2780, pv: 3908, amt: 2000 },
  { name: '201705', uv: 1890, pv: 4800, amt: 2181 },
  { name: '201706', uv: 2390, pv: 3800, amt: 2500 },
  { name: '201707', uv: 3490, pv: 4300, amt: 2100 },
];

export class Chart extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.actions.init();
  };
  render() {
    return (
      <div>
        <button onClick={() => this.props.actions.reload()}>更新</button>
        <LineChart width={700} height={400} data={this.props.state.dataArray} style={{ margin: '3rem auto 2rem' }}
          margin={{ top: 10, right: 40, left: 30, bottom: 10 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="linear" dataKey="cv" stroke="#82ca9d" />
        </LineChart>

        <BarChart width={700} height={400} data={sampleData} style={{ margin: '3rem auto 2rem' }}
          margin={{ top: 10, right: 40, left: 30, bottom: 10 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    )
  }
}