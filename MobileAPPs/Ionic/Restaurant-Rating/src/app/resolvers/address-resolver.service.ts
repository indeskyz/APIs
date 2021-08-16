import { Injectable } from '@angular/core';
import {AddressService} from '../services/address-service.service'
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AddressResolverService implements Resolve<any> {

  constructor(private addressService:AddressService) { }

    resolve(route:ActivatedRouteSnapshot){
            let address = route.paramMap.get('address');
        return this.addressService.getAddress();
    }
}
