import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ImpEducacionServiceService } from 'src/app/service/imp-educacion-service.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  edu : Educacion = null;

  constructor(private impEducacionService: ImpEducacionServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.impEducacionService.detail(id).subscribe(
      data=> {
        this.edu = data;
      }, err =>{
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.impEducacionService.update(id, this.edu).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => { 
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )

  }

}
