import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RoutingModule } from '../routing.module';
import { FrameworkModule } from '../framework/framework.module';
import { AboutComponent } from './about/about.component';
import { LocalSettingsComponent } from './local-settings/local-settings.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { 
          MatButtonModule,
          MatCardModule,
          MatProgressBarModule,
          MatRippleModule,
          MatSidenavModule,
          MatIconModule,
          MatToolbarModule,
          MatFormFieldModule,
          MatInputModule
      } from '@angular/material';

@NgModule({
  imports:      [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    HttpClientModule,                    
                    RoutingModule,
                    FrameworkModule,
                    FormsModule,                                        
                    FlexLayoutModule,
                    MatButtonModule,
                    MatCardModule,
                    MatProgressBarModule,
                    MatRippleModule,
                    MatSidenavModule,
                    MatIconModule,
                    MatToolbarModule,
                    MatFormFieldModule,
                    MatInputModule
                ],
  declarations: [ShellComponent, AboutComponent, LocalSettingsComponent],
  bootstrap:    [ShellComponent]
})
export class HostModule 
{ 
  
}