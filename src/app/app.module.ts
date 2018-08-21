import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppBootstrapModule } from './app-boostrap.module';
import {Routes, RouterModule} from '@angular/router';

/// Components
import { ListaVehiculosComponent } from './listaVehiculos/listaVehiculos.component';
import { RegistrosParqueaderoComponent } from './registrosParqueadero/registrosParqueadero.component';
import { RegistrarVehiculoComponent } from './registrarVehiculo/registrarVehiculo.component';
import { FacturaComponent } from './facturaParqueadero/factura.component';

// Services
import { VehiculoService } from './services/vehiculos.services';
import {TipoVehiculoService } from './services/tipoVehiculo.services';
import {RegistroService } from './services/registros.services';
import { TarifaService} from './services/tarifas.services';
import { EspacioService} from './services/espacio.services';
import { HttpClientModule } from "@angular/common/http";
// Validation Forms
import {CampoErrorComponent } from './campoError/campoError.component';
import { ReactiveFormsModule } from '@angular/forms';

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBicycle, fas, faBusAlt , faCarSide, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
// Add an icon to the library for convenient access in other components
library.add(fas, faBicycle, faBusAlt , faCarSide, faMotorcycle);


// Pagination
import {NgxPaginationModule} from 'ngx-pagination';


const appRoutes: Routes =[
  {path: '', component: RegistrarVehiculoComponent},
  {path: 'registrarVehiculo', component: RegistrarVehiculoComponent},
  {path: 'vehiculos', component: ListaVehiculosComponent},
  {path: 'registrosParqueadero', component: RegistrosParqueaderoComponent},
  {path: 'facturaParqueadero/:id/:info', component: FacturaComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CampoErrorComponent,
    ListaVehiculosComponent,
    RegistrarVehiculoComponent,
    RegistrosParqueaderoComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [VehiculoService, TipoVehiculoService, RegistroService ,TarifaService, EspacioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
