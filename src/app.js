// Main App File
// @flow

// Import a library to help create a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Spinner, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    state = { isLoggedIn: null };

    componentWillMount(){
        firebase.initializeApp({});

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({ isLoggedIn: true});
            } else {
                this.setState({ isLoggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.isLoggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button 
                            onPress={() => firebase.auth().signOut() }
                        >Log Out</Button>
                    </CardSection>
                );
                break;
            case false: 
                return <LoginForm />
                break;

            default:
                return <Spinner size="large" />
        }

    }

    render(){
        return (
            <View>
                <Header headerText={"Auth"} />
                <Text>The App!</Text>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;