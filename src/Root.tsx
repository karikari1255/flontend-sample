import * as React from 'react';
import { Link } from "react-router"
import { Paths } from "./Models";

interface Props {
  children: any
}

export default class Root extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h1>R∞ LTV</h1>
        <ul className="globalMenu">
          <li ><Link to="/" >TOP</Link></li>
          <li ><Link to={Paths.COUNTER} >カウンター</Link></li>
          <li ><Link to={Paths.CHART} >チャート</Link></li>
          <li ><Link to={Paths.NEWS} >お知らせ</Link></li>
          <li ><Link to={Paths.CONFIG} >設定</Link></li>
        </ul>
        <div className="content">
        {this.props.children}
        </div>
      </div>
    );
  }
}