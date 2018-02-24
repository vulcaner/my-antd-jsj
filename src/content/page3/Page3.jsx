// import React, { Component } from 'react';
import React from 'react';
import '../../index.css';
import BaseMap from '../../components/BaseMap';
import logo from '../../imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
import DataCreater from './DataCreater';
// import $ from 'jquery';

class Page3 extends  React.Component{
    // constructor(props){
    //     super(props);        
    // }
    componentWillReceiveProps(){}
    componentDidMount(){
        console.log(logo)
    }
    componentWillUnmount() {
        //clearInterval(this.timer)
        // this.serverRequest&&this.serverRequest.abort();
    }
    render(){
        return (
            <div id="pageContent" className="animated rollIn">
                <BaseMap style={{width:'100%',height:"100%"}} option={DataCreater.mapOption()} mapName={"china"}/>
            </div>
        )
    }
}
export default Page3;