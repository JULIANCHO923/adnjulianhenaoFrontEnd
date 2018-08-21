import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloParqueaderoRegistro } from '../model/parqueaderoRegistro.model';
import { RegistroService } from '../services/registros.services';
import { EspacioService } from '../services/espacio.services';
import { ModeloParqueaderoEspacioDisponible } from '../model/parqueaderoEspacio.model';
import{MULTIPLE_CHOICES } from '../HttpStatus';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { VehiculoService } from '../services/vehiculos.services';



@Component({
  selector: 'app-registrosParqueadero',
  templateUrl: './registrosParqueadero.component.html',
  })

  
export class RegistrosParqueaderoComponent {
  
  registrosAnteriores: Array<ModeloParqueaderoRegistro>;
  registrosAutos: Array<ModeloParqueaderoRegistro>;
  registrosMotos: Array<ModeloParqueaderoRegistro>;
  espacioAutos: ModeloParqueaderoEspacioDisponible;
  espacioMotos: ModeloParqueaderoEspacioDisponible;


  registroActual: ModeloParqueaderoRegistro;

  p: number = 1;
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;

  auto: number = 1;
  moto: number = 2;

info:string='';

constructor(private vehiculoService:VehiculoService, private registroService: RegistroService, private espacioService: EspacioService, private modalService: BsModalService, private router: Router){
  
  
   this.registroActual = new ModeloParqueaderoRegistro();
 }


 ngOnInit() {
  this.espacioService.obtenerEspacios(this.auto).subscribe(res => {
    this.espacioAutos = res as ModeloParqueaderoEspacioDisponible;
   });

  this.registroService.obtenerRegistrosPorVehiculosSinSalir(this.auto).subscribe(res => {
    this.registrosAutos = res as ModeloParqueaderoRegistro[];
   });

   this.espacioService.obtenerEspacios(this.moto).subscribe(res => {
    this.espacioMotos = res as ModeloParqueaderoEspacioDisponible;
   });

   this.registroService.obtenerRegistrosPorVehiculosSinSalir(this.moto).subscribe(res => {
    this.registrosMotos = res as ModeloParqueaderoRegistro[];
   });
  
   this.registroService.obtenerRegistrosAnteriores().subscribe(res => {
    this.registrosAnteriores = res as ModeloParqueaderoRegistro[];
   });

}

     modalRef: BsModalRef;
    idModal = "";
    placaModal = "";
    openModal(template: TemplateRef<any>, id, placa) {
        this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
        this.idModal = id;
        this.placaModal = placa;
    }

salidaVehiculo(template: TemplateRef<any>, id:number, placa:string){
      
    this.vehiculoService.salidaVehiculo(id,placa).subscribe((res) => {      
             this.info = 'Factura Generada';
    }, error => {
          console.log(error);
            if(error.status == MULTIPLE_CHOICES){
                this.info = error.error.message;
            } else{
              this.info = 'Factura Generada';
            }
        });
   
 
    this.modalRef.hide();
    this.openModal(template, id, placa);
}

  irAFactura(id){
    this.modalRef.hide();
    this.router.navigate(['/facturaParqueadero/', id, this.info  ]);
  }
}
