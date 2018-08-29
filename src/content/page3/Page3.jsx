// import React, { Component } from 'react';
import React from 'react';
import BaseMap from '../../components/BaseMap';
// import logo from '../../imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
import DataCreater from './DataCreater';

class Page3 extends  React.Component{
    constructor(props){
        super(props);        
        this.state={
            test:0
        }
    }
    componentWillReceiveProps(){}
    componentDidMount(){
        // console.log(logo)
    }
    componentWillUnmount() {}
    render(){
        return (
            <div className="pageContent animated flip">
                <BaseMap style={{width:'100%',height:"100%"}} option={DataCreater.mapOption()} mapName={"china"}/>
            </div>
        )
    }
}
export default Page3;