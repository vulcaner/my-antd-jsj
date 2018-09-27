
import React from 'react';
import bg from './imgs/bg.png'; 
// import md5 from 'blueimp-md5';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        alert('验证通过');
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
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="" style={{float:'right'}}>Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const LoginForm = Form.create()(Login);
export default LoginForm;