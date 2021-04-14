import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.heroe)
  }
  @Input() heroe !:Heroe;
  
  



}
