import { Injectable } from '@angular/core';
import { facturaData } from '../data/factura.data';
import { Factura } from '../models/factura.js';

@Injectable({
  providedIn: 'root'
})
export class facturaService {

  private factura: Factura = facturaData;

  constructor() { }

  getFactura(): Factura {
    return this.factura;
  }
}
