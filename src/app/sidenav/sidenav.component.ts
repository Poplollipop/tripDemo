import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild('drawer')
  drawer!: MatDrawer;
  closeTimeout: any;

  openDrawer() {
    if (!this.drawer.opened) {
      this.drawer.open();
    }
  }

  closeDrawer() {
    if (this.drawer.opened) {
      this.drawer.close();
    }
  }

  closeDrawerWithDelay() {
    // 如果已經有正在執行的 setTimeout，先清除它
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }

    
    this.closeTimeout = setTimeout(() => {
      this.drawer.close();
    }, 2000);  // 延遲2秒執行
  }

}
