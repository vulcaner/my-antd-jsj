// import React, { Component } from 'react';
import React from 'react';
import '../../index.css';
import BaseMap from '../../components/BaseMap';
// import logo from '../../imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
import DataCreater from './DataCreater';
// import $ from 'jquery';
import { Carousel } from 'antd';

class Page2 extends  React.Component{
    constructor(props){
        super(props);  
        this.state={
            mapOption:DataCreater.mapOption()
        }      
    }
    componentWillReceiveProps(){}
    componentDidMount(){
        // var self=this;
        // self.serverRequest=$.ajax({
        //     type:'GET',
        //     url: window.locationConfig.controlPages.start.address,
        //     dataType:"json", 
        //     data : {},
        //     crossDomain: true, 
        //     contentType:"application/json",  
        //     success:function(data){
        //         var sourse=JSON.parse(JSON.stringify(data));
        //         // console.log(sourse.hits.hits[0]._source);
        //         self.upData(sourse.hits.hits[0]._source);
        //     },
        //     error:function(e){
        //         console.log(e);
        //     }
        // })
    }
    componentWillUnmount() {
        //clearInterval(this.timer)
        // this.serverRequest&&this.serverRequest.abort();
    }
    render(){
        return (
            <div id="pageContent" className="animated rotateIn" style={{position:'relative'}}>
                <BaseMap className="mapChina" option={this.state.mapOption} mapName={"china"}/> 
                <div className="carousel">
                    <Carousel autoplay>
                        <div>1111</div>
                        <div>2222</div>
                        <div>3333</div>
                        <div>4444</div>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default Page2;