import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { ImpSkillsServiceService } from 'src/app/service/imp-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private impSkillsService: ImpSkillsServiceService, private token: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.impSkillsService.lista().subscribe(
      data => {
        this.skills = data;
      }
    )
  }

  delete(id: number):void{
    if(id != undefined){
      this.impSkillsService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la Skill");
        }
      )
    }
  }
}
