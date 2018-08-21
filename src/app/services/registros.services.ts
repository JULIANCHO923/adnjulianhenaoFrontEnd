import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModeloParqueaderoRegistro } from "../model/parqueaderoRegistro.model";

@Injectable()
export class RegistroService{

    API_ENDPOINT = 'http://localhost:8080/estacionamiento/registros';
    

    constructor(private http:HttpClient){}

    public obtenerRegistrosPorId(idRegistro:number) {               
       return this.http.get(this.API_ENDPOINT+'/reciente/'+idRegistro);
    }

    public obtenerRegistrosAnteriores() {               
        return this.http.get(this.API_ENDPOINT+'/antes');
     }

     public obtenerRegistrosPorVehiculosSinSalir(idTipoVehiculo) {               
        return this.http.get(this.API_ENDPOINT+'/'+idTipoVehiculo);
      
     }

}
