import { ModeloVehiculo } from './vehiculo.model';

export class ModeloParqueaderoRegistro{

    public id: number;
	public Vehiculo: ModeloVehiculo ;
	public fechaEntrada : Date;
	public fechaSalida: Date;
	public horasParqueo : number;
	public diasParqueadero : number;
	public horasParqueadero : number;
	public costoTotal: number;

}