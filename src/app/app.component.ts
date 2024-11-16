import { Component } from '@angular/core';
import { ContactPageService } from './contact-page.service';
import { Itext } from './interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contact-page';

  text : string = ""

  form : FormGroup = new FormGroup({
    name : new FormControl("", [Validators.required, Validators.minLength(3)]),
    surname : new FormControl("", [Validators.required, Validators.minLength(4)]),
    email : new FormControl("", [Validators.required, Validators.email]),
    tel : new FormControl(undefined, [Validators.required, Validators.minLength(10)]),
    textarea : new FormControl("",[Validators.required, Validators.minLength(10)])
  })

  constructor(private service : ContactPageService){}

  submitMessage(){
    let body = this.form.value as unknown as Itext

    if(body){
      this.service.addMessage(body)
      this.form.reset()
      this.text = "Messaggio inviato correttamente"
    }else{
      this.text = "Messaggio NON inviato, riprova"
    }
  }
}
