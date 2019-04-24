
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 30.2729,
      lng: -97.7443
    },
    zoom: 11
  };
  render() {
    const {center, zoom} = this.props;
    return (
      <div>
        <div className='map' >
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyAEcFySpszeFSqAqTsVRazHjiOgEk_WZgs'}}
            defaultCenter={center}
            defaultZoom={zoom}
          >
        </GoogleMapReact>
      </div>
      </div>
    )
  }
}