// import React, { Component } from 'react';
import React from 'react';
import '../../index.css';
import BaseMap from '../../components/BaseMap';
// import logo from '../../imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
import DataCreater from './DataCreater';
// import $ from 'jquery';
import 'react-responsive-carousel/lib/styles/carousel.css';
import {Carousel} from 'react-responsive-carousel';
import png1 from '../../imgs/1.jpeg';
import png2 from '../../imgs/2.jpeg';
import png3 from '../../imgs/3.jpeg';

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
            <div id="pageContent" className="animated zoomIn" style={{position:'relative'}}>
                <BaseMap className="mapChina" option={this.state.mapOption} mapName={"china"}/> 
           
                    <Carousel className="my-carousel" autoPlay>
                        <div>
                            <img src={png1} alt=""/>
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={png2} alt=""/>
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={png3} alt=""/>
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
            </div>
        )
    }
}
export default Page2;