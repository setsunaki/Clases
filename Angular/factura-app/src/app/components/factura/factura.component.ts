import { Component, OnInit, Output } from '@angular/core';
import { facturaService } from '../../services/factura.service';
import { Factura } from '../../models/factura';
import { FacturaViewComponent } from '../factura-view/factura-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [FacturaViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent,
    FormItemComponent
  ],
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit{

  factura!: Factura;

  constructor(private service: facturaService){ }

  ngOnInit(): void {
    this.factura = this.service.getFactura();
  }

  removeItem(id:number) {
    this.factura = this.service.remove(id);
  }

}
