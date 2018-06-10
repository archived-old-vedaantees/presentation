import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable()
export class MessagingService<T>
{
    private subject = new Subject<T>();

    sendMessage(message:T) 
    {
        this.subject.next(message);
    }

    clearMessage() 
    {
        this.subject.next();
    }

    getMessage(): Observable<T> 
    {
        return this.subject.asObservable();
    }
}