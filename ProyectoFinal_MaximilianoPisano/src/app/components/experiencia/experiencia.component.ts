import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ImpExperienciaServiceService } from 'src/app/service/imp-experiencia-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  xp:Experiencia[] = [];
  constructor(private impExperienciaService: ImpExperienciaServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }
  }

  cargarExperiencia():void{
    this.impExperienciaService.lista().subscribe(
      data=> {this.xp = data;}
    )
  }

  delete(id?:number):void{
    if(id != undefined){
      this.impExperienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        },err => {
          alert("No se pudo borrar esa experiencia.");
        }
      )
    }
  }
  
}
