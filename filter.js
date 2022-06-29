/**
 * Filter
 * Filtre e retorne todos os números pares de um array.
 *
 */

function filtraPares(arr) {
  // return arr.filter(function(item) // Jeito alternativo da linha 12
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0
  // return item % 2 !== 0 //Números ímpares
}

//const meuArray = [1, 23, 55, 67, 30, 2, 4]
const meuArray = [1, 2, 3, 4]

console.log('Filtra os números pares', filtraPares(meuArray))

/**
 *
 * $ node filter.js
 * Filtra os números pares [ 30, 2, 4 ]
 *
 */
