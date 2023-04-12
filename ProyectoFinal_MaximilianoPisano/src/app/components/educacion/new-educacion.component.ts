import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ImpEducacionService} from 'src/app/service/imp-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  periodoEdu: string ='';
  nombreEdu: string ='';
  descripcionEdu: string = '';
  constructor(private impEducacionService: ImpEducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void{
    const expe = new Educacion(this.periodoEdu, this.nombreEdu, this.descripcionEdu);
    this.impEducacionService.save(expe).subscribe(data=>{
      alert("Educación agregada");
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo añadir la educación");
      this.router.navigate(['']);
    })
  }

}
