import R from 'ramda';
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
function mapDataToScatterData(arrData) {
  let res = [];
  for (let i = 0; i < arrData.length; i++) {
    let cood = arrData[i].lal;//arr[经度，纬度，value大小]
    res.push({
      name: arrData[i].name,
      value:cood.concat(arrData[i].value)
    });
  }
  return res;
}
const DataCreater = {
    inAmount:(arrData,legendData,monthData)=>{
        return {
            color: ['#42b61f', '#4e6f90'],
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: false
            },
            legend: {
                show: true,
                right: 15,
                top:0,
                textStyle: {
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑'
                },
                itemHeight:6,
                itemGap:25,
                data:[
                    {
                        name:legendData[0],
                        // icon: 'line'
                    },
                     {
                        name:legendData[1],
                        // icon: 'line'
                    }
                ]
            },
            grid: {
                show: false,
                left: "1%",
                right: "5%",
                bottom: 0,
                top:"12%",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data:monthData,
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
                    name:legendData[0],
                    type: 'line',
                    itemStyle: {
                        emphasis: {
                            color: '#42B61F'
                        }
                    },
                    data: arrData[0]
                },
                {
                    name:legendData[1],
                    type: 'line',
                    itemStyle: {
                        emphasis: {
                            color: '#4e6f90'
                        }
                    },
                    data: arrData[1]
                }   
            ]
        }
    },
    boxNumber:(arrData,legendData,monthData)=>{
        return {
            color: ['#42b61f', '#4e6f90','#00ffff'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                show: true,
                right: 15,
                top:0,
                textStyle: {
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑'
                },
                itemHeight:6,
                itemGap:25,
                data: [
                    {
                        name:legendData[0],
                        // icon: 'line'
                    },
                     {
                        name:legendData[1],
                        // icon: 'line'
                    },
                    {
                        name:legendData[2],
                        // icon: 'line'
                    }
                ]
            },
            grid: {
                show: false,
                left: "1%",
                right: "5%",
                bottom: 0,
                top:"12%",
                containLabel: true,
            },
            toolbox: {
                show: false
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data:monthData,
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
                    name:legendData[0],
                    type: 'line',
                    itemStyle: {
                        emphasis: {
                            color: '#42B61F'
                        }
                    },
                    data: arrData[0]
                },
                {
                    name: legendData[1],
                    type: 'line',
                    itemStyle: {
                        emphasis: {
                            color: '#4e6f90'
                        }
                    },
                    data: arrData[1]
                },
                {
                    name:legendData[2],
                    type: 'line',
                    itemStyle: {
                        emphasis: {
                            color: 'gray'
                        }
                    },
                    data: arrData[2]
                }
            ]

        }
    },
    threeInAmount:(arrData,xAxisData)=>{
        return {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: false
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
                right: '4%',
                bottom: 0,
                top:"12%",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: xAxisData,
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
                        type: 'line',
                        name:'',
                        itemStyle: {
                            normal:{
                                color:'#42b61f',
                                borderColor:'#42b61f'
                            },
                            emphasis: {
                                color: '#000'
                            }
                        },
                        data:arrData
                    },
                    
            ]
        }
    },
    threeBoxNumber:(arrData,xAxisData)=>{
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
                data:xAxisData,
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
                            image: window.dominContext.staticPath + '/assets/images/start/location.png',
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
                        symbol: 'image://' + window.dominContext.staticPath + '/assets/images/start/rock.png',
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
                    symbol: 'image://' + window.dominContext.staticPath + '/assets/images/common/pin.png',
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
    goodsPercentPie:() => {
        return {
            type: "pie",
            colors: ["#3e5477","#062c6a","#0054d5","#2874e5","#5497fb","#8bb7f9","#527f34","#c3ddb1","#f1af81","#fbd764","#5a9ba3"],
            radius: 85,
            labelRadius:1,
            alpha:0.7,
            top:"5%",
            borderAlpha:0,
            pullOutRadius: "10%",
            pulledField: 'pulled',
            pullOutEffect:'elastic',
            valueField: "value",
            titleField: "title",
            color: '#ffffff',
            labelText: '[[title]]\n[[value]]%',
            labelTickColor: '#ffffff',
            labelTickAlpha: 0.3,
            fontSize: 12,
            fontFamily:"微软雅黑",
            outlineAlpha: 0.3,
            depth3D: 20,
            balloonText: "[[title]]<br><span style='font-size:14px'><b>[[value]]%</b></span>",
            angle: 50,
            startDuration: 0,
            export: {
              enabled: true
            },
            legend: {
                enabled:false,
                color: '#ffffff',
                position: 'right',
                fontSize:14,
                valueText: "[[close]]",
                valueWidth: 60,
                // width: 100,
                verticalGap:0
            }
        }
    },
    goodsPercent:(arrData,legendData)=>{
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },    
            legend: {
                textStyle:{
                    color:'#fff',
                    fontSize:16,
                    fontFamily:'微软雅黑'
                },
                top:8,
                right:0,
                itemGap:20,
                data: [
                    {
                        name:legendData[0],
                        icon:'rect'
                    },
                    {
                        name:legendData[1],
                        icon:'rect'
                    }
                ]
            },
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
                    name:legendData[0],
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
                    data: arrData.map(item =>{return parseInt(item.todayYear)})
                },
                {
                    type: 'bar',
                    name:legendData[1],
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
                                    offset: 0, color: '#1998AF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#00e4e5' // 100% 处的颜色
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
                    data: arrData.map(item => {return parseInt(item.lastYear)})
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 50;
            }
        };
    },
    inOutTop10:(arrData,legendData)=>{
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },    
            legend: {
                textStyle:{
                    color:'#fff',
                    fontSize:16,
                    fontFamily:'微软雅黑'
                },
                top:10,
                right:0,
                itemGap:25,
                data: [
                    {
                        name:legendData[0],
                        icon:'rect'
                    },
                    {
                        name:legendData[1],
                        icon:'rect'
                    }
                ]
            },
            grid: {
                left:0,
                bottom:0,
                top:'10%',
                right:55,
                containLabel: true
            },
            yAxis: {
                type: 'category',
                inverse:true,
                position: 'top',
                axisLine: {
                    lineStyle: {
                        color:'transparent',
                    }
                },
                axisTick: { show: false },
                axisLabel: { textStyle: { color: '#fff', fontSize:18 } },
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
                splitLine: { show: false },
            },
            series: [
                {
                    type: 'bar',
                    name:legendData[0],
                    // barWidth:12,
                    barGap:'10%',
                    // barCategoryGap:'12%',
                    legendHoverLink: true,
                    itemStyle: {
                        normal:{
                            color:{
                                type:'linear',
                                x:0,
                                y:0,
                                X2:0,
                                y2:1,
                                colorStops: [{
                                    offset: 0, color: '#42b61f' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#a3d494' // 100% 处的颜色
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
                                fontFamily:'微软雅黑',
                                fontSize:12
                            }
                        }
                    
                    },
                    data: arrData.map(item => item.in)
                },
                {
                    type: 'bar',
                    name:legendData[1],
                    // barWidth:12,
                    barGap:'10%',
                    // barCategoryGap:'12%',
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
                                    offset: 0, color: '#1998AF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#00e4e5' // 100% 处的颜色
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
                                fontFamily:'微软雅黑',
                                fontSize:12
                            }
                        }
                    
                    },
                    data: arrData.map(item => item.out)
                }
            ],
            animationEasing: 'elasticOut',
            animationDuration: function (idx) {
                // 越往后的数据延迟越大
                return idx * 300;
            },
            animationDelayUpdate: function (idx) {
                return idx * 50;
            }
        };
    }
}
export default DataCreater;