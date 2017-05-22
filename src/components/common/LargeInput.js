import React from 'react';
import {TextInput, View, Text} from 'react-native';

const LargeInput = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
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
      multiline
      maxLength={300}
    />
    </View>
  )
};

const styles = {
  containerStyle: {
    // height: 80,
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 18,
    // lineHeight: 23,
    flex: 1,
    height: 100,
    flexWrap: 'wrap',
    // width: 100
    //padding: 0
  },
  labelStyle: {
    fontWeight: '500',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
}

export {LargeInput};
