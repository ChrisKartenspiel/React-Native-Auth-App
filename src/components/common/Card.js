// Card Component

// Import a library to help create a component
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

// Create a Functional Component
const Card = (props) =>{
    
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    // background
    backgroundColor: "#1e1e1e",


    // Card Borders
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,

    // Card Shadow
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
        width:0,
        height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    // Spacing
    marginLeft:5,
    marginRight: 5,
    marginTop:10,
  }
});

// Make the Component Available
export { Card };