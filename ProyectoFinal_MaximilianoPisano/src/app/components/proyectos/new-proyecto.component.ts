import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  periodo:string = '';
  nombre:string = '';
  descripcion:string = '';
  enlace:string = '';

  constructor(private impProyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const expe = new Proyectos(this.periodo, this.nombre, this.descripcion, this.enlace);
    this.impProyectosService.save(expe).subscribe(data=>{
      alert("Proyecto agregado");
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo añadir el proyecto");
      this.router.navigate(['']);
    })
  }

}

 
