// Estructura if
const compararNumeros = () => {
    // Se definen las constantes para obtener los valores de los inputs desde el archivo html
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    // Se define la constante por la cual se devolverá el número mayor en el archivo html
    const salida = document.getElementById('salida-comparar');

    // Comparar los números y mostrar el resultado en el elemento de salida
    if (num1 > num2) {
        salida.textContent = `El número mayor es: ${num1}`;
    } else if (num2 > num1) {
        salida.textContent = `El número mayor es: ${num2}`;
    } else {
        salida.textContent = 'Ambos números son iguales';
    }
};

// Estructura switch
const mostrarMes = () => {
    // Se define la constante para obtner los valores de los inputs desde el archivo html
    // y se los convierte a float
    const mes = parseInt(document.getElementById('mes').value);
    // Se define la constante por la cual se devolverá el nombre del mes en el archivo html
    const salida = document.getElementById('salida-switch');
    let nombreMes;

    // Determinar el nombre del mes según el número ingresado
    switch (mes) {
        case 1:
            nombreMes = 'Enero';
            break;
        case 2:
            nombreMes = 'Febrero';
            break;
        case 3:
            nombreMes = 'Marzo';
            break;
        case 4:
            nombreMes = 'Abril';
            break;
        case 5:
            nombreMes = 'Mayo';
            break;
        case 6:
            nombreMes = 'Junio';
            break;
        case 7:
            nombreMes = 'Julio';
            break;
        case 8:
            nombreMes = 'Agosto';
            break;
        case 9:
            nombreMes = 'Septiembre';
            break;
        case 10:
            nombreMes = 'Octubre';
            break;
        case 11:
            nombreMes = 'Noviembre';
            break;
        case 12:
            nombreMes = 'Diciembre';
            break;
        default:
            nombreMes = null;
    }

    // Mostrar el nombre del mes o un mensaje de error si el número no concuerda con 
    // ninguno de los establecidos en el switch
    if (nombreMes) {
        salida.textContent = `El mes correspondiente es: ${nombreMes}`;
    } else {
        salida.textContent = 'Ingresa un número entre 1 y 12';
    }
};

// Gestión de arrays
const nombresArray = [];

const agregarNombre = () => {
    // Se define la constante para obtener el nombre ingresado en el input desde el archivo html
    const nombre = document.getElementById('nombre').value;
    // Se define la constante por la cual se devolverá la lista de nombres en el archivo html
    const salida = document.getElementById('salida-array');

    // Agregar el nombre al array si no está vacío y actualizar la lista en el HTML
    if (nombre) {
        nombresArray.push(nombre);
        document.getElementById('nombre').value = ''; // Limpiar el campo del input
        salida.innerHTML = '<ul>' + nombresArray.map(n => `<li>${n}</li>`).join('') + '</ul>';
    } else {
        alert('Debes ingresar un nombre.');
    }
};