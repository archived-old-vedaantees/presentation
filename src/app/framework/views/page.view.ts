import { Component, OnInit, ViewEncapsulation, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagingService } from '../message-bus/messaging.service';

@Injectable()
export class PageView implements OnInit
{
    constructor(private activatedRoute: ActivatedRoute, private messagingService: MessagingService) { }

    ngOnInit() 
    {
        this.messagingService.sendData(this.activatedRoute.snapshot.data["title"]);
    }
  
}