import { Component, OnInit  } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  Geocoder,
  GeocoderResult,
  GoogleMapOptions,
  LatLng,
} from '@ionic-native/google-maps';
import {Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  address: any;
  map: GoogleMap;
  mapOptions: GoogleMapOptions;
  location: LatLng;
  constructor(private geolocation: Geolocation) {}
  ngOnInit() {
    this.loadMap();
  }

  async getPosition() {
    return this.geolocation.getCurrentPosition();
  }

  searchAddress() {
    Geocoder.geocode({
      address: this.address,
    }).then((results: GeocoderResult[]) => {
      console.log(JSON.stringify(results));
      if (results.length > 0) {
        let marker: Marker = this.map.addMarkerSync({
          position: results[0].position,
          title: JSON.stringify(results[0].position),
        });
        this.map.animateCamera({
          target: marker.getPosition(),
          zoom: 17,
        });
      }
    });
  }

  addMarker(map: any, location: LatLng) {
    let marker: Marker = this.map.addMarkerSync({
      position: {
        lat: location.lat,
        lng: location.lng,
      },
    });
    map.animateCamera({
      target: marker.getPosition(),
      zoom: 20,
    });
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas");
    this.map.one(GoogleMapsEvent.MAP_READY).then(this.onMapReady.bind(this));
  }

  onMapReady() {
    this.getPosition()
      .then((res) => {
        this.location = new LatLng(res.coords.latitude, res.coords.longitude);
          console.log(JSON.stringify(this.location))
        this.addMarker(this.map, this.location);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }
}
