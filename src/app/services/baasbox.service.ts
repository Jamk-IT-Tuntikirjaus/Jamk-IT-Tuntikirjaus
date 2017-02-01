/*
 * Service that provides common methods of commmunication with the BaasBox REST API
 */

/* Slang to use in BaasBox
Database contains array of lists that are called collections
Collection contains array of objects that are called documents
Collections are made by admins only
Document contains an object that we use to check times for certain lections
Document basic information are:
    Creation Date - The date document was created
    ID - Document id
    Author - Who made document
    Data - Documents inside information
    Actions - ???
*/

/* collections
    User
    Course
    Lection
    Record
        Record-Type: Teaching / Planning
        Date: Date

    //Group
        HoT: UserID
        Members: UserID array
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
    login(username: string, password: string) {
        let url = this.baseUrl + '/login'
        let body = {
            "username": username,
            "password": password,
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

    // Check that the user is logged in
    checkLogin() {
        let url = this.baseUrl + '/me'
        return this.http.get(url, { headers: this.getHeaders() }).toPromise()
    }
    // Login test user
    loginTest() {
        let url = this.baseUrl + '/login'
        let body = {
            "username": "user3",
            "password": "123",
            "appcode": this.appcode
        }
        return this.http.post(url, body).toPromise();

    }

    // Method for getting the required headers for calls that need them
    private getHeaders() {
        return new Headers({
            "X-BB-SESSION": localStorage.getItem('token'),
            "X-BAASBOX-APPCODE": this.appcode
        })
    }

    //BaasBox database commands

    //Create Document -- CourseID, lectures and check times
    CreateDocument(sessionID: string, data) {
        let url = this.baseUrl + '/document/Test';
        return this.http.post(url, data).toPromise();
    }
    getDocument(sessionID: string, documentID: string) {
        let url = this.baseUrl + '/document/Test/' + documentID;
        return this.http.get(url).toPromise();
    }
    //Modify Document -- Gives new and possibly changed data inside document. User might destroy his data...
    //Delete Document -- Removes whole course from database!!! Maybe we should add a hide option instead?


    /* Example JSON data for document
    {
      "CourseID": "AAAAAAAA-asd123",
      "Total": "200",
      "Lectures": [
        {
          "Date": "00/00/0000",
          "Time": "8:00 - 12:00"
        },
        {
          "Date": "00/00/0000",
          "Time": "13:00 - 15:00"
        }
      ],
      "Check": [
        {
          "Date": "00/00/0000",
          "Time": "8:00 - 12:00",
          "How-Long": "2.5",
          "Kept-Lesson": "true",
          "Message": "Haha!! Hard coded test to test json!"
        },
        {
          "Date": "00/00/0000",
          "Time": "13:00 - 15:00",
          "How-Long": "2.5",
          "Kept-Lesson": "false",
          "Message": "Haha!! Hard coded test to test json again!"
        }
      ]
    }
    */
    //BaasBox database tests
}
