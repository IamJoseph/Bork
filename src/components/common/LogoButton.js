import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
//destructed prop.onPress, children, etc means props no accessible
const LogoButton = ({onPress}) => {
  const {buttonStyle, logoStyle} = styles;
  return(
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
        <Image
          style={logoStyle}
          source={require('../../assets/Bork.png')}
        />
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginLeft: 5,
    marginRight: 5,
    bottom: 40,
    justifyContent: 'center',
    left: 0,
    right: 0,
    height: 80,
    width: 80,
  },
  logoStyle: {
     width: 55,
     height: 70,
     left: 3,
    //resizeMode: 'contain',
    alignSelf: 'center',
  }
}
export {LogoButton};
