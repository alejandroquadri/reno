import { SidenavService } from 'src/app/shared/services';
import { MatSidenav } from '@angular/material/sidenav';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  id$: Observable<any>;

  constructor(
    private sidenavSc: SidenavService,
    private route: ActivatedRoute,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.getId();
    // this.setSeo();
  }

  ngAfterViewInit(): void {
    this.sidenavSc.setSidenav(this.sidenav);
  }

  getId(): Observable<any> {
    return (this.id$ = this.route.paramMap.pipe(
      tap(param => {
        const id = param.get('id');
        if (id) {
          console.log(id);
          setTimeout(() => {
            this.scrollTo(id);
          }, 50);
        }
      })
    ));
  }

  scrollTo(id: string) {
    this.scroller.setOffset([0, 0]);
    this.scroller.scrollToAnchor(id);
  }
}
