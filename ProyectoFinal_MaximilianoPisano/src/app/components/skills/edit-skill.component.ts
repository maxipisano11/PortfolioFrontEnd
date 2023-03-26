import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { ImpSkillsServiceService } from 'src/app/service/imp-skills-service.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill : Skills = null;

  constructor(private impSkillsService: ImpSkillsServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.impSkillsService.detail(id).subscribe(
      data=> {
        this.skill = data;
      }, err =>{
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.impSkillsService.update(id, this.skill).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => { 
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
    )

  }
}
