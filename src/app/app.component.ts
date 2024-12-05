import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { SearchComponent } from "./search/search.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidenavComponent,
    SearchComponent,
    RouterLinkActive,
    RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tripDemo';
}
