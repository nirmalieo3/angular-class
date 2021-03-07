import { InformaticaComponent } from './components/informatica/informatica.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { ProfiloComponent } from './components/Profilo/profilo/profilo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:HomeComponent
  },
  {
    path: 'Profile',
    pathMatch: 'full',
    component: ProfiloComponent
  },
  {
    path: 'informatica',
    pathMatch: 'full',
    component: InformaticaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
