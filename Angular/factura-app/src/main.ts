import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FacturaComponent } from './app/components/factura/factura.component';

bootstrapApplication(FacturaComponent, appConfig)
  .catch((err) => console.error(err));
