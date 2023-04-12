import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImpExperienciaService } from 'src/app/service/imp-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  periodoEx: string ='';
  nombreEx: string ='';
  descripcionEx: string = '';
  constructor(private impExperienciaService: ImpExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void{
    const expe = new Experiencia(this.periodoEx, this.nombreEx, this.descripcionEx);
    this.impExperienciaService.save(expe).subscribe(data=>{
      alert("Experiencia agregada");
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo añadir la experiencia");
      this.router.navigate(['']);
    })
  }

}
