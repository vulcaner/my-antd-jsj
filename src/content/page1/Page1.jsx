// import React, { Component } from 'react';
import React from 'react';
import TitleValue from '../../components/TitleValue';
import Ring from '../../components/Ring';
import logo from '../../imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
// import DataCreater from './DataCreater';
// import $ from 'jquery';
import { Switch,Icon} from 'antd';

class Page1 extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            deg:0,
        }
    }
    componentWillReceiveProps(){}
    componentDidMount(){
        this.timer=setInterval(()=>this.start(),100);
    }
    start=()=>{
        let deg=this.state.deg;
        if(deg<360){
            this.setState({deg:deg+10});
        }else{
            this.setState({deg:0});
        } 
    }
    componentWillUnmount() {
        this.timer&&clearInterval(this.timer);
        this.timer=null;
    }
    onChange=(checked)=>{
        console.log(`switch to ${checked}`);
    }
    handleErr=()=>{
        this.img.src=logo;
    }
    render(){
        return (
            <div className="pageContent animated zoomIn" style={{position:"relative"}}>
                <img className="react-rotate"  src={"/assets/images/pin.png"} ref={node=>{this.img=node;}} onError={this.handleErr} style={{width:"100%",height:"100%"}} alt="SVG"/>
                <TitleValue
                    className="animated rotateIn"
                    titleStyle={{fontSize:"20px"}}
                    valueClassName="count"
                    title={`标题`}
                    style={{position: "absolute",top:0,left:0,backgroundColor: "#eeeeee"}}
                    value={10000000}
                    decimals={5}
                    suffix={`<i style=font-size:20px;color:red>%</i>`}
                />
                <Ring className='ring' 
                    deg={this.state.deg} 
                    radius={120} 
                    ringWidth={50}
                    progressRadialGradient={[{ radio: 0, color: '#fff' }, { radio: 0.5, color: 'blue' }, { radio: 1, color: '#fff' }]}
                    backgroundRadialGradient={[{ radio: 0, color: '#fff' }, { radio: 0.5, color: 'red' }, { radio: 1, color: '#fff' }]}
                    borderColor="yellow"
                    borderWidth={2}
                />
                <div style={{position: "absolute",top:400,left:0}}>
                    <Icon type="step-backward" style={{width:50,height:50,fontSize:45}}/>
                    <hr/>
                    <Switch defaultChecked onChange={this.onChange} />
                </div>
            </div>
        )
    }
}
export default Page1;