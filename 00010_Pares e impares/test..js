it(`Si hacemos separandoPares([[ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ]]) debería retornar [10, 20, 30, 40, 50]`, function() {
  let resultado = separandoPares([ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ])
  assert.deepEqual(resultado, [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32],`separandoPares debería retornar [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32] pero fue ${resultado}`);
})

it(`Si hacemos separandoImpares([ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ]) debería retornar [43, 11, 37, 29, 9, 3, 37, 25]`, function() {
  let resultado = separandoImpares([ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ])
  assert.deepEqual(resultado, [43, 11, 37, 29, 9, 3, 37, 25],`separandoImpares debería retornar [43, 11, 37, 29, 9, 3, 37, 25] pero fue ${resultado}`);
})