import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto : Proyecto = null;
  constructor(private impProyectosService: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.impProyectosService.detail(id).subscribe(
      data=> {
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.impProyectosService.update(id, this.proyecto).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => { 
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )

  }

}
