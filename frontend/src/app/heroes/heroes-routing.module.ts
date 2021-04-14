import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'agregar',
        component:AgregarComponent
      },
      {
        path:'buscar',
        component:BuscarComponent
      },
      {
        path:'editar/:id',
        component:AgregarComponent
      },
      {
        path:'listado',
        component:ListadoComponent
      },
      {
        path:':id',
        component:HeroeComponent
      },
      
      {
        path:'**',
        component:ListadoComponent
      }


    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HeroesRoutingModule { }
