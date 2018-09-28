import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

//react 国际化
import {IntlProvider,addLocaleData} from 'react-intl';
import zh_CN from './locale/zh_CN.js';    //导入 i18n 配置文件
import en_US from './locale/en_US.js';
import 'intl';
import zh from 'react-intl/locale-data/zh';//react-intl语言包
import en from 'react-intl/locale-data/en';//react-intl语言包
addLocaleData([...en, ...zh]);//需要放入本地数据库

//获取需要渲染的根元素
let rootElement = document.getElementById('root');
const chooseLocale=function(){
    console.log(navigator.language.split('-')[0])
    switch(navigator.language.split('-')[0]){
        case 'en':
            return en_US;
            // break;
        case 'zh':
            return zh_CN;
            // break;
        default:
            return en_US;
            // break;
     }
}

ReactDOM.render(
    <IntlProvider  locale={navigator.language}  messages={chooseLocale()} >
        <Main />
    </IntlProvider>,
    rootElement
);
registerServiceWorker();
