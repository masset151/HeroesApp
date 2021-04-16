import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

constructor(private dialogref:MatDialogRef<ConfirmarComponent>,
  @Inject(MAT_DIALOG_DATA) public data:Heroe) { }

borrar(){
this.dialogref.close(true)
}

cerrar(){
  this.dialogref.close();

}

 

  ngOnInit(): void {
   
  }

}
