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
                max:20000,
                splitNumber: 10,
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
                        {name: '北京',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '天津',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '上海',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '重庆',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '河北',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '河南',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '云南',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '辽宁',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '黑龙江',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '湖南',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '安徽',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '山东',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '新疆',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '江苏',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '浙江',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '江西',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '湖北',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '广西',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '甘肃',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '山西',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '内蒙古',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '陕西',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '吉林',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '福建',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '贵州',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '广东',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '青海',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '西藏',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '四川',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '宁夏',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '海南',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '台湾',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '香港',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '澳门',value: Math.random()*(9999-1500+1)+1000 }
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
                        {name: '北京',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '天津',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '上海',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '重庆',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '河北',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '安徽',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '新疆',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '浙江',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '江西',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '山西',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '内蒙古',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '吉林',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '福建',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '广东',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '西藏',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '四川',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '宁夏',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '香港',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '澳门',value: Math.random()*(9999-1500+1)+1000 }
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
                        {name: '北京',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '天津',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '上海',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '广东',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '台湾',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '香港',value: Math.random()*(9999-1500+1)+1000 },
                        {name: '澳门',value: Math.random()*(9999-1500+1)+1000 }
                    ]
                }
            ]
        }
    }
}
export default DataCreater;