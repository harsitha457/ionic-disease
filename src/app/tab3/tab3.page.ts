import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userinput') userinput: ElementRef;

  constructor() {}
  //loginUser(signinform: NgForm){
   // console.log(signinform);
    //console.log(signinform.value.emailAddressField);
    //console.log(signinform.value.passwordField);
    //console.log(signinform.value.Address);
  //}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void{}
  onUserAdded()
{ console.log(this.userinput);
  this.userAdded.emit(this.userinput.nativeElement.value);
}
}

