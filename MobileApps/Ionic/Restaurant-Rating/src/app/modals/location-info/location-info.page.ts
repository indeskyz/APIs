import { ActivatedRoute, Router } from '@angular/router';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  Geocoder,
  GeocoderResult
} from '@ionic-native/google-maps';
import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.page.html',
  styleUrls: ['./location-info.page.scss'],
})
export class LocationInfoPage implements OnInit {
    sharedAddress: any;
    map:GoogleMap;
  constructor(private route: ActivatedRoute, private router:Router, private modalController: ModalController) {

        this.getPassedAddress();
  }

  ngOnInit() {
      this.loadMap();
  }

   getPassedAddress() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.sharedAddress = this.router.getCurrentNavigation().extras.state.address;
        console.log(this.sharedAddress);
        this.searchPassedAddress();
      }
    });
  }

 searchPassedAddress() {
    console.log(this.sharedAddress);
    Geocoder.geocode({
      address: this.sharedAddress,
    }).then((results: GeocoderResult[]) => {
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
  loadMap() {
    this.map = GoogleMaps.create("location_canvas");
  }




}
