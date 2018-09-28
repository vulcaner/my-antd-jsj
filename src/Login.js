
import React from 'react';
import bg from './imgs/bg.png'; 
// import md5 from 'blueimp-md5';
//1、导入 injectIntl
import { injectIntl,FormattedMessage } from 'react-intl'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      please:"请输入"
    }
  }
  componentDidMount(){
      // 3、使用 intl 对象
      const {intl} = this.props;
      console.log(intl);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.loginCallBack("false");
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{minWidth:600,width:'100%',height:'100%',position:'relative',background:`linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1)), url(${bg})no-repeat center center`}}>
        <Form onSubmit={this.handleSubmit} className="login-form" style={{maxWidth:500,position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',transition:'all .5s'}}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>
                 <FormattedMessage 
                  　　id="Login.rember"
                      // description='IS Login.rember'
                      // defaultMessage=''
                  />
              </Checkbox>
            )}
            <a className="login-form-forgot" href="" style={{float:'right'}}>
                  <FormattedMessage 
                  　　id="Login.forPwd"
                      // description='IS Login.forPwd'
                      // defaultMessage=''
                  />
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>
                  <FormattedMessage 
                  　　id="Login.login"
                      // description='IS Login.login'
                      // defaultMessage=''
                  />
            </Button>
            <a href="">
                  <FormattedMessage 
                  　　id="Login.reg"
                      // description='IS Login.reg'
                      // defaultMessage=''
                  />
            </a>
          </FormItem>
        </Form>
        <FormattedMessage 
        　　id="Login.user"
            // description='IS Login.user'
            defaultMessage='{please} Username '
            values={{please:<i style={{color:"red"}}>{this.state.please}(state中)</i>}}
        />
        <br/>
        <FormattedMessage 
        　　id="Login.pwd"
        // 　　description='IS Login.pwd'
            defaultMessage='{please} Password '
            values={{please:<i style={{color:"red"}}>{this.state.please}(state中)</i>}}
        />
      </div>
    );
  }
};
const LoginForm = Form.create()(Login);
// export default LoginForm;
//2、在组件中注入
export default injectIntl(LoginForm);