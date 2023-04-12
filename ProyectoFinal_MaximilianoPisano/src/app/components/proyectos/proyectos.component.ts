import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(private impProyectosService: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }
  }

  cargarProyectos():void{
    this.impProyectosService.lista().subscribe(
      data=> {this.proyectos = data;}
    )
  }

  delete(id?:number):void{
    if(id != undefined){
      this.impProyectosService.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        },err => {
          alert("No se pudo borrar ese proyecto.");
        }
      )
    }
  }

}
