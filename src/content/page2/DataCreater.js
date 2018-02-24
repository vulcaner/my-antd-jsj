// import R from 'ramda';
// const geoCoordMap = {
//     // -18~360-18之间
//     '陆港集团': [120.1005730000,29.3471330000],
// }
//map
// function mapDataToLineData(arrData) {
//   let res = [];
//   let toCood = geoCoordMap["陆港集团"];//arr
//   for (let i = 0; i < arrData.length; i++) {
//       if(arrData[i].isAnimate){
//         let fromCood = arrData[i].lal;//arr
//         res.push({
//             fromName: arrData[i].name,
//             toName: "陆港集团",
//             coords: [fromCood, toCood]
//         });
//       }
   
//   }
//   return res;
// }
//map
function randomData() {
    return Math.round(Math.random()*6000);
}
const DataCreater = {
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