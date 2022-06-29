/**
 *
 * Reduce
 * 1. Some todos os números de um array
 * prev - previo  -- também é chamado de acumulador
 * current - valor atual
 *
 */

function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev })
    console.log({ current })
    return prev + current
  }, 0)
}

const arr = [1, 2]

console.log(somaNumeros(arr))

/**
* 
* $ node reduce.js
{ prev: 0 }
{ current: 1 }
{ prev: 1 }
{ current: 2 }
3
**/
