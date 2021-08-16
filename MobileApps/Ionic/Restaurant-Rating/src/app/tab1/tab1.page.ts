import { Component } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {ModalController} from '@ionic/angular';
import {EditInfoPage} from '../modals/edit-info/edit-info.page';
import {ShowDetailsPage} from '../modals/show-details/show-details.page'
import {AddPlacePage} from '../modals/add-place/add-place.page';
const {Storage} = Plugins;

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  places: Place[];
  dataReturned: any;
  constructor(private modalController: ModalController) {
    this.readPlace();
  }

    

  async readPlace() {
    this.places = [];
    const { keys } = await Storage.keys();
    keys.forEach(this.getPlace, this);
  }

  async getPlace(key) {
    const item = await Storage.get({ key: key });
    let place = JSON.parse(item.value);
    this.places.push(place);
  }

  async deletePlace(index) {
    let place = this.places[index];
    await Storage.remove({ key: JSON.stringify(place.name) });
    this.readPlace();
  }
  async editPlace(place) {
    const modal = await this.modalController.create({
      component: EditInfoPage,
      componentProps: {
        name: place.name,
        address: place.address,
        description: place.description,
        tags: place.tags,
        rating: place.rating,
      },
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        const editedPlace = dataReturned["data"];
        place.name = editedPlace.name;
        place.address = editedPlace.address;
        place.description = editedPlace.description;
        place.tags = editedPlace.tags;
        place.rating = editedPlace.rating;
        const updatedPlace = new Place(
          editedPlace.name,
          editedPlace.address,
          editedPlace.description,
          editedPlace.tags,
          editedPlace.rating
        );
      }
    });
    return await modal.present();
  }
  async showDetails(place) {
    const modal = await this.modalController.create({
      component: ShowDetailsPage,
      componentProps: {
        name: place.name,
        address: place.address,
        description: place.description,
        tags: place.tags,
        rating: place.rating,
      },
    });
    return await modal.present();
  }

  async addANewPlace(place) {
    const modal = await this.modalController.create({
      component: AddPlacePage,
      componentProps: {
        name: place.name,
        address: place.address,
        description: place.description,
        tags: place.tags,
        rating: place.rating,
      },
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        const newPlace = dataReturned["data"];
        place.name = newPlace.name;
        place.address = newPlace.address;
        place.description = newPlace.description;
        place.tags = newPlace.tags;
        place.rating = newPlace.rating;
        const addedPlace = new Place(
          newPlace.name,
          newPlace.address,
          newPlace.description,
          newPlace.tags,
          newPlace.rating
        );
        this.places.push(addedPlace);
      }
    });
    return await modal.present();
  }
}
export class Place{
    name:string;
    address:string;
    description:string;
    tags:string;
    rating: number;
    static key: string;
constructor(name:string,address:string,description:string,tags:string, rating:number){
            Place.key = 'place';
            this.name = name;
            this.address = address;
            this.description = description;
            this.tags = tags;
            this.rating = rating;
    }
}
