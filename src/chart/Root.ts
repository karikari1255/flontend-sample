import {connect} from "react-redux";
import {DispatchActions} from "./DispatchActions";
import {Dispatch} from "redux";
import {Chart} from "./Chart";

export default connect(
  (store: any) => {return {state: store.chart}},
  (dispatch: Dispatch<any>) => {return {actions: new DispatchActions(dispatch)}}
)(Chart);