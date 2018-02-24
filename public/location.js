(function (win) {
     //api=>http://10.1.1.90:9200/page1/_search?pretty
    var ipControl = "10.1.1.90";//测试：10.1.1；生产：
    var portControl = 9200;
    var domainControl = "http://" + ipControl + ":" + portControl;//http://10.1.1.90:9200
    
    win.dominContext = {staticPath:""};
    win.isResizing=false,
    win.locationConfig= {
        api:{  
                start:{
                    name: '',
                    address: domainControl +"/page1/_search?pretty",
                    loopTime: 20000
                }
            
        }
    };
    //计算缩放值
    win.recalc=(w)=>{
        let parent=document.getElementById("contenter");
        let parentWidth=parseFloat(win.getComputedStyle(parent).getPropertyValue("width"));
        return   parentWidth*0.85/w
    }
    //页面加载第一次
    win.onload=()=>{
        // console.log(win.recalc(w=1920));
        let ele=document.getElementById('scale');
        // console.log(ele[0].style);
        ele.style.setProperty('transform', `scale(${win.recalc(1920)})`, 'important');
    };
    //窗口大小变化
    win.onresize =()=>{
        win.isResizing=true;
        let ele=document.getElementById('scale');
        ele.style.setProperty('transform', `scale(${win.recalc(1920)})`, 'important');
    }
})(window)