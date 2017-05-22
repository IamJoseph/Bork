import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
//destructed prop.onPress, children, etc means props no accessible
// const Button = ({onPress, children, style, logo}) => {
const Button = ({onPress, children, style, textStyle}) => {
  const {buttonStyle, fontStyle} = styles;
  // console.log('onPress', onPress);
  // const onPress = () => {
  //   console.log('okie');
  // }

  return(
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[fontStyle, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    marginTop: 10,
    marginBottom:5,
    elevation: 5,
    // flex: 2,
    backgroundColor: '#6bc6f3',
    //backgroundColor: '#007aff',
    // backgroundColor: '#fff',
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  //  bottom: 30,
//    position: 'absolute',
    justifyContent: 'center',
//    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  //  paddingTop: 0,
    left: 0,
    right: 0,
    // padding: 4,
     height: 40,
    width: 60,
  },
  fontStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 9,
    paddingBottom: 9,
    // paddingLeft: 10,
    // paddingRight: 10,
  }
}
export {Button};
