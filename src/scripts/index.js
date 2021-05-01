//array iteraciones
import corridasWeb from './constantes.js';
import datos from './modulo.js';

function buscar(descripcion, empresa = 'AEF') {
    corridasWeb.forEach(function (corridasWeb) {
        
        if (corridasWeb.empresa == empresa && corridasWeb.descripcionServicio == descripcion) {
            
            let datoEncon = new datos(corridasWeb.numeroCorrida,corridasWeb.descripcionServicio,corridasWeb.empresa,corridasWeb.descripcionEmpresa,corridasWeb.listaDescuentos);                                
            console.log(datoEncon);
            console.log(`Tiene promocion ? ${datoEncon.tienePromocion() ? 'si' : 'No'}`);  
        }
        
        
    });
}
buscar("PRIMERA SELECT","TCH");
