import React, { Component } from 'react';
import {Form, Button,Message} from 'semantic-ui-react'
import Validate from 'validator'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types';


class LoginForm extends Component {
    state = {
        data:{
            email:'',
            password:'',
        },
        loading:false,
        errors:{}
    }
    onChange = (e)=>{
        this.setState({data:{...this.state.data, [e.target.name]:e.target.value}})
    }

    onSubmit = ()=>{
        const errors = this.validate(this.state.data)
        this.setState({errors})
        if(Object.keys(errors).length===0){
            this.setState({loading:true})
            this.props
                .submit(this.state.data)
                .catch(e=>{
                    this.setState({errors:e.response.data.errors,loading:false})
                })
        }
    }
    validate = (data)=>{
        const errors = {};
        if(!Validate.isEmail(data.email)) errors.email="이메일 형식이 아닙니다."
        if(!data.password) errors.password = "비밀번호는 필수 입력입니다."
        
        return errors;
    }
    render() {
        const {data,errors}=this.state

        return (
            <Form onSubmit={this.onSubmit} loading={this.state.loading}>
                {errors.global&&<Message negative>
                    <Message.Header> SomeThing went wrong</Message.Header>
                    <p>{errors.global}</p>
                </Message>
                }
                <Form.Field>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="example@example.com" 
                        value={data.email}
                        onChange={this.onChange}/>
                    {errors.email ? <InlineError text={errors.email}/>:null }
                </Form.Field>

                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        placeholder="엄청 어렵게 하세요" 
                        value={data.password}
                        onChange={this.onChange}/>
                    {errors.password ? <InlineError text={errors.password}/>:null }                    
                </Form.Field>
                <Button primary>Login</Button >
            </Form>
        );
    }
}
LoginForm.proptypes={
    submit:PropTypes.func.isRequired
}

export default LoginForm;