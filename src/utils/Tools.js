import FetchHelper from './FetchHelper';
// import moment from 'moment';
const Tools = {
  fetchData: (url, handleSuccess) => {
    fetch(url)
      .then(FetchHelper.checkStatus)
      .then(FetchHelper.parseJSON)
      .then(FetchHelper.parseData)
      .then(handleSuccess)
      .catch(FetchHelper.fetchDataFailed);
  },
  fetchPostData: (url, headData, bodyData, handleSuccess) => {
    fetch(url, {
      method: 'POST',
      headers: headData,
      body: JSON.stringify(bodyData)
    })
      .then(FetchHelper.checkStatus)
      .then(FetchHelper.parseJSON)
      .then(FetchHelper.parseData2)
      .then(handleSuccess)
      .catch(FetchHelper.fetchDataFailed);
  },
  fetchPost: (url, headData, bodyData, handleSuccess) => {
    fetch(url, {
      method: 'POST',
      headers: headData,
      body: JSON.stringify(bodyData)
    })
      .then(FetchHelper.checkStatus)
      .then(FetchHelper.parseJSON)
      .then(handleSuccess)
      .catch(FetchHelper.fetchDataFailed);
  },
  fetchGetData: (url, headData, handleSuccess) => {
    fetch(url, {
      method: 'GET',
      headers: headData
    })
      .then(FetchHelper.checkStatus)
      .then(FetchHelper.parseJSON)
      .then(FetchHelper.parseData2)
      .then(handleSuccess)
      .catch(FetchHelper.fetchDataFailed);
  },
  fetchGet: (url, headData, handleSuccess) => {
    fetch(url, {
      method: 'GET',
      headers: headData
    })
      .then(FetchHelper.checkStatus)
      .then(FetchHelper.parseJSON)
      .then(handleSuccess)
      .catch(FetchHelper.fetchDataFailed);
  }
  //定制数据处理方法
};
export default Tools;