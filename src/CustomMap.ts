import { User } from './User';
import { Company } from './Company';

// Instruction to every other class
// on how they be an argument to 'addMeker'

interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const div = document.getElementById(divId);
    const options = {zoom: 1, center: {lat: 0, lng: 0}};
    this.googleMap = new google.maps.Map(div, options);
  }

  addMarker(mappable: Mappable):void{
    new google.maps.Marker({
      map: this.googleMap, 
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}

export {CustomMap}