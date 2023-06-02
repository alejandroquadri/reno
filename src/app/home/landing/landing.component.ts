import { Component } from '@angular/core';
import { HOME_COPY } from 'src/app/shared/copy';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  video = 'assets/videos/bg-video-desktop.webm';
  copy = HOME_COPY;
}
