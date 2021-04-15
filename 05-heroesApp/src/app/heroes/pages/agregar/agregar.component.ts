import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {


  publishers = [
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },

    {
      id:'Marvel',
      desc:'Marvel - Comics'
    },

    
  ];

  heroe:Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:'',

  };

  constructor() { }

  ngOnInit(): void {
  }

}
