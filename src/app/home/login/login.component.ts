

    import { Component } from '@angular/core';//, ViewChild, ElementRef, Renderer } from '@angular/core';

    @Component({
      selector: 'login',
      templateUrl: './login.component.html'
    })
    export class LoginModalComponent {
      //@ViewChild('staticModal') login: ElementRef;
      data;
      constructor(/*private http:Http*/) {
        this.data = {
          username: 'some name',
          password: 'some password',

        }

      }
      onSubmit() {
        //this.http.post("http://google.fi/", JSON.stringify(this.data)).subscribe();
        //loginmodal.hide();
        //this.renderer.invokeElementMethod(this.loginmodal.hide());
        //this.login.nativeElement.hide();
        //this.renderer.setElementStyle(this.login.nativeElement, "display", "none");
      }

    }
