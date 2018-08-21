import { ModeloTipoVehiculo } from './tipoVehiculo.model';

export class ModeloParqueaderoTarifa{

    public id: number;
	public tipoVehiculo: ModeloTipoVehiculo ;
	public costoHora: number;
	public costoDia: number;
	public horasCobroDia: number;

}