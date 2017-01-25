

import { Component } from '@angular/core';//, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { BaasBoxService } from './../../services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private router: Router, private baasBoxService: BaasBoxService) { }

    login(username: string, password: string) {
      console.log("login component")
        this.baasBoxService.login(username, password)
            .then(response => {
                // Get session token
                let token = response.json().data['X-BB-SESSION']
                // TODO: Possibly handle storing in a service
                //localStorage.setItem("token", token)
                //this.router.navigateByUrl('/status')
                console.log("login succesful")
            })
            .catch(error => alert(error))
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
