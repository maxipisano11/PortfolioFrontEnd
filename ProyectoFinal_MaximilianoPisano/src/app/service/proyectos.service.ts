import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectosURL = environment.URL + 'proyectos/'
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectosURL + 'lista');
  }

  public detail(id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectosURL + `detail/${id}`);
  }

  public save(proyectos: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.proyectosURL + 'create', proyectos);
  }

  public update(id:number, proyectos: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.proyectosURL + `update/${id}`, proyectos);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.proyectosURL + `delete/${id}`);
  }
}
