import React, { Component } from 'react';
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
      contentScale:1,
      collapsed:true,// menu控制
      pagekey:1// content控制
    }
  }
  componentWillMount(){
   this.autoScale();
  }
  componentWillUnmount(){
    //释放浏览器内存
    window.removeEventListener('resize',this.autoScale);
    window.removeEventListener('keydown', this.handleKeyBoard)
  }
  // 获得当前content
  getSinglePage=(pkey)=>{
    return pagesController[pkey-1]?React.createElement(pagesController[pkey-1]["pageComponent"]):null;
  }
  // content自动获取缩放值
  autoScale=()=>{
    let clientW=document.body.clientWidth;
    let clientH=document.body.clientHeight;
    let scaleByWidth=(clientW-200)*0.88/1920;//左侧导航width 200
    let scaleByHeight=(clientH-64)*0.88/1082;//顶部导航height 64
    let contentScale=scaleByWidth>scaleByHeight?scaleByHeight:scaleByWidth;
    this.setState({contentScale});
  }
  // content全屏
  handleFullScreen = () => {
    let el=document.getElementById('fullScreenElement');
    screenfull.enabled&&screenfull.request(el);
  }
  handleKeyBoard=(event)=>{
    let self=this;
    let e = event || window.event;
    let k=null;
    switch(e.keyCode){
      case 38:
          k=self.state.pagekey-1;
          if(k>=1&&k<=pagesController.length){
            self.menuControll(k);
          }else if(k===0){
            self.menuControll(pagesController.length);
          }
      break

      case 40:
          k=self.state.pagekey+1;
          if(k>=1&&k<=pagesController.length){
            self.menuControll(k);
          }else if(k===pagesController.length+1){
            self.menuControll(1);
          }
      break

      case 37:
          k=self.state.pagekey-1;
          if(k>=1&&k<=pagesController.length){
            self.menuControll(k);
          }else if(k===0){
            self.menuControll(pagesController.length);
          }
      break

      case 39:
          k=self.state.pagekey+1;
          if(k>=1&&k<=pagesController.length){
            self.menuControll(k);
          }else if(k===pagesController.length+1){
            self.menuControll(1);
          }
      break

      default:
      break
    }
  }
  componentDidMount(){
    window.addEventListener('resize', this.autoScale);
    window.addEventListener('keydown', this.handleKeyBoard);
  }
  toggleMenu=()=>{
    this.setState({collapsed:!this.state.collapsed})
  }
  menuControll=(page)=>{
    // console.log(page);
                        //键盘事件
    let pagekey=page.key||page;
    this.setState({pagekey});
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
              title={`F11全屏^_^`}
              onClick={this.handleFullScreen}
            />
          </Header>
          {/* content>page* */}
          <Content id="flexBox">
              {/* 缩放元素 */}
              <div 
                  id='contentScale' 
                  style={
                    {
                      WebkitTrasform:`scale(${this.state.contentScale})`,
                      MozTransform:`scale(${this.state.contentScale})`,
                      transform:`scale(${this.state.contentScale})`
                    }
                  }> 
                  {/* 全屏元素 */}
                  <div id='fullScreenElement' >
                    {this.getSinglePage(this.state.pagekey) }
                  </div>
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