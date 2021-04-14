import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`mat-card{
    margin-top:20px}`
  ]
})
export class ListadoComponent implements OnInit {

heroes:Heroe[] = [];


  constructor(private heroesService:HeroesServiceService) { }

  
  

  ngOnInit(): void {
   
    this.heroesService.getHeroes()
      .subscribe( resp => this.heroes = resp)
     
    
    
  }

}
