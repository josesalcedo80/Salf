import React from 'react';
import {StyleSheet, TextInput, Dimensions, } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

const Input = props => (



   <TextInput
   placeholderTextColor={'black'}
   underlineColorAndroid='transparent'
   {...props}
   style={[styles.input, props.style]}
   />
   
);

const styles = StyleSheet.create({
   input:{
      width: WIDTH -50,
      borderRadius: 2,
      padding: 5,
      marginTop: 8,
      marginBottom: 8,
      backgroundColor: 'white',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: 'grey'
   }
});

export default Input;