import { Injectable } from '@angular/core';

@Injectable()
export class RecetasService {

  private recetas:Receta[] = [
      {
        nombre: "Nombre receta 1",
        descripcion: "Descripcion de la receta 1",
        img: "assets/img/icon.png",
        tiempo: "tiempo en minutos",
        tipo:"dulce o salado"
      },
      {
        nombre: "Nombre receta 1",
        descripcion: "Descripcion de la receta 1",
        img: "assets/img/icon.png",
        tiempo: "tiempo en minutos",
        tipo:"dulce o salado"
      }
    ];
	constructor() {
		console.log("Servicio listo para usar!!")
	}

	getRecetas():Receta[]{
    	return this.recetas;
  }

  //getReceta( idx: string ){
    //return this.heroes[idx];
  //}

}
export interface Receta{
  nombre: string;
  descripcion: string;
  img: string;
  tiempo: string;
  tipo: string;

}
