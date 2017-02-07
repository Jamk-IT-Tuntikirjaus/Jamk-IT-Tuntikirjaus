/*
 * Navigation bar component
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaasBoxService } from './../../services/baasbox';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    constructor(private router: Router, private baasBoxService: BaasBoxService) { }

    // Logout user
    logout() {
        try {
            this.baasBoxService.logout()
            console.log("logged out")
        } catch (error) { alert(error) };
    }
}
