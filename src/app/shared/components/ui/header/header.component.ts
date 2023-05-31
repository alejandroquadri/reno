import { Component } from '@angular/core';
import { SidenavService } from 'src/app/shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private sidenavSc: SidenavService) {}

  openSide(): void {
    this.sidenavSc.toggle();
  }
}
