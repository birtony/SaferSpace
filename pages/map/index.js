import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {connect} from 'react-redux';
import * as Location from 'expo-location';
import MapView from 'react-native-maps'
import {HOST} from "../../const/config";
import {brandColor} from "../../const/theme";

class Map extends Component {
  state={
    coords: null,
    osb: []
  };

  async componentDidMount() {
    await Permissions.askAsync(Permissions.LOCATION);
    const {coords} = await Location.getCurrentPositionAsync();

    const response = await fetch(`${HOST}/api/centers`,{
      method: 'GET',
      headers: {
        Authorization: `JWT ${this.props.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    this.setState({coords, osb: data})
  }

  listMarkers() {
    return this.state.osb.map((o, i) => {
      return (
        <MapView.Marker
          key={i}
          coordinate={{
            latitude: o.location[0],
            longitude: o.location[1]
          }}
          title={o.name}
        />
      )
    })
  }
  render() {
    return this.state.coords === null ? null : (
      <MapView
        initialRegion={{
          latitude: this.state.coords.latitude,
          longitude: this.state.coords.longitude,
          latitudeDelta: 0.8,
          longitudeDelta: 0.4
        }}
        style={{flex: 1}}
      >
        <MapView.Marker
          coordinate={{
            latitude: this.state.coords.latitude,
            longitude: this.state.coords.longitude
          }}
          title='You are here'
          pinColor={brandColor}
        />
        {this.listMarkers()}
      </MapView>
    )
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});
export default connect(mapStateToProps)(Map);