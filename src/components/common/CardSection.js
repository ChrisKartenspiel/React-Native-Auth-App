// Card Section Component

// Import a library to help create a component
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

// Create a Functional Component
const CardSection = (props) =>{
    
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    // Card Borders
    borderColor: '#ddd',
    borderBottomWidth: 1,

    // Spacing
    padding:5,

    // Background Color
    backgroundColor: '#fff',

    // Flex Settings
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

// Make the Component Available
export { CardSection };