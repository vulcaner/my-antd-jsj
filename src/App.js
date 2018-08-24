import React, { Component } from 'react';
import './index.css';
import { Layout, Menu, Icon ,Button} from 'antd';
import screenfull from 'screenfull';
import logo from './imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
import pagesController from './content/pagesController';
// import  moment from 'moment';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      scale:1,
      collapsed:false,// menu控制
      pagekey:1// content控制
    }
  }
  componentWillMount(){
   this.autoScale();
  }
  // 自动获取缩放值
  autoScale=()=>{
    let clientW=document.body.clientWidth;
    let clientH=document.body.clientHeight;
    let scaleByWidth=(clientW-200)*0.88/1920;//左侧导航width 200
    let scaleByHeight=(clientH-64)*0.88/1082;//顶部导航height 64
    let scale=scaleByWidth>scaleByHeight?scaleByHeight:scaleByWidth;
    this.setState({scale});
  }
  componentWillReceiveProps(){}
  componentDidMount(){
    // 监听window窗口变化
    window.addEventListener('resize', this.autoScale);
  }
  componentWillUnmount(){
    // 组件注销时,移除window的resize事件监听,释放浏览器内存
    window.removeEventListener('resize',this.autoScale);
  }
  toggleMenu=()=>{
    this.setState({collapsed:!this.state.collapsed})
  }
  handleFullScreen = () => {
    let el=document.getElementById('pageContent');
    screenfull.enabled&&screenfull.request(el);
  }
  menuControll=(page)=>{
    let pagekey=page.key;
    this.setState({pagekey});
  }
  // 获得当前content
  getSinglePage=(pkey)=>{
     let child=pagesController[pkey-1].pageComponent;
     return React.createElement(child);
  }
  render() {
    return (
      <Layout style={{width:"100%",height:"100%"}}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <img className="logo animated infinite pulse" src={logo} alt="logo"/>
            <Menu 
                theme="dark" 
                mode="inline" 
                defaultSelectedKeys={['1']}
                onClick={this.menuControll}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="smile" />
                <span><Button type="danger">nav 4</Button></span>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>--nav--</span></span>}>
                  <Menu.Item key="5">subnav 5</Menu.Item>
                  <Menu.Item key="6">subnav 6</Menu.Item>
                  <Menu.Item key="7">subnav 7</Menu.Item>
                  <Menu.Item key="8">subnav 8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        {/* 右侧 */}
        <Layout>
          <Header style={{ background: '#fff', padding: 0}}>
            <Icon
              className="paddingLR20 fontS20"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleMenu}
            />
            <Icon
              className="fontS20 rt"
              style={{lineHeight:"64px",marginRight:"20px",cursor:"pointer"}}
              type='laptop'
              title={`F11大屏^_^`}
              onClick={this.handleFullScreen}
            />
          </Header>
          {/* content>page* */}
          <Content id="contenter">
              {/* 缩放元素 */}
              <div 
                  id='scale' 
                  style={
                    {
                      transform:`scale(${this.state.scale})`,
                      WebkitTrasform:`scale(${this.state.scale})`,
                      msTransform:`scale(${this.state.scale})`,
                      //WebkitTransition: 'all .5s', // note the capital 'W' here
                      //msTransition: 'all .5s' // 'ms' is the only lowercase vendor prefix
                    }
                  }> 
                {this.getSinglePage(this.state.pagekey) }
              </div>
                {/* {
                  React.createElement(
                    'div',
                    {
                      id: 'scale'
                    },
                    // <div style={{width: '100%',height: '100%',}}>
                        // { this.state.showNav ? <NavMenu hideMenu={this.toggleNavMenu} handleClick = {this._handleClick}/>: null }
                    // </div>,
                    this.getSinglePage(this.state.pagekey) 
                  )
                } */}
          </Content>
        </Layout>
    </Layout>
    );
  }
}
export default App;