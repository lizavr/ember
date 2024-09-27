import Component from '@glimmer/component';
// import ENV from 'super-rentals/config/environment';

const FAR_API =
  'https://ic.pics.livejournal.com/kubirubi/28849291/1659029/1659029_original.jpg';

export default class MapComponent extends Component {
  get src() {
    // let { lng, lat, width, height, zoom } = this.args;

    // let coordinates = `${lng},${lat},${zoom}`;
    // let dimensions = `${width}x${height}`;
    // let accessToken = `access_token=${this.token}`;

    // return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
    let api = FAR_API;

    return api;
  }

  // get token() {
  // return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  // }
}
