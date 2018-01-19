// import React, { Component } from 'react';
import React from 'react';
import '../../index.css';
// import logo from '../../imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
// import DataCreater from './DataCreater';
// import $ from 'jquery';

class Page3 extends  React.Component{
    // constructor(props){
    //     super(props);        
    // }
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
            <div id="pageContent" style={{border: '2px solid red'}}>
               page3
                {/* 测试伪类 */}
                {/* <div className={`${style.a} ${style.b}`}>hover</div> */}
                {/* <div className={style.a+" "+style.b}>hover</div> */}
            </div>
        )
    }
}
export default Page3;