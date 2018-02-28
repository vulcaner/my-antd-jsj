import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CountUp from 'react-countup';
class TitleValue extends Component {
  // componentDidMount(){
  //   console.log(this.props)
  // }
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
          <div className={this.props.titleClassName} style={this.props.titleStyle}>{this.props.title}</div>           
          <CountUp
                className={this.props.valueClassName}
                duration={this.props.duration}
                start={this.props.start}
                end={this.props.value}
                useEasing={this.props.useEasing}
                separator={this.props.separator}
                decimals={this.props.decimals}
                decimal={this.props.decimal}
                prefix={this.props.prefix}
                suffix={this.props.suffix}
            />
      </div>
    );
  }
};
TitleValue.defaultProps = {
  //https://inorganik.github.io/countUp.js/
  duration:3,//累加时间
  start: 0,//累加初始值
  end: 0,
  decimals:1,//小数位数
  decimal:".",//小数分割点
  useEasing:true,//缓冲
  separator:",",//分隔符
  prefix:"",//数字前缀
  suffix:""//数字后缀
};
export default TitleValue;
