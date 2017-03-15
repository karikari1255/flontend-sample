import * as React from "react";
import { CounterState } from "./Entities";
import { DispatchActions } from "./DispatchActions";

interface Props {
  state: CounterState;
  actions: DispatchActions;
}

export class Counter extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <p>score: {this.props.state.num}</p>
        <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
      </div>
    )
  }
}