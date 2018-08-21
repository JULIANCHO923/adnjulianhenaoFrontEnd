import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import{ OK,CREATED,CONTINUE, BAD_REQUEST } from '../HttpStatus';

import { ModeloParqueaderoRegistro } from '../model/parqueaderoRegistro.model';
import { RegistroService } from '../services/registros.services';
import { VehiculoService } from '../services/vehiculos.services';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  })

  
export class FacturaComponent {

  registroActual: ModeloParqueaderoRegistro;
  info:string;
  idRegistro:number;
  placa:string;  

constructor(private route: ActivatedRoute,private vehiculoService:VehiculoService ,private registroService: RegistroService, private modalService: BsModalService){
    
    this.info = '';
    this.idRegistro = this.route.snapshot.params['id'];
    this.info = this.route.snapshot.params['info'];
    
  
  this.registroService.obtenerRegistrosPorId(this.idRegistro).subscribe(res => {
      this.registroActual = res as ModeloParqueaderoRegistro;
  });

}

}
