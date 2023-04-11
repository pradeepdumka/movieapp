import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '@services';
import {FilterPipe} from '@pipes'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  imdbId=''
  movieDetails:any
  constructor(private activatedRoute : ActivatedRoute ,private dataService:MainService ,private filter:FilterPipe){
    this.activatedRoute.params.subscribe((product=>{
      console.log(product)
      this.imdbId = product['id']
    }))
  }


  ngOnInit() {
   this.movieDetails =  this.dataService.getMovieDetails(this.imdbId);

   
  }
}
