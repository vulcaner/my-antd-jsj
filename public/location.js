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
})(window)