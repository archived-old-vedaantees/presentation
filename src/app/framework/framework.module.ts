import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingService } from './message-bus/messaging.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from '@vedaantees/framework/api/base-url-interceptor';
import { ApiService } from '@vedaantees/framework/api/api-service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[{
                provide: HTTP_INTERCEPTORS,
                useClass: BaseUrlInterceptor,
                multi: true,
             },
             MessagingService,
             ApiService]
})
export class FrameworkModule 
{
  
 }