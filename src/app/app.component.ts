import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navigation/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FooterComponent, RouterModule, SidenavComponent, MatSidenavModule, NavbarComponent]
})
export class AppComponent {
  title = 'The Hub';
}
