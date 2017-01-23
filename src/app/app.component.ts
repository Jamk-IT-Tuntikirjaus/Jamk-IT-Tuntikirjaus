/*
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    template: `
    <nav>
      <div class="menu-mobile">
        <button md-icon-button [mdMenuTriggerFor]="menu">
          <md-icon>more_vert</md-icon>
        </button>

        <md-menu #menu="mdMenu">
          <button md-menu-item [routerLink]=" ['./calendar'] " routerLinkActive="active"> Calendar </button>
          <button md-menu-item [routerLink]=" ['./courselist']" routerLinkActive="active"> Course List </button>
          <button md-menu-item [routerLink]=" ['./'] " routerLinkActive="active"> Log out </button>
        </md-menu>
        <login> Log in </login>
      </div>
      <div class="menu-desktop">
        <a [routerLink]=" ['./calendar'] " routerLinkActive="active">
          Calendar
        </a>
        <a [routerLink]=" ['./courselist']" routerLinkActive="active">
          Course List
        </a>
        <a [routerLink]=" ['./']" routerLinkActive="active">
          Log Out
        </a>
        <login> Log in </login>
      </div>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
    <!--hammer-test>loading...</hammer-test>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer-->
  `
})
export class AppComponent implements OnInit {
    public angularclassLogo = 'assets/img/angularclass-avatar.png';
    public name = 'Angular 2 Webpack Starter';
    public url = 'https://twitter.com/AngularClass';

    constructor(
        public appState: AppState
    ) { }

    public ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
