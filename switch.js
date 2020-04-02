//-----------------
// if
//-----------------

/*
if ( condiciones ) {
  // Todo el codigo
}
*/

/*
if ( condiciones ) {
  // Todo el codigo
} else {
  // Este codigo se ejecutará si no se cumplen las condiciones
}
*/

/*
if ( condiciones ) {
  if ( condiciones ) {
    if ( condiciones ) {
      if ( condiciones ) {

      } else {

      }
    }
  }
  // Todo el codigo
} else {
  // Este codigo se ejecutará si no se cumplen las condiciones
}
*/

/*
if (numero > 0) {
  // Ejecute este codigo
} else if (numero === 0) {
  // Ejecute este codigo
} else if (numero < 0) {
  // Ejecute este codigo
} else {
  // Ejecute este codigo
}
*/

/*
(0.0001...4.99999)
if ( (numero > 0 && numero < 5) || numero === 8 ) {

}
*/

//### Negaciones ###
// !false => true
// !true => false
// 5 !== 4 =>  true

//-----------------
// Switch
//-----------------

// var diasDeLaSemana = [0, 1, 2, 3, 4, 5, 6]
var diaDeLaSemana = 5

if ( diaDeLaSemana === 0 ) {
  console.log('Domingo')
} else if ( diaDeLaSemana === 1 ) {
  console.log('Lunes')
} else if ( diaDeLaSemana === 2 ) {
  console.log('Martes')
} else if ( diaDeLaSemana === 3 ) {
  console.log('Miercoles')
} else if ( diaDeLaSemana === 4 ) {
  console.log('Jueves')
  console.log('Viernes')
  console.log('Sabado')
} else if ( diaDeLaSemana === 5 ) {
  console.log('Viernes')
} else if ( diaDeLaSemana === 6 ) {
  console.log('Sabado')
}

// Ejemplo 1

switch(diaDeLaSemana) {
  case 0:
    console.log('Domingo')
  case 1:
    console.log('Lunes')
  case 2:
    console.log('Martes')
  case 3:
    console.log('Miercoles')
  case 4:
    console.log('Jueves')
  case 5:
    console.log('Viernes')
  case 6:
    console.log('Sabado')
}

// Ejemplo 2

var estadoDeLaOrden = 'pending'

switch( estadoDeLaOrden ) {
  case 'pending':
    console.log('Su orden esta pendiente')
    break
  case 'cooking':
    console.log('Su orden se esta cocinando')
    break
  case 'cancelled':
    console.log('Su orden cancelada')
    break
  case 'delivered':
    console.log('Su orden ya ha sido entregada')
    break
}