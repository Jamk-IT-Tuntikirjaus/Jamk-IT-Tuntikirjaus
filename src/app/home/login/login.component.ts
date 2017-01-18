

    import { Component } from '@angular/core';//, ViewChild, ElementRef, Renderer } from '@angular/core';
    //declare var JQuert:any;

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
      onSubmit(username: string, password: string) {
        this.data.username = username;
        this.data.password = password;
        alert("username: " + this.data.username);
        alert("password: " + this.data.password);
        //$('#staticModal').modal('hide');
        //JQuery("#staticModal").modal("hide");
        //this.http.post("http://google.fi/", JSON.stringify(this.data)).subscribe();
        //loginmodal.hide();
        //this.renderer.invokeElementMethod(this.loginmodal.hide());
        //this.login.nativeElement.hide();
        //this.renderer.setElementStyle(this.login.nativeElement, "display", "none");

      }

    }
