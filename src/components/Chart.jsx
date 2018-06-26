// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import R from 'ramda';
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/line';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/graphic';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/visualMap';


// class Chart extends Component {

//   // constructor(props) {
//   //   super(props);
//   // };

//   componentDidMount() {
//     this.chart = echarts.init(this.chartDiv);
//     if(this.props.getChart){
//       this.props.getChart(this.chart);
//     }
//     this.chart.setOption(this.props.option);
//   }
//   componentWillUnmount() {
//     this.chart.clear();
//     this.chart.dispose();
//     this.chartDiv = null;
//   }
//   componentWillReceiveProps(nextProps) {
//     if (this.chart) {
//       this.chart.resize();
//       if (!R.equals(nextProps, this.props)) {
//         this.chart.setOption(nextProps.option);
//       }else{
//         if(this.props.autoAnimate){
//           let tempOp = this.chart.getOption();
//           this.chart.clear();
//           this.chart.setOption(tempOp);
//         }
//       }
//     }
//   }

//   render() {
//     return (
//       <div ref={(node)=>{this.chartDiv=node;}} style={this.props.style} className = {this.props.className}>
//       </div>
//     );
//   }
// };

// Chart.propTypes = {
//   option: PropTypes.object.isRequired
// }

// export default Chart;
import React from 'react'
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map' //引入地图
import 'echarts/lib/chart/lines'
import 'echarts/lib/chart/effectScatter'
import 'echarts/map/js/china' // 引入中国地图

export default class MapReact extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  initPie=()=>{
    // console.log(this.props);
    const { option } =  this.props;//外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts
    
    //设置options
    myChart.setOption(option)
    window.onresize = function() {
      myChart.resize()
    }
  }
  
  componentDidMount() {
    this.initPie()
  }
  
  componentDidUpdate() {
    this.initPie()
  }
  
  render() {
    const { width="100%", height="100%" } = this.props
    return <div ref={ID => this.ID = ID} style={{width, height}}></div>
  }
}
