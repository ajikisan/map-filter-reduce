/**
 * Map
 * Pratique a sintaxe de multiplicação de números utilizando o parâmetro this de um objeto.
 *
 */

const morango = {
  value: 60
}

const uva = {
  value: 7
}

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value
  }, thisArg)
}

const nums = [6, 5]

console.log('Quando this é morango', mapComThis(nums, morango))

console.log('Quando this é uva', mapComThis(nums, uva))

/**
 *
 * $ node mapcomthis.js
 *  Quando this é morango [ 360, 300 ]
 * Quando this é uva [ 42, 35 ]
 *
 */
