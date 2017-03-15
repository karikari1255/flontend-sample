import { ChartState, MyAction, ActionTypes, ChartDate } from "./Entities";

const initialState: ChartState = { dataArray: [] };
const initData = () => {
  var initArray = [];
  for (let i = 1; i < 8; i++) {
    var chartDate = new ChartDate(i.toString(), Math.floor(Math.random() * 9999), Math.floor(Math.random() * 9999));
    initArray.push(chartDate)
  }
  return initArray;
}
const reloadData = () => {
  var initArray = [];
  for (let i = 1; i < 8; i++) {
    var chartDate = new ChartDate(i.toString(), Math.floor(Math.random() * 5000), Math.floor(Math.random() * 3000));
    initArray.push(chartDate)
  }
  return initArray;
}

export function chart(state: ChartState = initialState, action: MyAction): ChartState {
  switch (action.type) {
    case ActionTypes.INIT: {
      const dist = initData();
      return Object.assign({}, state, { dataArray: dist });
    }
    case ActionTypes.RELOAD: {
      const dist = reloadData();
      return Object.assign({}, state, { dataArray: dist });
    }
    default:
      return state
  }
}