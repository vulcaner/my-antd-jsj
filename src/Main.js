
import React from 'react';
import App from './App';
import Login from './Login';
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogin:false
    }
  }
  componentDidMount(){}
  callBack=(bol)=>{
    this.setState({isLogin:bol})
  }
  render() {
    return (this.state.isLogin?<App/>:<Login loginCallBack={this.callBack}/>)
  }
}
export default Main;