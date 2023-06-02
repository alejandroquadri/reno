import { Component } from '@angular/core';

import { DESIGN_COPY } from '../../shared/copy';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss'],
})
export class DesignsComponent {
  copy = DESIGN_COPY;

  constructor() {}
}
