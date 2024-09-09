
## 1. ¿Qué es npm?

**npm** (Node Package Manager) es el gestor de paquetes para Node.js...

### ¿Qué significa `^` en las versiones de npm?

Cuando vemos algo como `"rut.js": "^2.0.1"` en el archivo `package.json`, el símbolo `^` indica que **npm** puede instalar versiones **compatibles** o que no rompan la compatibilidad con la versión especificada.

- Por ejemplo, si tienes `"^2.0.1"`, npm puede instalar cualquier versión superior a `2.0.1` pero menor a `3.0.0`. Las actualizaciones que se permiten son las "minor" (por ejemplo, `2.1.0`) o las "patch" (por ejemplo, `2.0.2`).
- Si no se usa el símbolo `^`, npm instalaría únicamente la versión exacta especificada.

Este comportamiento asegura que tu proyecto pueda beneficiarse de actualizaciones menores y parches, sin el riesgo de romper el código con actualizaciones que introduzcan cambios importantes.

---

### Tabla de Comandos Básicos de npm:

| Comando                         | Descripción                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| `npm init`                       | Inicializa un nuevo proyecto Node.js y crea un archivo `package.json`.       |
| `npm install [paquete]`          | Instala un paquete en el proyecto actual y lo añade como dependencia.        |
| `npm install --save-dev [paquete]` | Instala un paquete como dependencia de desarrollo.                         |
| `npm install -g [paquete]`       | Instala un paquete de manera global en tu sistema.                          |
| `npm uninstall [paquete]`        | Desinstala un paquete del proyecto y lo elimina de las dependencias.         |
| `npm run [script]`               | Ejecuta un script definido en `package.json`.                               |
| `npm update`                     | Actualiza todas las dependencias a sus últimas versiones compatibles.        |

> **Nota**: Puedes encontrar más información sobre **npm** y su documentación oficial en [https://docs.npmjs.com](https://docs.npmjs.com).

---

## 4. Validación de RUT con rut.js y moment.js (Ejecución desde la Consola)

En este ejercicio, validaremos el RUT y mostraremos la fecha y hora actuales usando **rut.js** y **moment.js**, pero en lugar de un servidor HTTP, lo ejecutaremos directamente desde la consola de Node.js.

### Código del Programa con Funciones Flecha

Crea el archivo `index.js` con el siguiente contenido:

```javascript
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





```

### Cómo Ejecutar el Script en la Consola

1. Instala las dependencias necesarias si no lo has hecho:

   ```bash
   npm install rut.js moment
   ```

2. Ejecuta el script desde la consola de Node.js, pasando el RUT que deseas validar como argumento. Por ejemplo:

   ```bash
   node index.js 12345678-5
   ```

   Esto debería imprimir en la consola si el RUT es válido o no, junto con la fecha y hora actuales.

   **Ejemplo de salida:**

   ```
   El RUT 12.345.678-5 es válido. Validado en: 2024-09-09 12:34:56
   ```

3. Si no se pasa un RUT, el programa mostrará un mensaje indicando que se debe proporcionar uno:

   ```
   Por favor, proporciona un RUT como argumento al ejecutar el script.
   ```

---

## 5. Resumen

En esta clase, cubrimos los siguientes temas:

1. **npm**: Aprendimos cómo gestionar dependencias y módulos en proyectos Node.js.
2. **Símbolo `^` en versiones de npm**: Vimos cómo el símbolo `^` permite instalar actualizaciones menores sin romper la compatibilidad.
3. **rut.js**: Validamos un RUT chileno usando esta librería.
4. **moment.js**: Mostramos la fecha y hora actuales cuando se realiza la validación del RUT.
5. **Ejecución en consola**: Creamos un programa ejecutable desde la consola que acepta un RUT como argumento y responde con su validez.
