import React, {Component} from 'react';
import {View, Text} from 'react-native';

// const Header = (props) => {
//   const {viewStyle, textStyle} = styles;
//   return(
//     <View style={viewStyle}>
//       <Text style={textStyle}>{props.headerText}</Text>
//     </View>
//   )
// }

class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 60
  },
  textStyle: {
    fontSize: 20
  }
}

export {Header};
