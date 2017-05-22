'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Camera from 'react-native-camera';
import {Actions} from 'react-native-router-flux';

class CameraComponent extends Component {
  takePicture() {
    this.camera.capture()
      .then((data) => {
        this.props.getPicture(data.path);
        Actions.pop()
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureQuality= "720p"
          orientation="portrait"
          >
          <TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)}>
            <Image
              style={{width: 50, height: 40}}
              source={require('../assets/camera_white.png')}
            />
          </TouchableOpacity>
        </Camera>
    );
  }

}

const styles = StyleSheet.create({
  preview: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    width: 60,
    height: 60,
    borderColor: '#345e81',
    backgroundColor: '#6bc6f3',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
     margin: 40
  }
});

export default CameraComponent;
