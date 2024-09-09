//Importar los paquetes rutjs y moment
const Rut = require('rutjs');
const moment = require('moment');

//Crear rut valido, no valido
const rutValido = "17275399-K";
const rutInvalido = "12312322-2";

//Crear funcion que reciba un rut
const validarRut = (rut) => {

    //Verificar si el rut es valido o no
    let objRut = new Rut(rut);
    if (objRut.isValid) {
        console.log(`El rut es válido: ${rut}`);
        console.log(`El rut es válido: ${objRut.getNiceRut()}`);
        console.log("DV: " + objRut.checkDigit);
        console.log("este rut se validó con la fecha:" + moment().format('DD/MM/YYYY, h:mm:ss a'));

    } else {
        console.log(`El rut no es válido: ${rut}`);
        console.log(`El rut no es válido: ${objRut.getNiceRut()}`);
        console.log("DV: " + objRut.checkDigit);
        console.log("este rut se validó con la fecha:" + moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
}
//Ejecución de la función con ayuda de funciones externas
validarRut(rutValido);
validarRut(rutInvalido);




