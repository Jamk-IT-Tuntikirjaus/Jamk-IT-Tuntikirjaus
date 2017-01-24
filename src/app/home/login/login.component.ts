

    import { Component } from '@angular/core';//, ViewChild, ElementRef, Renderer } from '@angular/core';
    //declare var JQuert:any;

    @Component({
      selector: 'login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
    })
    export class LoginComponent {
      //@ViewChild('staticModal') login: ElementRef;
      constructor(/*private http:Http*/) {

      }
      onSubmit(username: string, password: string) {
        alert("username: " + username);
        alert("password: " + password);
        //$('#staticModal').modal('hide');
        //JQuery("#staticModal").modal("hide");
        //this.http.post("http://google.fi/", JSON.stringify(this.data)).subscribe();
        //loginmodal.hide();
        //this.renderer.invokeElementMethod(this.loginmodal.hide());
        //this.login.nativeElement.hide();
        //this.renderer.setElementStyle(this.login.nativeElement, "display", "none");

      }

    }
