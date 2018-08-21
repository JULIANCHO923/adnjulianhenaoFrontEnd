import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModeloParqueaderoTarifa } from "../model/parqueaderoTarifa.model";

@Injectable()
export class TarifaService{

    API_ENDPOINT = 'http://localhost:8080/estacionamiento/tarifa';
    
    constructor(private http:HttpClient){}

    
    public obtenerTarifas() {               
       return this.http.get(this.API_ENDPOINT);
    }

}
