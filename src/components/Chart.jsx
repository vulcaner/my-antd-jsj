import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import echarts from 'echarts';
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/line';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/map';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/graphic';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/visualMap';
class Chart extends Component {
  constructor(props) {
    super(props);
    this.chart=null;
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.reSizeDiv);
    this.chart.clear();
    this.chart.dispose();
    this.chart=null;
    this.chartDiv = null;
  }
  componentDidMount() {
    let self=this;
    self.chart = echarts.init(self.chartDiv);
    self.chart.showLoading();
    self.chart.setOption(self.props.option);
    self.chart.hideLoading();
    window.addEventListener('resize', this.reSizeDiv)
  }
  reSizeDiv=()=>{this.chart.resize();}
  componentWillReceiveProps(nextProps) {
      this.chart.showLoading(
          "default",
          {
            text: '数据加载中',
            color: '#c23531',
            textColor: '#ffffff',
            maskColor: 'rgba(0, 0, 0, 0.5)',
            zlevel: 999
          }
      );
      if (!R.equals(nextProps, this.props)) {
        this.chart.setOption(nextProps.option);
        this.chart.hideLoading();
      }else{
        let tempOp = this.chart.getOption();
        this.chart.clear();
        this.chart.setOption(tempOp);
        this.chart.hideLoading(); 
      }
  }
  render() {
    return (
      <div  ref={(node) => { this.chartDiv = node; }} style={this.props.style} className = {this.props.className}></div>
    )
  }
}
Chart.propTypes = {
  option: PropTypes.object.isRequired
}
export default Chart;