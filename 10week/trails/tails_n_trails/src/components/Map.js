import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class Map extends Component {
  static defaultProps = {
    center: {
      //always start in austin
      lat: 30.2729,
      lng: -97.7443,
    },
    zoom: 13
  };

  render() {
    const {center, zoom} = this.props;
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <div className='map' >
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyDeQEACzs9eaPfC6oPU-d6BHYlPr_D1gDY'}}
            defaultCenter={center}
            defaultZoom={zoom}
          >
        </GoogleMapReact>
      </div>
      </div>
    )
  }
}

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=park&keyword=dog&key=

//next steps here:
// https://github.com/google-map-react/google-map-react/blob/master/API.md

// AIzaSyDeQEACzs9eaPfC6oPU-d6BHYlPr_D1gDY