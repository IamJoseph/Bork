import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

class FormSelection extends Component{
  onFormSelect = (formType) => {
    const {form} = formType;
    const {coord} = this.props;
    Actions.markerForm({coord, form, title: form});
  }

  render(){
    return(
      <View style={styles.viewStyle}>
        <TouchableOpacity
          onPress={() => this.onFormSelect({form: 'Lost'})}
          style={[styles.buttonStyle, {backgroundColor: '#9ac0d3'}]}
        >
          <Image
            source={require('../assets/marker_lost_hq.png')}
            style={styles.imageLostStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.onFormSelect({form: 'Found'})}
          style={styles.buttonStyle}
        >
          <Image
            source={require('../assets/marker_found_hq.png')}
            style={styles.imageFoundStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fffef6',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 300,
    height: 140,
    marginTop: 10,
    marginBottom:5,
    elevation: 5,
    backgroundColor: '#6bc6f3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageLostStyle: {
    alignSelf: 'center',
    width: 137.5,
    height: 127.6,
  },
  imageFoundStyle: {
    alignSelf: 'center',
    width: 151.25,
    height: 105.05,
  }
})

export default FormSelection;
