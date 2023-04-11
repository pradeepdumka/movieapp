import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent ,ProductDetailsComponent} from '@pages';
import { NotFoundComponent} from '@components';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'movie/:id',component:ProductDetailsComponent
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
