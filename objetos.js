// Objeto
/*
Estructura

var objeto = {
  clave: valor
}

*/

// var nombre = 'Samy'
// var altura = 1
// var edad = 80

// var persona = {
//   nombre: 'Jeisson',
//   altura: 1.9,
//   edad: 20
// }

// console.log(persona.nombre)

// function crearPersona(nombre, pais, edad) {
//   return { nombre: nombre, pais: pais, edad: edad }
// }

// var jeisson = crearPersona('Jeisson', 'Colombia', 29)

// Paso de parametro por referencia - Comparte la posicion en memoria

// console.log(jeisson)

// // Paso de parametros por referencia
// function cumpleAnios( persona ) {
//   persona.edad = persona.edad + 1
// }

// cumpleAnios( jeisson )

// console.log(jeisson)

// Paso de parametro por instancia - Clona el objeto

// let miNombre = 'Samy'

// console.log(miNombre)

// function ponerApellido( nombre ) {
//   nombre = nombre + ' Rosas'
// }

// ponerApellido( miNombre )

// console.log(miNombre)

// ------------------------------------------

// console.log(jeisson)

// function cumpleAnios( persona ) {
//   var personaMasVieja = {
//     nombre: persona.nombre,
//     pais: persona.pais,
//     edad: persona.edad + 1
//   }

//   return personaMasVieja
// }

// var jeissonMasViejo = cumpleAnios( jeisson )

// console.log(jeisson)
// console.log('jeissonMasViejo ', jeissonMasViejo)


// Recorriendo objetos a traves de la lista de llaves

// Object.keys(jeisson)
// // Array(3) [ "nombre", "pais", "edad" ]

// Object.keys(jeisson).forEach((clave) => console.log(jeisson[clave]))

var mascotas = []
var listadoDeMascotas = document.querySelector('.lista-mascotas')

function agregarMascota( event ) {
  event.preventDefault()
  event.stopPropagation()

  const form = event.target
  var inputNombreMascota = form.querySelector('#nombre-mascota')
  var inputEspecieMascota = form.querySelector('#especie-mascota')
  var inputEdadMascota = form.querySelector('#edad-mascota')

  var mascota = {
    nombre: inputNombreMascota.value,
    especie: inputEspecieMascota.value,
    edad: inputEdadMascota.value
  }

  inputNombreMascota.value = ''
  inputEspecieMascota.value = ''
  inputEdadMascota.value = ''

  mascotas.push( mascota )

  listarMascotas()

  // document.querySelector('#nombre-mascota')
}

function listarMascotas() {
  listadoDeMascotas.innerHTML = ''

  // for => Repetir la ejecucion un numero determinado de veces
  for (var i = 0; i < mascotas.length; i++) {

    var { nombre, especie, edad } = mascotas[ i ]

    // var nombre = mascotas[i].nombre
    // var especie = mascotas[i].especie
    // var edad = mascotas[i].edad

    listadoDeMascotas.innerHTML += `<li>${nombre} - ${especie} - ${edad}</li>`
  }
}

// function clickIzquierda( event ) {
//   event.stopPropagation()

//   console.log('Click a la izquierda')
// }

// function intersetarEnlace( event ) {
//   event.preventDefault()

//   console.log('Hola soy el enlace')
// }

/*
Taller 1

Crear una aplicación para almacenar en memoria ram un listado de contactos. Donde cada contacto debe tener un Nombre, un Teléfono y un Correo Electrónico.

Estos valores deben ser listados en una tabla de HTML.

Extra usar bootstrap y un súper extra si se usan estilos propios. 
*/
