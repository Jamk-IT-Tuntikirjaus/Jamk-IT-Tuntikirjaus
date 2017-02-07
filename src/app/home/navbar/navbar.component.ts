/*
 * Navigation bar component
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaasBoxService } from './../../services/baasbox';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    //providers: [BaasBoxService]
})
export class NavbarComponent {
    constructor(private router: Router, private baasBoxService: BaasBoxService) { }

    // Logout user
    logout() {
        this.baasBoxService.login("ase", "aas")
            .then(() => localStorage.removeItem('token'))
            .catch(error => alert(error))
        this.router.navigateByUrl('/login')
    }
}
