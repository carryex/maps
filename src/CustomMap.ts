import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    const div = document.getElementById(divId);
    const options = {zoom: 1, center: {lat: 0, lng: 0}};
    this.googleMap = new google.maps.Map(div, options);
  }

  addUserMarker(user: User):void {
    new google.maps.Marker({
      map: this.googleMap, 
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  addCompanyMarket(company: Company):void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    })
  }
}