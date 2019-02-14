import React, { Component } from 'react';
import SignupComp from '../../Components/Signup/Signup';
import './Signup.css'
import { userActions } from '../../Actions';
class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            fullName:'',
            email:'',
            password: '',
            confirmPassword: '',
            matched:"false",
            submitted: false,
            error: false,
            showPassword: false
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    }
    inputChangeHandler(e){
        if(e.target.name==='confirmPassword'){
            if(e.target.value===this.state.password){

                this.setState({
                    matched:true
                })
            }
            else{
                this.setState({
                    matched:false
                })
            }
        }     
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    handleClickShowPassword = () => {
        
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { userName, password } = this.state;
        const { dispatch } = this.props;
        if (userName && password) {
            dispatch(userActions.login(userName, password));
        }
    }
    render() {
        return (
            <div className="signupContainer" >
                <SignupComp
                    inputChangeHandler={this.inputChangeHandler}
                    handleSubmit={this.handleSubmit}
                    showPassword={this.state.showPassword}
                    handleClickShowPassword={this.handleClickShowPassword}
                    error={this.state.error}
                    matched={this.state.matched}
                />
            </div>
        )
    }
}

export default Signup;
