import React from "react";
import { HashRouter, Route } from 'react-router-dom';

import MainMenu from "./main-menu";
import BarCharts from "../bar-charts";
import CircleCharts from "../circles-charts";
import PieCharts from "../pie-charts";
import LineCharts from "../line-charts";
import TreeCharts from "../tree-charts";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" component={MainMenu}/>
          <Route path="/bar" component={BarCharts}/>
          <Route path="/pie" component={PieCharts}/>
          <Route path="/circle" component={CircleCharts}/>
          <Route path="/line" component={LineCharts}/>
          <Route path="/tree" component={TreeCharts}/>
        </div>
      </HashRouter>
    );
  }
}
