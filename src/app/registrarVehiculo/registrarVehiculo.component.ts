import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { VehiculoService } from '../services/vehiculos.services';
import { ModeloVehiculo } from '../model/vehiculo.model';
import { TipoVehiculoService } from '../services/tipoVehiculo.services';
import { ModeloTipoVehiculo } from '../model/tipoVehiculo.model';
import{ OK,CREATED,CONTINUE, BAD_REQUEST } from '../HttpStatus';

@Component({
  selector: 'app-registrarVehiculo',
  templateUrl: './registrarVehiculo.component.html',
  })
export class RegistrarVehiculoComponent implements OnInit {
  
form: FormGroup;

vehiculo:ModeloVehiculo;
tipovehiculo:ModeloTipoVehiculo;
tipoVehiculos: Array<ModeloTipoVehiculo>;

private fracaso :string ;
private exito: string;

constructor(private tipoVehiculoService: TipoVehiculoService,private vehiculosService: VehiculoService, private formBuilder: FormBuilder){
  tipoVehiculoService.obtenerTipoVehiculos().subscribe(res => {
    this.tipoVehiculos = res as ModeloTipoVehiculo[];
   });
   this.vehiculo = new ModeloVehiculo();
   this.tipovehiculo = new ModeloTipoVehiculo();

}


showHide:boolean = false;
// Muestra o deja de mostrar el cilindraje
  SelectedChangeValue(value) {
    // El valor 2 equivale al id del tipoMoto
        if(value == '2'){
          this.showHide = true;
          // Habilita o deshabilita su validaciones
          this.form.controls.cilindraje.enable();
        }else{
          this.showHide = false;
          this.form.controls.cilindraje.disable();
        }
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      placa: [null, [Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
      tipoVehiculo: [null, [Validators.required]],
      cilindraje:  ['',[Validators.required,Validators.min(1)]]
    });

  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  
  onSubmit() {
    this.fracaso = null;
    this.exito = null;
    if (this.form.valid) {
      console.log('Formulario Valido');
      
      this.vehiculo.placa = this.form.get("placa").value;
      this.vehiculo.cilindraje = this.form.get("cilindraje").value;
      this.tipovehiculo.id = this.form.get("tipoVehiculo").value;
      this.vehiculo.tipoVehiculo = this.tipovehiculo;
    
      this.vehiculosService.guardarVehiculo(this.vehiculo).subscribe((res) => { 
       
      }, error => {
        console.log(error);
        if(error.status == CREATED){
          this.exito = error.error.text;
          this.form.reset();
        }else{
          this.fracaso = error.error.message;
        }
        
      }
    );

    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.form.reset();
  }
}
