import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MENU } from 'src/app/shared/copy';
import { SidenavService } from 'src/app/shared/services';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent {
  @Input() type: string;
  menu = MENU.local;

  constructor(private router: Router, private sidenavSc: SidenavService) {}

  closeDrawer() {
    this.sidenavSc.close();
  }
}
