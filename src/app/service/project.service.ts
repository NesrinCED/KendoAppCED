import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiURL="https://localhost:7176/api";
  private url='Project';
  constructor(private http : HttpClient) {  }
  
  public getAllProj(): Observable<Project[]>{
    return this.http.get<Project[]>(`${this.apiURL}/${this.url}`);
  }
  public getProject(id :string): Observable<Project>{
    //console.log("hekislash importanteeeeeeeee");
    return this.http.get<Project>(`${this.apiURL}/${this.url}/` + id);
  }
  public getProjectByName(name :string): Observable<Project>{
    return this.http.get<Project>(`${this.apiURL}/${this.url}/` + name);
  }
  public updateProject(id :string, project : Project): Observable<Project>{
    return this.http.put<Project>(`${this.apiURL}/${this.url}/` + id, project);
  }
  public CreateProject(addProjectRequest : Project): Observable<Project>{
    addProjectRequest.projectId='00000000-0000-0000-0000-000000000000';
    return this.http.post<Project>(`${this.apiURL}/${this.url}`,addProjectRequest);
  }
  public deleteProject(id :string): Observable<Project>{
    return this.http.delete<Project>(`${this.apiURL}/${this.url}/` + id);
  }
}
