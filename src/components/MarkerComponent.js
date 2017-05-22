import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import {Marker, Callout} from 'react-native-maps';
import {connect} from 'react-redux';

const { width, height } = Dimensions.get('window');

class MarkerComponent extends Component{
  render(){
    if(!this.props.marker.length){ return null }
    return(
      <View>
        {this.props.marker.map((marker, i) => {
          const markerImg = marker.form === "Lost" ? require('../assets/marker_lost.png') : require('../assets/marker_found.png');
          return(
            <Marker
              coordinate={marker.coord}
              key={i}
              image={markerImg}
            >
              <Callout style={{position: 'relative', flex: 1, maxWidth: width - 80}}>
                <View style={styles.markerHeader}>
                  <Text style={{fontSize: 18}}>{marker.form}</Text>
                </View>
                <View>
                  <Image
                    source={{uri: marker.url}}
                    style={styles.image}
                  />
                  <Text>Type: {marker.type}</Text>
                  <Text>Breed: {marker.breed}</Text>
                  <Text>Description: {marker.description}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  markerHeader: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  }
});

mapStateToProps = (state) => {
  let i = 0,
    marker = [];
  for (let obj in state.marker){
    marker[i++] = state.marker[obj]
  }
  return{marker};
}

export default connect(mapStateToProps)(MarkerComponent);
