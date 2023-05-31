import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  title = 'reno';

  constructor(private sidenavSc: SidenavService) {}

  ngAfterViewInit(): void {
    this.sidenavSc.setSidenav(this.sidenav);
  }
}
