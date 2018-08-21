import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModeloTipoVehiculo } from "../model/tipoVehiculo.model";

@Injectable()
export class TipoVehiculoService{

    API_ENDPOINT = 'http://localhost:8080/estacionamiento/tipo_vehiculo';
    
    constructor(private http:HttpClient){}

    public obtenerTipoVehiculos() {               
      return this.http.get(this.API_ENDPOINT);
    }

}
