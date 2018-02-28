function randomData() {
    return parseInt(Math.random()*(6000-0+1)+0);
}
const DataCreater = {
    mapOption:(arrData)=>{
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
                inverse:true,
                itemGap:0,
                itemWidth: 50,
                // align:"right",
                text: ['0','6000'], 
                orient:'horizontal',          // 文本，默认为数值文本
                // showLabel:true,
                calculable: true,
                inRange: {
                    color: ['#163d71','#3f6496','#6189bf','#88a9d5','#afc0d7','#fff']
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
                    data: [
                        {name:"北京",value:[116.40,39.93,100]},
                        {name:"上海",value:[121.48,31.22,100]},
                        {name:"深圳",value:[114.07,22.62,100]},
                        {name:"钓鱼岛",value:[123.481151,25.750151,100]}
                    ],
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
                    symbol: 'image://' + window.dominContext.staticPath + '/assets/images/pin.png',
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
                    data: [
                        {name:'上海',value:[121.48,31.22,3333]},
                        {name:'武汉',value:[114.31,30.52,5555]}
                    ]
                },
                //区域    
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label:{
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