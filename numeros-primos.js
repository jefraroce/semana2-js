/*
Taller

Crear una función en JavaScript que reciba un número entero positivo de dos dígitos y determinar si sus dígitos son números primos.

Agregar las validaciones que sean necesarias.

Más información sobre la estructura condicional Switch => https://www.w3schools.com/js/js_switch.asp

*/

function esPrimo( numero ) {
  switch (numero) { // 2
    case 0:
    case 1:
      console.log('Este caso especial')
      break
    case 2:
    case 3:
    case 5:
    case 7:
      return true
  }

  return false
}


function determinarSiSusDigitosSonPrimos ( numero ) {
  var primerDigito = parseInt( numero / 10 )
  var segundoDigito = ( numero % 10 )

  // if ( esPrimo( primerDigito ) ) {
  //   console.log('Es primo')
  // } else {
  //   console.log('No es primo')
  // }

  // esPrimo( primerDigito ) ? console.log('Es primo') : console.log('No es primo') 

  // El primer digito 1 => ES PRIMO
  console.log('El primer digito ' + primerDigito + ' => ' + ( esPrimo( primerDigito ) ? 'ES PRIMO' : 'NO ES PRIMO' ) )

  console.log('El segundo digito ' + segundoDigito + ' => ' + ( esPrimo( segundoDigito ) ? 'ES PRIMO' : 'NO ES PRIMO') )
}

var numeroEnTexto
var numeroEntero
var esInvalido

// do {
//   numeroEnTexto = prompt('Por favor ingrese un número entre 10 y 99')
//   numeroEntero = parseInt( numeroEnTexto )
// } while ( numeroEnTexto.length !== 2 || Number.isNaN(numeroEntero) || numeroEntero < 10 )

do {
  esInvalido = false
  numeroEnTexto = prompt('Por favor ingrese un número entre 10 y 99')
  numeroEntero = parseInt( numeroEnTexto )

  if ( numeroEnTexto.length !== 2 ) {
    console.error('El número debe tener dos digitos')
    esInvalido = true
  } else if ( Number.isNaN(numeroEntero) ) {
    console.error('El valor ingresado No es un número')
    esInvalido = true
  } else if ( numeroEntero < 10 ) {
    console.error('El valor ingresado debe ser positivo')
    esInvalido = true
  }
} while ( esInvalido )

determinarSiSusDigitosSonPrimos( numeroEntero )