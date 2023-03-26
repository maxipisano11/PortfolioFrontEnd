import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  persona: Persona = null;

  constructor( 
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router : Router,
    public imageService: ImageService
  ) {  }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data=> {
        this.persona = data;
      }, err =>{
        alert("Error al modificar los datos personales");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id= this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => { 
        alert("Error al modificar datos personales");
        this.router.navigate(['']);
      }
    )

  }

  uploadImage($event : any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "fotoPerfil_" + id;
    this.imageService.uploadImage($event, name);
  }
}
