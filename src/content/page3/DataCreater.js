const DataCreater = {
    mapOption:(arr1,arr2,arr3)=>{
        return {
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                type:"piecewise",
                itemSymbol :'rect',
                left: '20%',
                top: '90%',
                min: 0,
                max:6000,
                splitNumber: 6,
                pieces :[
                    {min: 0, max:1000},
                    {min:1000, max: 2000},
                    {min:2000, max: 3000},
                    {min:3000, max: 4000},
                    {min:4000, max: 5000},
                    {min:5000, max: 6000},
                ],
                itemGap:0,
                itemWidth: 50,
                align:"right",
                text: ['6000','0'], 
                orient:'horizontal',          // 文本，默认为数值文本
                // showLabel:true,
                calculable: true,
                inRange: {
                    color: ['#ffffff','#afc0d7','#88a9d5','#6189bf','#3f6496','#163d71']
                },
                textStyle:{
                    color:'#fff',
                }
            },
            geo: [
                {
                    map: 'china',
                    silent: true,
                    regions: [
                        {
                            name: '南海诸岛',
                            itemStyle: {
                                normal: {
                                    areaColor:'rgba(73,95,127,0.8)',
                                    borderColor: '#fff',
                                    shadowColor:'#000',
                                    shadowBlur:10,
                                    opacity:0.6
                                }
                            }
                        }
                    ]
                }
            ],
            series: [
                //单点2
                {
                    name: '单点',
                    type: 'scatter',
                    zlevel:2,
                    coordinateSystem: 'geo',
                    data:arr1,
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'top',
                            show: true,
                            color:"#fff",
                            fontSize:16,
                            textBorderColor :"#000",
                            textBorderWidth :5,
                            textshadowColor:"#000",
                            textshadowBlur :10,
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color:"#fff",
                            borderColor :'#fff',
                            shadowBlur: 10,
                            borderWidth:2,
                            shadowColor: '#fff'
                        }
                    },
                },
                //点图1
                {
                    name: "图形点",
                    zlevel:1,
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'image:///assets/images/pin.png',
                    symbolOffset: [0,"-35%"],
                    symbolSize: [76,91],
                    label: {
                        normal: {
                            show: true,
                            formatter: function(obj){
                                return obj.value[2].toLocaleString("en-US")
                            },
                            position:['50%','30%'],
                            align:"center",
                            color:'#fff',
                            fontFamily:"Arial",
                            fontWeight:"bold",
                            fontSize:19,
                        },
                     
                    },
                    itemStyle:{
                        normal:{
                            opacity :1,
                        }  
                    },
                    data:arr2,
                },
                //区域    
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label:{
                        normal:{
                            show:true,
                        },
                        emphasis: {
                            show: true,
                            color:"#fff"
                        }
                    },
                    itemStyle:{
                        normal:{
                            color:"#fff",
                            borderColor:"#040404",
                            shadowBlur:5,
                            shadowColor:"#040404"
                        },
                    },
                    data:arr3
                },
            ],
            animationEasing: 'backIn',
            animationDuration: function (idx) {
                // 越往后的数据延迟越大
                return idx * 500;
            },
            animationDelayUpdate: function (idx) {
                return idx * 100;
            }
        }
    }
}
export default DataCreater;