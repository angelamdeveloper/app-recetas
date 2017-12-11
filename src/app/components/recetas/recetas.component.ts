import { Component, OnInit } from '@angular/core';
import { RecetasService,Receta } from '../../services/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html'
})
export class RecetasComponent implements OnInit {
	recetas:Receta[] = [];
  constructor( private _recetasService:RecetasService ) { }

  ngOnInit() {
  	this.recetas=this._recetasService.getRecetas();
  }


}
