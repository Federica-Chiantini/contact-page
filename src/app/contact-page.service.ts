import { Injectable } from '@angular/core';
import { Itext } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ContactPageService {

  messages : Itext[] = []

  constructor() {}

  addMessage(body : Itext){
    this.messages.push(body)
  }

}
