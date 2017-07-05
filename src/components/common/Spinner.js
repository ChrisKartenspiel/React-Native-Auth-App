// Spinnner Component
// @flow

// Import a library to help create a component
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

// Create a Functional Component
const Spinner = ({ size }) =>{

    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={ size || 'large'} />
        </View>
    );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


// Make the Component Available
export { Spinner };