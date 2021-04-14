import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { HeroeComponent } from './pages/heroe/heroe.component';



@NgModule({
  declarations: [
    AgregarComponent, 
    BuscarComponent, 
    HomeComponent,
    HeroeTarjetaComponent,
    ListadoComponent,
    HeroeComponent,
    ImagenPipe,
  
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports:[RouterModule]
})
export class HeroesModule { }
