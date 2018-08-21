import { Component  } from '@angular/core';
import { VehiculoService } from '../services/vehiculos.services';

import { ModeloVehiculo } from '../model/vehiculo.model';

@Component({
  selector: 'app-listaVehiculos',
  templateUrl: './listaVehiculos.component.html',
  })
export class ListaVehiculosComponent   {

vehiculos: Array<ModeloVehiculo>;

constructor(private vehiculosService: VehiculoService){
   this.vehiculosService.obtenerVehiculos().subscribe(
     v => { this.vehiculos = v as ModeloVehiculo[];
     });
}
  
  //initializing p to one
  p: number = 1;

}
