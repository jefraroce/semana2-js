// Ciclo Do While
// Asegura que al menos UNA vez se ejecute un grupo de instrucciones de codigo. Y se seguirá ejecutando mientras se cumplan las condiciones

/*
do {
  // Todo el codigo que queremos se ejecute
} while ( condiciones )
*/

var numeroObtenido = 15
do {
  numeroObtenido = parseInt( prompt('Ingrese un numero entre 10 y 20') )
} while ( numeroObtenido < 10 || numeroObtenido > 20 )
