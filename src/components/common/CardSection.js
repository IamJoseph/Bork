import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => (
  // can take an array and accept props set elsewhere
  <View style = {[styles.containerStyle, props.style]}>
    {props.children}
  </View>
)

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fffef6',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}
export {CardSection};
