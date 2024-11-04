import { Injectable } from '@angular/core';
import { facturaData } from '../data/factura.data';
import { Factura } from '../models/factura.js';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class facturaService {

  private factura: Factura = facturaData;

  constructor() { }

  getFactura(): Factura {
    const total = this.calculateTotal();
    return {... this.factura, total};
  }

  remove(id: number): Factura {
    this.factura.items = this.factura.items.filter(item => item.id != id);
    const total = this.calculateTotal();

    return {... this.factura, total};
  }

  save(item: Item): Factura {
    this.factura.items = [... this.factura.items, item];

    const total = this.calculateTotal();

    return {... this.factura, total};

  }

  calculateTotal(){
    let total = 0;

    this.factura.items.forEach(item =>{
      total += (item.price * item.quantity);
    });
    return total;

    //return this.factura.items.reduce((total, item) => total +(item.price * item.quantity), 0);
  }
}
