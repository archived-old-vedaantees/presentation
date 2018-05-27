import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,MatButtonModule,MatSidenavModule,MatIconModule } from '@angular/material';
import 'hammerjs';


@NgModule({
  imports: [
              CommonModule,
              BrowserModule,
              BrowserAnimationsModule,
              FlexLayoutModule,
              MatToolbarModule,
              MatButtonModule,
              MatSidenavModule,
              MatIconModule            
           ],
  declarations: [ShellComponent],
  bootstrap:[ShellComponent]
})
export class RuntimeModule 
{ 

}