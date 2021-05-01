
class datos {
    constructor(numeroCorrida, descripcionServicio, empresa, descripcionEmpresa, listaDescuentos) {

        this._numeroCorrida = numeroCorrida;
        this._descripcionServicio = descripcionServicio;
        this._empresa = empresa;
        this._descripcionEmpresa = descripcionEmpresa;
        this._listaDescuentos = listaDescuentos;
    };

    tienePromocion() {
        
        return this._listaDescuentos === undefined ? false : true;
    }
};
export default datos;