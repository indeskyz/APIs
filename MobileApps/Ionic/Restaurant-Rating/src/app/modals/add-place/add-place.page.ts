import { Component, OnInit, Input } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {ModalController} from '@ionic/angular';
const {Storage} = Plugins;

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {
  @Input() name: string;
  @Input() address: string;
  @Input() description: string;
  @Input() tags: string;
  @Input() rating: number;
  places: Place[];

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {}
  savePlace() {
    const place = new Place(this.name, this.address, this.description, this.tags, this.rating);

      if (this.name != '' && this.name != null) {
      this.setObject(JSON.stringify(place.name), place);
      this.name = '';
      this.address = '';
      this.description = '';
      this.tags = '';
      this.rating = 0;
    } else {
        alert('please provide a name!');
    }
  }
  async setObject(key: string, value: any) {
    await Storage.set({
      key: key,
      value: JSON.stringify(value),
    });
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

  async closeModal() {
    const place = {
            name: this.name,
            description: this.description,
            address: this.address,
            tags: this.tags,
            rating: this.rating,
    }
    this.savePlace();
      await this.modalController.dismiss(place)
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