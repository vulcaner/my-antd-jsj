import React, { Component } from 'react';
import Chart from './Chart';
class TitleChart extends Component {
  render() {
    const {
      style,
      titleStyle,
      chartStyle,
      titleClassName,
      chartClassName,
      title,
      option
    }=this.props;
    return (
      <div style={style}>
        <div className={titleClassName} style={titleStyle} dangerouslySetInnerHTML={{ __html:title}}></div>
        <Chart className={chartClassName} style={chartStyle} option={option} />
      </div>
    );
  }
};
export default TitleChart;
