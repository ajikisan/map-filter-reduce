/**
 *
 * Reduce
 * 2. Crie uma função que recebe  uma lista de preços e um  número representando
 * o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços
 * da lista enviada.
 * prev - acumulador
 *
 */

const lista = [
  {
    name: 'shampoo',
    preco: 30
  },
  {
    name: 'toalha',
    preco: 50
  },

  {
    name: 'condicionador',
    preco: 20
  }
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log('rodada', index + 1)
    console.log({ prev })
    console.log({ current })
    return prev - current.preco
  }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))

/**
*  
$ node reducepreco.js
rodada 1
{ prev: 100 }
{ current: { name: 'shampoo', preco: 30 } }
rodada 2
{ prev: 70 }
{ current: { name: 'toalha', preco: 50 } }
rodada 3
{ prev: 20 }
{ current: { name: 'condicionador', preco: 20 } }
0
**/
