import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  const {container, input, labelStyle } = styles;

  return(
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={input}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = {
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
}

export default Input;
