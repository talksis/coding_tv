import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {login} from '../../store/actions/auth'

class LoginPage extends Component {
    state = {  }
    submit =(data)=>{
        return this.props.login(data).then( ()=>this.props.history.push('/'))}
       
    
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
            </div>
            
        );
    }
}
LoginPage.proptypes={
    history:PropTypes.shape({
                        push:PropTypes.func.isRequired
                      }).isRequired,
    login:PropTypes.func.isRequired
}

const mapDispatchToProps={
    login
}

export default connect(null,mapDispatchToProps)(LoginPage);
