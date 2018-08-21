import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { ModeloVehiculo } from "../model/vehiculo.model";
import { ModeloCodeStatus } from "../model/codeStatus.model";
import { Observable } from "rxjs";
import{ MULTIPLE_CHOICES,CHECKPOINT } from '../HttpStatus';


@Injectable()
export class VehiculoService{

    API_ENDPOINT = 'http://localhost:8080/estacionamiento/vehiculos';
    
    constructor(private http:HttpClient){}
    
    public guardarVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloCodeStatus> {
        const header = new HttpHeaders({"Content-Type":"application/json"});
        return this.http.post<ModeloCodeStatus>(this.API_ENDPOINT,JSON.stringify(vehiculo),{headers:header});
    }

    public obtenerVehiculos() {               
        return this.http.get(this.API_ENDPOINT);
    }

    /*
    info:string = "Factura Generada"
    public salidaVehiculo(id: number, placa: string){
        
    this.http.delete(this.API_ENDPOINT+"/"+id+"/"+placa).subscribe((res) => {      
             
    }, error => {
            if(error.status == MULTIPLE_CHOICES){
                return error.message;
            }
            return 'Factura Generada';   
        });
   }
    */

   public salidaVehiculo(id: number, placa: string): Observable<ModeloCodeStatus>{
        
   return this.http.delete<ModeloCodeStatus>(this.API_ENDPOINT+"/"+id+"/"+placa);     
   }

}
