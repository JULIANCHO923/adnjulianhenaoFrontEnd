import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModeloParqueaderoEspacioDisponible } from "../model/parqueaderoEspacio.model";

@Injectable()
export class EspacioService{

    API_ENDPOINT = 'http://localhost:8080/estacionamiento/espacio';
    
    constructor(private http:HttpClient){}
    
    public obtenerEspacios(idTipoVehiculo) {               
       return this.http.get(this.API_ENDPOINT+"/"+idTipoVehiculo);
    }

}
