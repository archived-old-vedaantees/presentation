import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RoutingModule } from '../routing.module';
import { 
          MatButtonModule,
          MatCardModule,
          MatProgressBarModule,
          MatRippleModule,
          MatSidenavModule,
          MatIconModule,
          MatToolbarModule
      } from '@angular/material';
import { AboutComponent } from './about/about.component';


@NgModule({
  imports:      [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    RoutingModule,
                    FlexLayoutModule,
                    MatButtonModule,
                    MatCardModule,
                    MatProgressBarModule,
                    MatRippleModule,
                    MatSidenavModule,
                    MatIconModule,
                    MatToolbarModule                                                 
                ],
  declarations: [ShellComponent, AboutComponent],
  bootstrap:    [ShellComponent]
})
export class HostModule 
{ 
  
}