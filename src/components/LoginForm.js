// Login Component
// @flow

// Import a library to help create a component
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';



class LoginForm extends Component {

    state = { 
        email: '', 
        password:'', 
        error: '', 
        loading: false
    };
    
    // Life Cycle Methods

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({error: '', loading: true });

        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                Firebase
                    .auth()
                    .createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading:false,
            error: ''
        });
    }

    onLoginFail() {
        this.setState({
            error:'Authentication Failed.',
            loading: false
        });
    }

    renderButton() {
        if(this.state.loading){
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>            
        );
        
    }

    render() {
        return  (
            <Card>

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        value={this.state.email}
                        onChangeText={ inputEmail => this.setState({ email: inputEmail })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        secureTextEntry
                        onChangeText={ inputPass => this.setState({ password: inputPass })}
                    />
                </CardSection>
                
                <Text style={ styles.errorTextStyle}>{this.state.error}</Text>
                
                <CardSection>
                    { this.renderButton() }
                </CardSection>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
  }
});

// Make the Component Available
export default LoginForm;