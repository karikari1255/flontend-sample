export interface ChartState {
  dataArray: Object[];
}

export interface JsonObject {
}

export interface MyAction {
  type: string;
  error?: Error;
}

export class ActionTypes {
  static INIT = 'INIT';
  static RELOAD = 'RELOAD';
  static FETCH_REQUEST = 'FETCH_REQUEST';
  static FETCH_SUCCESS = 'FETCH_SUCCESS';
  static FETCH_FAIL = 'FETCH_FAIL';
}

export class ChartDate {
  public name: string;
  public cv: number;
  public pv: number;

  constructor(name: string, cv: number, pv: number) {
    this.name = name;
    this.cv = cv;
    this.pv = pv;
  }
  /* 以下も同じ
  constructor(public name: string, public uv: number, public pv: number) {
  }
  */
}