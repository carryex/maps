import faker from 'faker';
class Company {
  companyName:string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPharse = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

export {Company}