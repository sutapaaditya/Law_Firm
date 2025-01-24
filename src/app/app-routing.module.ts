import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { DetailsComponent } from '../app/components/details/details.component';
import { CoursesComponent } from '../app/components/courses/courses.component';
import { AboutComponent } from '../app/components/about/about.component';
import { HeaderComponent } from '../app/components/header/header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'courses/:id', component: DetailsComponent } // Route for details page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
