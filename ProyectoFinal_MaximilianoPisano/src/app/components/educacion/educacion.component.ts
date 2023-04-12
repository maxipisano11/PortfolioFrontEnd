import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { ImpEducacionService } from 'src/app/service/imp-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu:Educacion[] = [];
  constructor(private impEducacionService: ImpEducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }
  }

  cargarEducacion():void{
    this.impEducacionService.lista().subscribe(
      data=> {this.edu = data;}
    )
  }

  delete(id?:number):void{
    if(id != undefined){
      this.impEducacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        },err => {
          alert("No se pudo borrar esa educación.");
        }
      )
    }
  }

}
