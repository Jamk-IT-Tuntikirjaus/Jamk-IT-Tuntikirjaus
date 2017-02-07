/*
 * Service that provides common methods of commmunication with the BaasBox REST API
 */

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// Add library to convert observable to promise
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaasBoxService {

    constructor(private http: Http) { }


    // Where BaasBox is located. Address of production server should be hidden from GitHub.
    baseUrl = 'http://0.0.0.0:9000'
    appcode = '1234567890'


    // Login user
    login(username: string, password: string) {
        console.log("baasboxservice")
        let url = this.baseUrl + '/login'
        let body = {
            "username": username,
            "password": password,
            "appcode": this.appcode
        }
        return this.http.post(url, body).toPromise()
    }

    // Login test user
    loginTest() {
        let url = this.baseUrl + '/plugin/esatime.login'
        let body = {
            "username": "user",
            "password": "password",
            "appcode": this.appcode
        }
        return this.http.post(url, body).toPromise()
    }

    // Logout user
    logout() {
        let url = this.baseUrl + '/logout'
        console.log("loggin out")
        return this.http.post(url, {}, { headers: this.getHeaders() }).toPromise()
    }
    // Method for getting the required headers for calls that need them
    private getHeaders() {
        return new Headers({
            "X-BB-SESSION": localStorage.getItem('token'),
            "X-BAASBOX-APPCODE": this.appcode
        })

    }



}
