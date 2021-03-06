import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';
import { Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [` 
      img{
        width:100%;
        border-radius:5px;
      }

  `]
})
export class AgregarComponent implements OnInit {


  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },

    {
      id: 'Marvel',
      desc: 'Marvel - Comics'
    },


  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',

  };

  constructor(private heroesService: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  guardar() {
    if (this.heroe.superhero.trim().length == 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe).subscribe(heroe => console.log('Actualizando', heroe))
      this.mostrarSnackBarr('Registro Editado');
      this.router.navigate(['/heroes/listado']);
    } else {
      this.heroesService.agregarHeroe(this.heroe).subscribe(resp => {
        this.router.navigate(['/heroes/editar', resp.id]);
        this.mostrarSnackBarr('Registro Creado');
      })



    }


  }

  borrarHeroe() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe((result => {
      if (result) {
        this.heroesService.borrarHeroe(this.heroe.id!).subscribe(resp => {
        this.router.navigate(['/heroes'])
        })
      }
    }));

    /*this.heroesService.borrarHeroe(this.heroe.id!).subscribe(resp =>{
      this.router.navigate(['/heroes'])
    }) */
  }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activateRoute.params.pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)))
      .subscribe(heroe => this.heroe = heroe)
  }

  mostrarSnackBarr(mensaje: string) {
    this.snackBar.open(mensaje, 'Correcto', {
      duration: 2500,
    });
  }

}
