import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkActive, RouterLink, RouterOutlet, Router } from '@angular/router';



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

constructor(
  private router:Router
){}

googlemap() {
  window.open('https://www.google.com.tw/maps/', '_blank');
}



}
