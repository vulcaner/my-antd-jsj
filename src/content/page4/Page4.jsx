// import React, { Component } from 'react';
import React from 'react';
import '../../index.css';
import TitleChart from '../../components/TitleChart';
import logo from '../../imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
import DataCreater from './DataCreater';
import moment from 'moment';

class Page4 extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            trendLine:DataCreater.trendLine(
                [
                    {"time":moment().format("HH:mm"),"value":"3906"},
                    {"time":moment().subtract(1,'minutes').format("HH:mm"),"value":"4054"},
                    {"time":moment().subtract(2,'minutes').format("HH:mm"),"value":"3932"},
                    {"time":moment().subtract(3,'minutes').format("HH:mm"),"value":"4245"},
                    {"time":moment().subtract(4,'minutes').format("HH:mm"),"value":"3879"},
                    {"time":moment().subtract(5,'minutes').format("HH:mm"),"value":"3818"},
                    {"time":moment().subtract(6,'minutes').format("HH:mm"),"value":"4048"},
                    {"time":moment().subtract(7,'minutes').format("HH:mm"),"value":"3571"},
                    {"time":moment().subtract(8,'minutes').format("HH:mm"),"value":"3960"},
                    {"time":moment().subtract(9,'minutes').format("HH:mm"),"value":"3593"},
                    {"time":moment().subtract(10,'minutes').format("HH:mm"),"value":"3576"},
                    {"time":moment().subtract(11,'minutes').format("HH:mm"),"value":"3405"},
                    {"time":moment().subtract(12,'minutes').format("HH:mm"),"value":"3448"},
                    {"time":moment().subtract(13,'minutes').format("HH:mm"),"value":"3987"},
                    {"time":moment().subtract(14,'minutes').format("HH:mm"),"value":"3260"},
                    {"time":moment().subtract(15,'minutes').format("HH:mm"),"value":"3344"},
                    {"time":moment().subtract(16,'minutes').format("HH:mm"),"value":"3648"},
                    {"time":moment().subtract(17,'minutes').format("HH:mm"),"value":"3525"},
                    {"time":moment().subtract(18,'minutes').format("HH:mm"),"value":"3854"},
                    {"time":moment().subtract(19,'minutes').format("HH:mm"),"value":"3396"},
                    {"time":moment().subtract(20,'minutes').format("HH:mm"),"value":"3104"}
                ],
                [
                    {"time":moment().format("HH:mm"),"value":"2001"},
                    {"time":moment().subtract(1,'minutes').format("HH:mm"),"value":"2015"},
                    {"time":moment().subtract(2,'minutes').format("HH:mm"),"value":"1990"},
                    {"time":moment().subtract(3,'minutes').format("HH:mm"),"value":"2146"},
                    {"time":moment().subtract(4,'minutes').format("HH:mm"),"value":"1853"},
                    {"time":moment().subtract(5,'minutes').format("HH:mm"),"value":"1924"},
                    {"time":moment().subtract(6,'minutes').format("HH:mm"),"value":"2040"},
                    {"time":moment().subtract(7,'minutes').format("HH:mm"),"value":"1844"},
                    {"time":moment().subtract(8,'minutes').format("HH:mm"),"value":"2040"},
                    {"time":moment().subtract(9,'minutes').format("HH:mm"),"value":"1837"},
                    {"time":moment().subtract(10,'minutes').format("HH:mm"),"value":"1800"},
                    {"time":moment().subtract(11,'minutes').format("HH:mm"),"value":"1732"},
                    {"time":moment().subtract(12,'minutes').format("HH:mm"),"value":"1767"},
                    {"time":moment().subtract(13,'minutes').format("HH:mm"),"value":"2002"},
                    {"time":moment().subtract(14,'minutes').format("HH:mm"),"value":"1633"},
                    {"time":moment().subtract(15,'minutes').format("HH:mm"),"value":"1662"},
                    {"time":moment().subtract(16,'minutes').format("HH:mm"),"value":"1854"},
                    {"time":moment().subtract(17,'minutes').format("HH:mm"),"value":"1787"},
                    {"time":moment().subtract(18,'minutes').format("HH:mm"),"value":"1921"},
                    {"time":moment().subtract(19,'minutes').format("HH:mm"),"value":"1700"},
                    {"time":moment().subtract(20,'minutes').format("HH:mm"),"value":"1598"}
                ],
                [
                    {"time":moment().format("HH:mm"),"value":"1905"},
                    {"time":moment().subtract(1,'minutes').format("HH:mm"),"value":"2039"},
                    {"time":moment().subtract(2,'minutes').format("HH:mm"),"value":"1942"},
                    {"time":moment().subtract(3,'minutes').format("HH:mm"),"value":"2099"},
                    {"time":moment().subtract(4,'minutes').format("HH:mm"),"value":"2026"},
                    {"time":moment().subtract(5,'minutes').format("HH:mm"),"value":"1894"},
                    {"time":moment().subtract(6,'minutes').format("HH:mm"),"value":"2008"},
                    {"time":moment().subtract(7,'minutes').format("HH:mm"),"value":"1727"},
                    {"time":moment().subtract(8,'minutes').format("HH:mm"),"value":"1920"},
                    {"time":moment().subtract(9,'minutes').format("HH:mm"),"value":"1756"},
                    {"time":moment().subtract(10,'minutes').format("HH:mm"),"value":"1776"},
                    {"time":moment().subtract(11,'minutes').format("HH:mm"),"value":"1673"},
                    {"time":moment().subtract(12,'minutes').format("HH:mm"),"value":"1681"},
                    {"time":moment().subtract(13,'minutes').format("HH:mm"),"value":"1985"},
                    {"time":moment().subtract(14,'minutes').format("HH:mm"),"value":"1627"},
                    {"time":moment().subtract(15,'minutes').format("HH:mm"),"value":"1682"},
                    {"time":moment().subtract(16,'minutes').format("HH:mm"),"value":"1794"},
                    {"time":moment().subtract(17,'minutes').format("HH:mm"),"value":"1738"},
                    {"time":moment().subtract(18,'minutes').format("HH:mm"),"value":"1933"},
                    {"time":moment().subtract(19,'minutes').format("HH:mm"),"value":"1696"},
                    {"time":moment().subtract(20,'minutes').format("HH:mm"),"value":"1506"}
                ]
            )
        }
    }
    componentWillReceiveProps(){}
    componentDidMount(){
        console.log(logo)
    }
    componentWillUnmount() {}
    render(){
        return (
            <div id="pageContent" className="animated zoomIn">
                <TitleChart
                    style={{color:'#fff',width:'100%',height:400,borderRadius:35,borderBottom:'1px solid gray',boxShadow: "inset 0px 0px 144px 0px rgba(0, 0, 0, 0.63)"}}
                    title={`这是标题<i style="color:red">单位</i>`}
                    titleStyle={{textAlign:'center'}}
                    titleClassName="title"
                    chartStyle={{width:'100%',height:380}}
                    option={this.state.trendLine}
                />
            </div>
        )
    }
}
export default Page4;