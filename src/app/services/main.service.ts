import { Injectable } from '@angular/core';
import { arMovies } from "@models";
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
   
  getAllMovies(){
     return arMovies;
  }

  getMovieDetails(id:string){
    return arMovies.find((m)=>m.imdbID === id);
  }
}
