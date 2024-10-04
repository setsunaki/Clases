import { Component, Input } from '@angular/core';

@Component({
  selector: 'factura-view',
  standalone: true,
  imports: [],
  templateUrl: './factura-view.component.html',
})
export class FacturaViewComponent {

  @Input() name!: string;
  @Input() id!: number;

}
