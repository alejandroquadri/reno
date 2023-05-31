import { Component } from '@angular/core';
import { ICONS } from 'src/app/shared/copy';
import { HelperService, ServerDetectService } from 'src/app/shared/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  icons = ICONS;
  ig: any;
  fb: any;
  pin: any;

  constructor(
    private helperSc: HelperService,
    private serverDetSc: ServerDetectService
  ) {
    this.addIcons();
  }

  addIcons() {
    const isServer = this.serverDetSc.isServerSide();
    this.ig = this.helperSc.registerIcon(this.icons.ig, 'instagram', isServer);
    this.fb = this.helperSc.registerIcon(this.icons.fb, 'facebook', isServer);
    this.pin = this.helperSc.registerIcon(
      this.icons.pinterest,
      'pinterest',
      isServer
    );
  }
}
