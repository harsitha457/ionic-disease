import { Component } from '@angular/core';
import { SuperHero } from './superhero';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  weapons = ['Iron Suit', 'Hammer', 'Bow and Arrow', 'Shield', 'Raw Power'];
  specialities = [ 'Technology', 'God of Thunder', 'Archery', 'War & Leadership', 'Scientist'];
  model = new SuperHero(1,"Iron Man",this.weapons[0],this.specialities[0],"Tony stark");

  submitted = false;
  onSubmit()
  {
    this.submitted = true;
    console.log('this.model.name' + this.model.name);
    console.log('this.model.weapon' + this.model.weapon);
    console.log('this.model.speciality' + this.model.speciality);
  }

}
