// Header Component

// Import a library to help create a component
import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

// Create a Functional component
const Header = (props) => {
    if(!props.headerText) {
        props.headerText = "Screen";
    }
    // This is JSX 
    return (
        <View style={styles.view}>
            <Text style={styles.header}>{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',    
    paddingTop: 12,
    paddingBottom: 10,  
    backgroundColor: "#fefefe",

    //No Need 
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 0.5,
    
    // Shadow Doesnt Work on Android
    // Tip For Shadow on Android Use elevation
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
        width:0,
        height:2
    },
    shadowOpacity: 0.2
  },
  header: {
    fontSize: 20,
    color: "#020202"
  }
});

// Make the Component Available
export { Header };