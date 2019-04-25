
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 30.2729,
      lng: -97.7443,
    },
    zoom: 13
  };

  //do I need to find a converter to get zip code to give lat/lon?

  render() {
    const {center, zoom} = this.props;
    return (
      <div style={{ height: '100vh', width: '100%' }}>
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

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=

// https://www.google.com/maps/search/dog+trails+near+me/@30.4231306,-97.7190639,13z/data=!3m1!4b1
// above is the the search I want to go after each submit, with updated lat & long, updated zoom and idk what data is?