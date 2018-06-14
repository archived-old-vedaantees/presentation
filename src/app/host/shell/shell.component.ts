import { filter, map } from 'rxjs/operators';
import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { MessagingService } from '@vedaantees/framework/message-bus/messaging.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { PageSetting } from '@vedaantees/framework/views/page.view';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'shell',
  templateUrl: './shell.component.html',
  styleUrls:  ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent implements OnInit, OnDestroy
{
    private subscription: Subscription;

    constructor(private router: Router, 
                private activatedRoute: ActivatedRoute, 
                private pageSettingMessagingService: MessagingService<PageSetting>,
                private http: HttpClient) 
    { 

    }

    title:string;
    module:string;
    
    ngOnInit() 
    {
        var that = this;
        this.checkIfThereIsOnlyOneShellInWholePage();
        this.mapAttributesToProperties();
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => that.onNavigationEnd(event));
        this.subscription = this.pageSettingMessagingService.getMessage().subscribe(x => { this.title = x.title; this.module = x.module });
     }

    private onNavigationEnd(route:NavigationEnd)
    {
        // var that = this;
        // debugger;
        // route.snapshot.data.pipe(map(data => data)).subscribe(title => { that.title = title;});
    }

    private mapAttributesToProperties() {
        let attrs = document.getElementsByTagName("shell")[0].attributes;
        Object.keys(attrs).forEach(key => { this[attrs[key].name] = attrs[key].value; });
    }

    private checkIfThereIsOnlyOneShellInWholePage():void
    {
        if(document.getElementsByTagName("shell").length!=1)
          throw "Only one shell is allowed per page.";
    }

    ngOnDestroy() 
    {
        this.subscription.unsubscribe();
    }
}