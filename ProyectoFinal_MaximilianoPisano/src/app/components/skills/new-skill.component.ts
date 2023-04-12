import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImpSkillsServiceService } from 'src/app/service/imp-skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string ='';
  porcentaje: number;
  constructor(private impSkillsService: ImpSkillsServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.impSkillsService.save(skill).subscribe(data=>{
      alert("Experiencia agregada");
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo añadir la experiencia");
      this.router.navigate(['']);
    })
  }
}
