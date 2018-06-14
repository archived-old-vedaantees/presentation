import { Component, OnInit } from '@angular/core';
import { ApiService } from '@vedaantees/framework/api/api-service';

@Component({
  selector: 'host-local-settings',
  templateUrl: './local-settings.component.html',
  styleUrls: ['./local-settings.component.scss']
})
export class LocalSettingsComponent implements OnInit 
{
    singleSignOn: string;
    sqlConnectionString:string;

    noSqlUrl:string;
    noSqlUsername: string;
    noSqlPassword: string;

    graphUrl:string;
    graphUsername:string;
    graphPassword:string;

    busQueueUrl:string;
    busQueueUsername:string;
    busQueuePassword:string;

    constructor(private apiService:ApiService) 
    { 

    }

    ngOnInit() 
    {
    
    }

    saveChanges()  
    {
        this.apiService.post("host/update-settings", this);      
    }
}
