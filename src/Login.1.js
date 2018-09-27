
import React, { Component } from 'react';
import bg from './imgs/bg.png'; 
import md5 from 'blueimp-md5';
import icon1 from './imgs/login/icon1.png'; 
import icon2 from './imgs/login/icon2.png'; 
// 在大多数情况下，我们推荐使用受控组件来实现表单。在受控组件中，表单数据由 React 组件负责处理。另外一个选择是不受控组件，其表单数据由 DOM 元素本身处理。
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  componentDidMount(){
    if(sessionStorage.getItem('information')!==null){
      this.props.loginCallBack("false")
    }
  }
  login=(k)=>{
    if(k.keyCode===13){
      this.handleSubmit();
    }
  }
  handleSubmit(e){
    if(e){e.preventDefault()};
    const newInfo=JSON.stringify({username:this.state.username,password:md5(this.state.password)});
    if(sessionStorage.getItem('information')===null){
      sessionStorage.setItem("information",newInfo);
    }else{
      let information=sessionStorage.getItem('information');
      if(information===newInfo){
        alert('验证通过');
        this.props.loginCallBack("false")
      }else{
        alert('验证未通过！');
      }
    }
  
  }
  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    const style={
       display:'inline-block',
       width:20,
       height:20
    }
    const s={
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        border:'1px solid red',
        position:'absolute',
        left:'50%',
        top:'50%',
        margin:"-200px 0 0 -250px",
        width:'500px',
        height:"400px"
    }
    return (
      <div style={{width:'100%',height:'100%',position:'relative',background:`linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1)), url(${bg})no-repeat center center`}}>
        <form onSubmit={(e)=>this.handleSubmit(e)} style={s}>
          <label>
            <img style={style} src={icon1} alt="" /><input name={`username`} type="text" placeholder={`输入用户名`} value={this.state.username} onChange={(v)=>this.handleChange(v)} />
          </label>
          <br />
          <label>
            <img style={style} src={icon2} alt="" /><input  name={`password`} type="password" placeholder={`password`} value={this.state.password} onChange={(v)=>this.handleChange(v)}  onKeyDown={(k)=>this.login(k)} />
          </label>
          <input type="submit" value="login" />
        </form>
      </div>
    )
  }
}
export default Login;