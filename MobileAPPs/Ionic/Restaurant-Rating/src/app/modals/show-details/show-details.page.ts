import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular'
import {Router, NavigationExtras} from '@angular/router';
@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.page.html",
  styleUrls: ["./show-details.page.scss"],
})
export class ShowDetailsPage implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() address: string;
  @Input() tags: string;
  @Input() rating: number;

  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  async closeModal() {
    const place = {
      name: this.name,
      description: this.description,
      address: this.address,
      tags: this.tags,
      rating: this.rating,
    };

    await this.modalController.dismiss(place);
  }

  async showLocation() {
    let navigationExtras: NavigationExtras = {
      state: {
        address: this.address,
      },
    };
    this.router.navigate(["location-info"], navigationExtras);
   await this.modalController.dismiss();
  }
}
