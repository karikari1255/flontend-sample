import 'isomorphic-fetch';
import {ActionTypes,JsonObject, ChartDate} from "./Entities";

export const myHeaders = new Headers({
  "Content-Type": "application/json",
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
});

export class DispatchActions {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch
  }

  public init() {
    this.dispatch({type: ActionTypes.INIT})
  }

  public reload() {
    this.dispatch({type: ActionTypes.RELOAD})
  }
}