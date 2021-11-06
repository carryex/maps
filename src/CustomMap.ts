// Instruction to every other class
// on how they be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent():string;
  color: string;
}

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const div = document.getElementById(divId);
    const options = {zoom: 1, center: {lat: 0, lng: 0}};
    this.googleMap = new google.maps.Map(div, options);
  }

  addMarker(mappable: Mappable):void{
    const marker = new google.maps.Marker({
      map: this.googleMap, 
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      
      infoWindow.open(this.googleMap, marker);
    });
  }
}

export {CustomMap, Mappable}