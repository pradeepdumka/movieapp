import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe } from '@pipes';
import { MainService } from '@services';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  breakpoint!: number;
  movies: any = [];
  search:string='';
  constructor(private dataService: MainService, private router: Router,private filter:FilterPipe) {}
  ngOnInit() {
    console.log(this.dataService.getAllMovies());
    this.movies = this.dataService.getAllMovies();
    this.breakpoint = window.innerWidth <= 400 ? 1 : 4;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
  }

  getDetails(movie: any) {
    this.router.navigate(['movie/', movie.imdbID]);
  }

  searMoviesByTitle(val:string){
    console.log(val)
 
    this.movies = this.filter.transform(this.dataService.getAllMovies(),this.search)
  }
}
