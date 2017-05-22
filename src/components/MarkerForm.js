import React, {Component} from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {submitLostForm} from '../actions';
import {CardSection, Input, LargeInput, Button} from './common';
import {Actions} from 'react-native-router-flux';


class MarkerForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      type: "Nothing listed",
      breed: "Nothing listed",
      description: "Nothing listed",
      coord: this.props.coord,
      form: this.props.form,
      picture: undefined,
    }
  }

  onPress = () => {
    this.props.submitLostForm(this.state, this.state.picture)
  }

  pictureToState = (src) => {
    this.setState({picture: src})
  }

  Picture = () => {
    if(this.state.picture){
      return(
        <Image
          source={{uri: this.state.picture}}
          style={styles.image}
        />
      )
    }
    return(
      <Button onPress={() => Actions.camera({getPicture: this.pictureToState})} style={{width: 150, marginBottom: 20}}>Take Picture</Button>
    )
  }

  takePicture = () => {
    Actions.camera();
  }

  render(){
    return(
      <ScrollView
      keyboardShouldPersistTaps="always"
      keyboardDismissMode='on-drag'
      style={{backgroundColor: '#fffef6'}}
      >
        <CardSection style={{justifyContent: 'center', paddingBottom: 30}}>
          {this.Picture()}
        </CardSection>
        <CardSection>
          <Input
            label = 'Type: '
            placeholder = 'dog / cat / cow / etc'
            onChangeText = {(text) => {
              this.setState({type: text})
            }}
          />
        </CardSection>
        <CardSection>
          <Input
            label = 'Breed: '
            placeholder = 'corgi'
            onChangeText = {(text) => {
              this.setState({breed: text})
            }}
          />
        </CardSection>
        <CardSection>
          <LargeInput
            label = 'Description / Notes: '
            placeholder = 'Distinguishing features or anything helpful'
            onChangeText = {(text) => {
              this.setState({description: text})
            }}
          />
        </CardSection>
        <Button onPress={this.onPress} style={{width: 200, marginBottom: 20}}>
          Submit
        </Button>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }
})

export default connect(null, {submitLostForm})(MarkerForm);
