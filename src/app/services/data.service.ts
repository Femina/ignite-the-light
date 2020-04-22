import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from '../models/project.model';

import  *  as  data  from  '../services/data.json';

@Injectable()
export class DataService {

  PROJECT_DATA:Project[] = (data  as  any).default;
  
  constructor() {}

  getJson()
  {
    return this.PROJECT_DATA;
  }

  getData(): Observable<Project[]> {
    return of<Project[]>(this.PROJECT_DATA);
  }

  addProject(data) {
    this.PROJECT_DATA.push(data);
  }

  deleteProject(index) {
    this.PROJECT_DATA = [
      ...this.PROJECT_DATA.slice(0, index),
      ...this.PROJECT_DATA.slice(index + 1),
    ];
  }

  sizeOfData() {
    return this.PROJECT_DATA.length;
  }
}


/**
 * @author Femina
 * This is our main data service. 
 * Due to simplicity & speedy purpose I used local json data with what I have built using our realtime website data.
 * But in real time scenario, this will be served from Backend ( REST API to fetch data )
 */

 
