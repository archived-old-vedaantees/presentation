import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { PageView } from '@vedaantees/framework/views/page.view';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends PageView 
{

}
