import React, { Component } from 'react';
import './index.css';
import { Layout, Menu, Icon ,Button} from 'antd';
import logo from './imgs/logo.svg'; // 告诉webpack 这个js文件使用这张图片  
import pagesController from './content/pagesController';
// import  moment from 'moment';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      // menu控制
      collapsed:false,
      // content控制
      pagekey:1
    }
  }
  componentWillReceiveProps(){}
  componentDidMount(){
  }
  componentWillUnmount(){}
  toggleMenu=()=>{
    this.setState({collapsed:!this.state.collapsed})
  }
  handleFullScreen=(e)=>{
      let element=document.getElementById('pageContent');
      if(element.requestFullscreen) {
        element.requestFullscreen();
       } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
       } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
       } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
       }
  }
  menuControll=(page)=>{
    this.setState({pagekey:page.key})
  }
   // 获得当前page content
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
              <div id='scale'>
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