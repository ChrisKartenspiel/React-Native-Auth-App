// Input Component
// @flow

// Import a library to help create a component
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native';

// Create a Functional Component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) =>{

    const {
        InputStyle,
        LabelStyle,
        containerStyle
    } = styles;
    return (
        <View style={containerStyle}>
            <Text style={LabelStyle}> { label } </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={InputStyle}
                autoCorrect={false}       
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
  InputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize:18,
    lineHeight:23,
    flex:2
  },
  LabelStyle: {
    fontSize:18,
    paddingLeft:20,
    flex:1
  },
  containerStyle:{
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  }
});


// Make the Component Available
export { Input };