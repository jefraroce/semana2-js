// Clase Date

/*
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
*/

function calcularEdad() {
  var inputDate = document.querySelector('#fecha-de-nacimiento')
  var divSalida = document.querySelector('#salida')

  var fechaDeNacimiento = new Date( inputDate.value )
  var hoy = new Date()

  var diferencia = Math.abs(hoy - fechaDeNacimiento)

  // milisegundos   segundos   minutos   horas    dias    años 
  // diferencia   / 1000     / 60      / 60     / 24    / 365

  var diferenciaEnAnios = parseInt(diferencia / 1000 / 60 / 60 / 24 / 365)

  divSalida.innerHTML = 'Tu tienes ' + diferenciaEnAnios + ' años<br/>'
}


/*
Taller 2

Crear una función que devuelva el nombre del día de la semana y el nombre del mes dada una fecha.

Extra:
- Esta fecha debe ser tomada desde un input y la función debe ser ejecutada desde el atributo onclick de un boton
- El resultado debe ser mostrado debajo del boton y del input

Ejemplo de Entrada => 01/04/2020

Resultado Esperado => Miercoles 01 de Abril del 2020

Taller 3

Crear una función que reciba como valor un año y determine la fecha del 7 domingo de ese año.

Ejemplo de Entrada => 2020

Resultado Esperado => 16 de Febrero
*/
