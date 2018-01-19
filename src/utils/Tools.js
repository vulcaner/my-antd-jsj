
import FetchHelper from './FetchHelper';

const Tools = {
  fetchData:(url,handleSuccess)=>{
    fetch(url)
        .then(FetchHelper.checkStatus)
        .then(FetchHelper.parseJSON)
        .then(FetchHelper.parseData)
        .then(handleSuccess)
        .catch(FetchHelper.fetchDataFailed);
  },
  fetchPostData:(url,headData,bodyData,handleSuccess)=>{
    fetch(url,{
      method: 'POST',
      headers: headData,
      body: JSON.stringify(bodyData)
    })
    .then(FetchHelper.checkStatus)
    .then(FetchHelper.parseJSON)
    .then(FetchHelper.parsePostData)
    .then(handleSuccess)
    .catch(FetchHelper.fetchDataFailed);
  },
  timeFormat:(milliseconds, format) => {
    let isHour=format.indexOf("h")!=-1;
    let isDay=format.indexOf("D")!=-1;

    let S=0,s=0,m=0,h=0,D=0;

    let left = milliseconds;
    
    S = left%1000;left = Math.floor(left/1000);
    s =  left%60;left= Math.floor(left/60);
    if(isHour){
      m = left%60;left= Math.floor(left/60);
    }else{
      m = left;left=0;
    }
    if(isDay){
      h = left%24;left= Math.floor(left/24);
    }else{
      h = left;left=0;
    }
    D = left;
    
    var o = {
      "D+": D, //天
      "h+": h, //小时
      "m+": m, //分
      "s+": s, //秒
      "S": S//毫秒
    };
    for (var k in o) {
      if(new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return format;
  },
};
export default  Tools ;