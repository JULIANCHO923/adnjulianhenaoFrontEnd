import { ModeloTipoVehiculo } from './tipoVehiculo.model';

export class ModeloParqueaderoEspacioDisponible{

    public id: number;
	public tipoVehiculo: ModeloTipoVehiculo ;
	public limiteEspacio: number;
	public espacioActual: number;

}