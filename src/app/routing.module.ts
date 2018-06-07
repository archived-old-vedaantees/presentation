import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './host/about/about.component';

const routes = [
                     { path: '', component: AboutComponent  }
               ];


@NgModule({
            exports:[RouterModule],
            imports:[RouterModule.forRoot(routes)]
          })
export class RoutingModule 
{
  
}