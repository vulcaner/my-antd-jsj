import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';

class Ring extends Component {
  // constructor(props){
  //   super(props);
  // }
  componentDidMount() {
      this.ctx=this.canvas.getContext('2d');
      this.handleDefaultProps(this.props);//处理调用Ring时未使用的默认样式
      this.draw();//绘制
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !R.equals(nextProps, this.props);
  }
  //用户是否定义渐变 都需要处理数据格式
  handleDefaultProps=(props)=>{
      //背景圆渐变处理
      this.bg_RadialGradient=this.ctx.createRadialGradient(props.centerX,props.centerY,props.radius-props.ringWidth/2,props.centerX,props.centerY,props.radius+props.ringWidth/2);
      for(let i=0;i<props.backgroundRadialGradient.length;i++){
        this.bg_RadialGradient.addColorStop(this.props.backgroundRadialGradient[i].radio,this.props.backgroundRadialGradient[i].color);
      }
      //进度圆渐变处理
      this.p_RadialGradient=this.ctx.createRadialGradient(props.centerX,props.centerY,props.radius-props.ringWidth/2,props.centerX,props.centerY,props.radius+props.ringWidth/2);
      for(let i=0;i<props.progressRadialGradient.length;i++){
        this.p_RadialGradient.addColorStop(this.props.progressRadialGradient[i].radio,this.props.progressRadialGradient[i].color);
      }
  }
  draw=()=>{
      let self=this;
      // console.log(self.canvas.width,self.canvas.height);//400 400
      if(self.ctx){
        //1、清除canvas画布所有内容
        self.ctx.clearRect(0, 0, self.canvas.width,self.canvas.height);
        //2、绘制外层灰色框
        self.ctx.beginPath();
        //顺逆时针counterclockwise
        self.ctx.arc(self.props.centerX, self.props.centerY, self.props.radius, 0, 2*Math.PI, self.props.counterclockwise);
        self.ctx.lineWidth=self.props.ringWidth;
        self.ctx.strokeStyle = self.bg_RadialGradient;//背景圆渐变处理
        self.ctx.stroke();
        //3、进度
        if(self.props.deg>=0){
          self.ctx.beginPath();
          self.ctx.lineCap=self.props.lineCap;
          if (self.props.counterclockwise) {//逆时针
            self.ctx.arc(self.props.centerX,self.props.centerY,self.props.radius,self.props.beginAngle, self.props.beginAngle-self.props.deg * Math.PI / 180,false);
          } else {//顺时针
            self.ctx.arc(self.props.centerX,self.props.centerY,self.props.radius,self.props.beginAngle, self.props.beginAngle+self.props.deg * Math.PI / 180,false);
          }
          self.ctx.strokeStyle = self.p_RadialGradient; //设置描边样式
          self.ctx.stroke();
        }else{
          alert("角度0~360!");
        }
        //4、边框
        self.ctx.beginPath();
        self.ctx.lineWidth = self.props.borderWidth;
        self.ctx.strokeStyle = self.props.borderColor;
        self.ctx.lineCap = self.props.lineCap;
        // self.ctx.beginPath();
        self.ctx.arc(self.props.centerX, self.props.centerY, (self.props.radius -self.props.ringWidth/2)- self.props.borderWidth / 2, 0, Math.PI * 2, self.props.counterclockwise);
        self.ctx.stroke();
        self.ctx.beginPath();
        self.ctx.arc(self.props.centerX, self.props.centerY, (self.props.radius +self.props.ringWidth/2) + self.props.borderWidth / 2, 0, Math.PI * 2, self.props.counterclockwise);
        self.ctx.stroke();
        //5、绘制进度提示文字
        self.ctx.font = self.props.fontStyle;
        self.ctx.textBaseline = 'top';
        self.ctx.textAlign="center";
        let txt = parseFloat(self.props.deg / 360 * 100).toFixed(1) + '%';
        // let w = self.ctx.measureText(txt).width;
        self.ctx.fillText(txt, self.props.centerX, self.props.centerY-30);
      }
  }
  componentDidUpdate() {
    this.handleDefaultProps(this.props);
    this.draw();
  }
  render() {
    return (
        <div className={this.props.className} style={{textAlign:"center"}}>
          <canvas ref={(node) => {this.canvas = node}} width={400} height={400} style={{ width: "100%", height: "100%" }}></canvas>
        </div>
    );
  }
}
Ring.defaultProps = {
  fontStyle:"60px Arial",//字体样式
  deg: 0,//当前角度
  radius:120,//半径
  ringWidth:50,//圆环 宽度
  centerX:200,//圆心X
  centerY:200,//圆心y
  beginAngle: -Math.PI / 2,//开始的角度 圆形正上方开始进度
  counterclockwise: false,//False = 顺时针，true = 逆时针。
  //背景圆 放射性渐变
  backgroundRadialGradient:[{ radio: 0, color: '#1e2c3d' }, { radio: 0.5, color: '#223246' }, { radio: 1, color: '#1e2c3d' }],
   //进度圆 放射性渐变
  progressRadialGradient:[{ radio: 0, color: '#2a7f10' }, { radio: 0.5, color: '#349e14' }, { radio: 1, color: '#2a7f10' }],
  lineCap: 'round',//https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap
  // 背景圆border
  borderColor: 'red',
  borderWidth: 1,
}
Ring.propTypes = {
  fontStyle:PropTypes.string,
  radius: PropTypes.number.isRequired,
  ringWidth: PropTypes.number,
  centerX: PropTypes.number,
  centerY: PropTypes.number,
  borderWidth:PropTypes.number,
  beginAngle: PropTypes.number,
  counterclockwise: PropTypes.bool,
  borderColor:PropTypes.string,
  backgroundRadialGradient:PropTypes.array,
  progressRadialGradient:PropTypes.array,
  lineCap: PropTypes.oneOf(['butt', 'round', 'square']),
  radio: function (props, propName, componentName) {
    if (props[propName] < 0 || props[propName] > 1) {
      return new Error("Ring组件的radio属性值范围不合法，必须为区间[0,1]的数");
    }
  }
};
export default Ring;