/**
 * @prettier
 */
import * as React from "react";
import ReactMapGL from "react-map-gl";

export interface IMapProps {
  name: string;
}

export interface IMapState {
  viewport: {
    width: number;
    height: number;
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

class Map extends React.Component<IMapProps, IMapState> {
  constructor(props: IMapProps) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };
  }

  public render() {
    /* tslint:disable:no-console */
    console.log("this.props", this.props);
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={this._handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    );
  }

  private _handleViewportChange = viewport => {
    return this.setState({ viewport });
  };
}

// function Map({ name }: IMapProps) {
//     return <ReactMapGL />;
// }

export default Map;
