import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingService } from './message-bus/messaging.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[MessagingService]
})
export class FrameworkModule {
  
 }