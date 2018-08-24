const geoCoordMap = {
    // -18~360-18之间
    '陆港集团': [120.1005730000,29.3471330000],
}
//map
function mapDataToLineData(arrData) {
  let res = [];
  let toCood = geoCoordMap["陆港集团"];//arr
  for (let i = 0; i < arrData.length; i++) {
      if(arrData[i].isAnimate){
        let fromCood = arrData[i].lal;//arr
        res.push({
            fromName: arrData[i].name,
            toName: "陆港集团",
            coords: [fromCood, toCood]
        });
      }
   
  }
  return res;
}
//map
function randomData() {
    return Math.round(Math.random()*6000);
}


const DataCreater = {
    customerOption:(arrData)=>{
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                show: false,
                right: 0,
                top:0,
                textStyle: {
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑'
                },
                itemHeight:6,
            },
            grid: {
                show: false,
                left: "1%",
                right:'4%',
                bottom: 0,
                top:"12%",
                containLabel: true,
            },
            toolbox: {
                show: false
            },
            xAxis: {
                type: 'category',
                boundaryGap:true,
                data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
                axisLine: {
                    lineStyle: {
                        color: '#394C5D'
                    }
                },
                axisLabel:{
                    interval:0,
                    color:"#fff",
                    // fontSize:12
                },
                axisTick:{
                    alignWithLabel:true,
                    interval:0
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                type: 'value',
                // data:[2000,4000,8000,10000,12000],
                axisLine: {
                    lineStyle: {
                        color: '#394C5D'
                    }
                },
                axisLabel:{
                    color:"#fff",
                    // fontSize:12
                },
                splitLine: {
                    lineStyle: {
                        color: '#394C5D'
                    }
                }
            },
            series: [
                {
                    name: '',
                    type: 'line',
                    itemStyle: {
                        normal:{
                            color:"#00ffff",
                            borderColor:'#4e6f90' 
                        },
                        emphasis: {
                            color: '#000'
                        }
                    },
                    data: arrData
                },
                
            ]

        }
    },
    userStartUp:(arrData)=>{
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },    
            // legend: {
            //     textStyle:{
            //         color:'#fff',
            //         fontSize:16,
            //         fontFamily:'微软雅黑'
            //     },
            //     top:8,
            //     right:0,
            //     itemGap:20,
            //     data: [
            //         {
            //             name:legendData[0],
            //             icon:'rect'
            //         },
            //         {
            //             name:legendData[1],
            //             icon:'rect'
            //         }
            //     ]
            // },
            grid: {
                left:0,
                bottom:0,
                top:'10%',
                right:0,
                containLabel: true
            },
            yAxis: {
                type: 'category',
                position: 'top',
                inverse:true,
                axisLine: {
                    lineStyle: {
                        color:'transparent',
                    }
                },
                splitLine: { show: false },
                axisTick: { show: false },
                axisLabel: { textStyle: { color: '#fff', fontSize:16 } },
                data: arrData.map(item => item.name)
            },
            xAxis: {
                show:false,
                type: "value",
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: { show: false },
                axisLabel: { show: false },
                splitLine: { show: false }
            },
            series: [
                {
                    type: 'bar',
                    // barWidth:12,
                    barGap:'10%',
                    // barCategoryGap:'10%',
                    legendHoverLink: true,
                    itemStyle: {
                        normal: {
                            color:{
                                type:'linear',
                                x:0,
                                y:0,
                                X2:0,
                                y2:1,
                                colorStops: [{
                                    offset: 0, color: '#42b61f'
                                }, {
                                    offset: 1, color: '#a3d494'
                                }],
                                globalCoord: false
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle:{
                                color:'#fff',
                                fontSize:12,
                                fontFamily:'微软雅黑'
                            }
                        }
                    
                    },
                    data:arrData.map(item => item.value)
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 50;
            }
        };
    },
    createMapOption: (arrData) => {
        return {
            graphic: {
                elements:[
                    {
                        type: 'image',
                        id: 'location',
                        zlevel: 5,
                        bounding: 'raw',
                        // 定位左上角经纬度
                        //[-18, 90],
                        // 定位右下角经纬度
                        //[180, -60]
                        //--图片宽高/2
                        left: ((geoCoordMap["陆港集团"][0] + 18) / 198 * 0.55-15/1104)*100 + "%",
                        top: ((90 - geoCoordMap["陆港集团"][1]) /150-30/700)*100 + "%",
                        style: {
                            image: window.domainPath.staticPath + '/assets/images/start/location.png',
                            width: 30,
                            height: 30
                        },
                    },
                    {
                        type: 'text',
                        id:'locationName',
                        zlevel:6,
                        bounding: 'all',
                        // 定位左上角经纬度
                        //[-18, 90],
                        // 定位右下角经纬度
                        //[180, -60]
                        //-字体宽高
                        left: ((geoCoordMap["陆港集团"][0] + 18) / 198 * 0.55-12/1104)*100 + "%",
                        top: ((90 - geoCoordMap["陆港集团"][1]) /150- 22/700)*100 + "%",
                        style: {
                            text:'义乌',
                            fill:'#ffffff'
                        },
                    }
                ]
            },
            geo: [
                {
                    map: 'world',
                    left: "1%", top: 0, right: "45%", bottom: 0,
                    boundingCoords: [
                        // 定位左上角经纬度
                        [-18, 90],
                        // 定位右下角经纬度
                        [180, -60]
                    ],
                    silent: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#192f4a',
                            borderColor: '#ccc',
                            // shadowColor:'#ccc'
                            // shadowBlur:5,
                            opacity:0.6
                        }
                    },
                    regions: [
                        {
                        name: 'China',
                        itemStyle: {
                            normal: {
                                areaColor: '#ccc',
                                shadowBlur: 0,
                                opacity:0.5
                            }
                        }
                        }
                    ]
                },
                {
                    map: 'world',
                    left: "55%", top: 0, right: 0, bottom: 0,
                    boundingCoords: [
                        // 定位左上角经纬度
                        [-180, 90],
                        // 定位右下角经纬度
                        [-18, -60]
                    ],
                    silent: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#192f4a',
                            borderColor: '#ccc',
                            // shadowColor:'#ccc'
                            // shadowBlur:5,
                            opacity:0.6
                        }
                    }
                }
            ],
            tooltip : {
                show:false,
                trigger: 'item'
            },
            series: [
                //线与动画
                {
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 10,
                        //symbol:'pin',
                        symbol: 'image://' + window.domainPath.staticPath + '/assets/images/start/rock.png',
                        // symbolSize:[8,10],
                        symbolSize:[9,20],
                        // trailLength:0.2,
                        // color:'#FF7800',
                        loop:true
                    },
                    lineStyle: {
                        normal: {
                            color: '#297b13',
                            width: 1,
                            curveness: 0.2,
                            type: 'dotted',
                            opacity:0.5
                        }
                    },
                    data: mapDataToLineData(arrData)
                },
                //散点
                {
                    zlevel:2,
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    // symbol:'pin',
                    symbol: 'image://' + window.domainPath.staticPath + '/assets/images/common/pin.png',
                    symbolSize: function (val) {
                        //concat=[经度，纬度，value]
                        return val[2];
                    },
                    symbolOffset: [0, 0],
                    label: {
                        normal: {
                            show: false,
                            formatter: '{b}',
                            position: 'right',
                            color:'#fff'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#ff7200"
                        }
                    },
                    data: mapDataToScatterData(arrData)
                }
            ]
        };
    },
    subCompany:(arrData)=>{
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer:{
                    type:'shadow'
                }
            },
            toolbox: {
                show: false
            },
            legend: {
                show: false,
                right: 0,
                top:'10%',
                itemGap:25,
                textStyle: {
                    color: '#fff'
                },
            },
            grid: {
                show: false,
                left: 0,
                right: 0,
                bottom: '10%',
                top: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                data: arrData.map(item=>item.name),
                boundaryGap:true,
                axisLine: {
                    lineStyle: {
                        color: '#394C5D'
                    }
                },
                axisLabel:{
                    show:true,
                    interval:0,
                    color:"#fff",
                    align:'center',
                    fontSize:10
                },
                axisTick:{
                    show:true,
                    alignWithLabel:true,
                    interval:0
                }
            },
            yAxis: {
                type: 'value',
                data:[2,4,8,10,12],
                axisLine: {
                    lineStyle: {
                        color: '#394C5D'
                    }
                },
                axisLabel:{
                    show:true,
                    interval:0,
                    color:"#fff",
                    // fontSize:12
                },
                splitLine: {
                    lineStyle: {
                        color: '#394C5D'
                    }
                }
            },
            series: [
                {
                    type: 'bar',
                    name:'',
                    itemStyle: {
                        normal: {
                            color: '#00ffff'
                        },
                        emphasis: {
                            color: '#4dc8e2'
                        }
                    },
                    barWidth:25,
                    data: arrData.map(item=>item.value)
                }, 
            ],
            animationEasing: 'elasticOut',
            animationDuration: function (idx) {
                // 越往后的数据延迟越大
                return idx * 1000;
            },
            animationDelayUpdate: function (idx) {
                return idx * 100;
            }
        }
    },
    circlePie:(arrData)=>{
        return {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                y: 'center',
                x: 'right',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        }
    },
    qudaoYD:(arrData)=>{
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:['蒸发量','降水量']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    boundaryGap:true,
                    axisLine: {
                        lineStyle: {
                            color: '#394C5D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        interval:0,
                        color:"#fff",
                        align:'center',
                        fontSize:10
                    },
                    axisTick:{
                        show:true,
                        alignWithLabel:true,
                        interval:0
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLine: {
                        lineStyle: {
                            color: '#394C5D'
                        }
                    },
                    axisLabel:{
                        show:true,
                        interval:0,
                        color:"#fff",
                        // fontSize:12,
                        formatter: '{value} ml'
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#394C5D'
                        }
                    }
                },
                
            ],
            series: [
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                }
            ],
            animationEasing: 'elasticOut',
            animationDuration: function (idx) {
                // 越往后的数据延迟越大
                return idx * 1000;
            },
            animationDelayUpdate: function (idx) {
                return idx * 100;
            }
        }
    },
    mapOption:(arrData)=>{
        return {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            // visualMap: {
            //     min: 0,
            //     max: 10000,
            //     left: 'center',
            //     top: 'bottom',
            //     text: ['高','低'], 
            //     orient:'horizontal',          // 文本，默认为数值文本
            //     calculable: true,
            //     inRange: {
            //         color: ['#e0ffff', '#006edd']
            //     },
            //     textStyle:{
            //         color:'#fff',
            //     }
            // },
            visualMap: {
                type:"piecewise",
                min: 0,
                max:6000,
                splitNumber: 6,
                left: 'center',
                top: 'bottom',
                text: ['高','低'], 
                orient:'horizontal',          // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#e0ffff', '#006edd']
                },
                textStyle:{
                    color:'#fff',
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '河南',value: randomData() },
                        {name: '云南',value: randomData() },
                        {name: '辽宁',value: randomData() },
                        {name: '黑龙江',value: randomData() },
                        {name: '湖南',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '山东',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '江苏',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '湖北',value: randomData() },
                        {name: '广西',value: randomData() },
                        {name: '甘肃',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '陕西',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '贵州',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '青海',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '海南',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                }
            ]
        }
    }
}
export default DataCreater;