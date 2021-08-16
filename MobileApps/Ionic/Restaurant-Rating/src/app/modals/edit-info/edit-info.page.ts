import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {
    
    @Input() name: string;
    @Input() description: string;
    @Input() address: string;
    @Input() tags: string;
    @Input() rating: number;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
    
    async closeModal(){
        const place = {
                name: this.name,
                description: this.description,
                address: this.address,
            tags: this.tags,
            rating: this.rating
        }
        
        await this.modalController.dismiss(place)
    }

}
