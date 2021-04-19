import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { LoginComponent } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


private BaseUrl:string = environment.baseUrl
private _auth:Auth | undefined

  constructor(private http:HttpClient) {
  
  }


   login(){
     return this.http.get<Auth>(`${this.BaseUrl}/usuarios/1`)
      .pipe(
        tap( auth=> this._auth = auth),
        tap( auth=> localStorage.setItem('id',auth.id)),
        
        )
     ;
     
   }

   verificaAutenticacion():Observable<boolean>{
     if(!localStorage.getItem('id')){
       return of(false)
     }


     return this.http.get<Auth>(`${this.BaseUrl}/usuarios/1`).pipe(

      map(auth => {
        this._auth = auth;
        return true
      })


     );
   }

   get auth():Auth{
     return {...this._auth!};
   }


   logout(){
  
     this._auth = undefined;
   }



}
