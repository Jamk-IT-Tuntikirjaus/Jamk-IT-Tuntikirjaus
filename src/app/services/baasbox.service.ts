/*
 * Service that provides common methods of commmunication with the BaasBox REST API
 */

/* Slang to use in BaasBox
Database contains array of lists that are called collections
Collection contains array of objects that are called documents
Document contains an object that we use to check times for certain lections
Document basic information are:
    Creation Date - The date document was created
    ID - Document id
    Author - Who made document
    Data - Documents inside information
    Actions - ???
*/

/* What we use baasbox service for:
    Login
    Database for lectures check times
    Database for parsed lectures that are taken from elsewhere
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

    //Baasbox login check
    // Login user
    login (username: string, password: string) {
        let url = this.baseUrl + '/login'
        let body = {
          "username": username,
          "password": password,
          "appcode": this.appcode
        }
        return this.http.post(url, body).toPromise()
    }

    // Login test user
      loginTest () {
        let url = this.baseUrl + '/login'
        let body = {
          "username": "user3",
          "password": "123",
          "appcode": this.appcode
        }
        return this.http.post(url, body).toPromise();
    }

    //BaasBox database commands
    //Create Collection -- Users own Collection
    //Delete Collection -- Remove users data, but we use BaasBox to do that as an admin panel.
    //Create Document -- CourseID, lectures and check times
    //Modify Document -- Gives new and possibly changed data inside document. User might destroy his data...
    //Delete Document -- Removes whole course from database!!! Maybe we should add a hide option instead?

  }
