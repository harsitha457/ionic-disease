import { Component } from '@angular/core';
import {item} from './tab2model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: item[] = [
    {
      id: 'r1',
      title: 'plushies',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Comercio_de_peluches_en_Lima%2C_Per%C3%BA%2C_2015-07-28%2C_DD_47.JPG/408px-Comercio_de_peluches_en_Lima%2C_Per%C3%BA%2C_2015-07-28%2C_DD_47.JPG',
      description: 'plushie toys thate are stuffed '
    },
  {
    id: 'r2',
    title: 'T-shirt',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
    description: 'A plain cyon blue  T- shirt for casual wear  '
  }
];


  constructor() {}

}



