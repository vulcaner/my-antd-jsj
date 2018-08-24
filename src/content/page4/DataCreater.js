const DataCreater = {
    trendLine: (totalArr, MasterArr, SlaveArr) => {
        return {
            backgroundColor: "rgba(5, 41, 107, 0.17)",
            color: ['#9966FF', '#FFFF33', '#00868B'],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: 30,
                right: 30,
                bottom: 40,
                containLabel: true
            },
            legend: {
                show: true,
                data: [
                    { name: '总交易量', icon: 'roundRect' },
                    { name: '生产交易量', icon: 'pin' },
                    { name: '灾备交易量', icon: 'pin' },
                ],
                top: 10,
                right: 30,
                itemWidth: 30,
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: '微软雅黑'
                }
            },
            xAxis: {
                type: 'category',
                inverse: true,
                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    symbolSize: [8, 14],
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                axisLabel: {
                    color: "#0096ff",
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: '#16386c',
                    }
                },
                boundaryGap: false,
                data: totalArr.map(o => o.time)
            },
            yAxis: {
                type: 'value',
                // name:'',
                nameTextStyle: {
                    color: "#0096ff"
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(17,51,99,0.3)', 'rgba(17,51,99,0)']
                    }
                },
                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    symbolSize: [8, 14],
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    color: "#0096ff",
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: ['#16386c']
                    }
                },
            },
            series: [{
                    name: '总交易量',
                    type: 'line',
                    data: totalArr,
                    // symbol: 'circle',
                    symbolSize: 0,
                    smooth: true,
                    markPoint: {
                        label: {
                            normal: {
                                color: '#0096ff',
                                fontSize: 12
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#fff'
                            }
                        },
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: 'rgb(4,103,128)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(12,45,88)' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: .4
                        }
                    }
                },
                {
                    name: '生产交易量',
                    type: 'line',
                    smooth: true,
                    symbolSize: 0,
                    data: MasterArr,
                },
                {
                    name: '灾备交易量',
                    type: 'line',
                    smooth: true,
                    symbolSize: 0,
                    data: SlaveArr,
                }
            ]
        }
    }
}
export default DataCreater;