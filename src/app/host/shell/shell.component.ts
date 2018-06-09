import { filter, map } from 'rxjs/operators';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { MessagingService } from 'app/framework';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'shell',
  templateUrl: './shell.component.html',
  styleUrls:  ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent implements OnInit 
{
    private subscription: Subscription;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private messagingService: MessagingService) 
    { 

    }

    title:string;
    
    ngOnInit() 
    {
        var that = this;
        this.checkIfThereIsOnlyOneShellInWholePage();
        this.mapAttributesToProperties();
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => that.onNavigationEnd(event));
        this.subscription = this.messagingService.getData().subscribe(x => { this.title = x; });
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
}