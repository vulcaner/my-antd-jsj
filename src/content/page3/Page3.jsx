// import React, { Component } from 'react';
import React from 'react';
import BaseMap from '../../components/BaseMap';
// import logo from '../../imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
import DataCreater from './DataCreater';

class Page3 extends  React.Component{
    constructor(props){
        super(props);        
        this.state={
            test:0,
            map:DataCreater.mapOption(
                 [
                    {name:"北京",value:[116.40,39.93,100]},
                    {name:"上海",value:[121.48,31.22,100]},
                    {name:"深圳",value:[114.07,22.62,100]},
                    {name:"钓鱼岛",value:[123.481151,25.750151,100]}
                ],
                [
                    {name:'上海',value:[121.48,31.22,3333]},
                    {name:'武汉',value:[114.31,30.52,5555]}
                ],
                [
                    {name: '北京',value: 6000 },
                    {name: '天津',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '上海',value: 3333 },
                    {name: '重庆',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '河北',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '河南',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '云南',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '辽宁',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '黑龙江',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '湖南',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '安徽',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '山东',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '新疆',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '江苏',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '浙江',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '江西',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '湖北',value: 5555 },
                    {name: '广西',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '甘肃',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '山西',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '内蒙古',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '陕西',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '吉林',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '福建',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '贵州',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '广东',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '青海',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '西藏',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '四川',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '宁夏',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '海南',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '台湾',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '香港',value: parseInt(Math.random()*(6000-0+1)+0,10) },
                    {name: '澳门',value: parseInt(Math.random()*(6000-0+1)+0,10) }
                ]
            )
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
                <BaseMap style={{width:'100%',height:"100%"}} option={this.state.map} mapName={"china"}/>
            </div>
        )
    }
}
export default Page3;