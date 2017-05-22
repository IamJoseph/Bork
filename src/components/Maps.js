import React, {Component, PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import MapStyles from '../assets/MapStyles';
import {LogoButton} from './common';
import MapView from 'react-native-maps';
import {connect} from 'react-redux';
import {formSelection, updateMarkers} from '../actions';
import MarkerComponent from './MarkerComponent';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.07;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Maps extends PureComponent {
  constructor(props) {
   super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  lostFoundMenu = (e) => {
    const coord = e.nativeEvent.coordinate;
    this.props.formSelection(coord);
  }

  componentDidMount() {
    this.props.updateMarkers();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        });
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      const newRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.onRegionChange(newRegion);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange = ({latitude, longitude, latitudeDelta, longitudeDelta}) => {
    this.setState({
      region: {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.region.latitude !== this.state.region.latitude &&
    nextState.region.longitude !== this.state.region.longitude){
      console.log('doing true');
      return true;
    }
    console.log('doing false!!');
    return false;
  }
  render() {
    return (
        <View style={styles.container}>
          <MapView
            toolbarEnabled
            customMapStyle={MapStyles}
            provider={'google'}
            style={styles.map}
            onLongPress={this.lostFoundMenu}
            delayLongPress={1500}
            region={this.state.region}
            showsUserLocation
            followUserLocation
          >
            <MarkerComponent />
          </MapView>
          <LogoButton onPress = {() => this.setState({showMenu : !this.state.showMenu})} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },
  map: {
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: 'white',
  },
});

export default connect(null, {formSelection, updateMarkers})(Maps);
