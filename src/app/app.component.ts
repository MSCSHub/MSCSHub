import { Component, inject } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { Analytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FooterComponent, RouterModule, SidenavComponent, MatSidenavModule, NavbarComponent]
})
export class AppComponent {
  title = 'The Hub';

  constructor() {
    // Standalone bootstrap (provideAnalytics) does not auto-instantiate these,
    // and Angular DI is lazy, so we inject them here to start analytics tracking.
    // Injecting Analytics initializes getAnalytics(); the tracking services
    // auto-log screen_view (route changes) and user/auth events.
    inject(Analytics);
    inject(ScreenTrackingService);
    inject(UserTrackingService);
  }
}
