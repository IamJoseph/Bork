import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const{containerStyle, inputStyle, labelStyle} = styles;
  return(
    <View style={containerStyle}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={inputStyle}
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid = {'transparent'}
      autoCorrect={false}
    />
    </View>
  )
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20,
    width: 100
    //padding: 0
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 20,
    flex: 1
  }
}

export {Input};
