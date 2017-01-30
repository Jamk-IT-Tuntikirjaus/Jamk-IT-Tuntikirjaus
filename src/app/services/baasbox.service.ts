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

/* Datatable for lecture document
Collection for each user
Document for each courseid
Document-Data contains information about lectures and checked times
Lectures are parsed from website
Checks are added and modified using a website
Checks may not take data in when they were made or chenged

User: Collection                                Moo's collection
    CourseID: Document                          AIY56414-k45
        Creation Date
            //Document creation date, shows when the course was added
        ID
            //Document id
        Author
            //Author that made this document. Default baasbox user with certain priviledges!
        Data: Document-Data                     {...};
            Lectures: Lecture data array        Lectures: {...};
                Date: string                    Date: '00/00/0000';
                Time: string                    Time: '8:00 - 12:00';
            Check: Check data array             Check: {...};
                Date: string                    Date: '00/00/0000';
                Time: string                    Time: '8:00 - 12:00';
                How-Long: float/double/string   How-Long: 1.25;
                Kept-Lesson: boolean            Kept-Lesson: false;
                Message: string                 Message: 'Hello, I did this lesson, but maybe not in the room I thought I would';
                //Check-Time: string            //Check-Time: '00/00/0000 8:00 AM';
        Actions
            //Not sure what it does...

Mites käyttäjä huomioidaan?
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
