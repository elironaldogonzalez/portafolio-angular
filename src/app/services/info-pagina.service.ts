import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../pages/interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor( private http: HttpClient) { 
    console.log("servicio de infoPagina cargado");

      //Leer archivo JSON
      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) =>{

        this.cargada = true;
        this.info = resp;
        console.log(resp);

      });
  }

}
