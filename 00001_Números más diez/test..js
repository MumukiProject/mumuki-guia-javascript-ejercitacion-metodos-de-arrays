it(`Si hacemos numerosMasDiez([1, 2, 3, 4, 5]) debería retornar [10, 20, 30, 40, 50]`, function() {
  let resultado = numerosMasDiez([10, 20, 30, 40, 50])
  assert.deepEqual(resultado, [10, 20, 30, 40, 50],`numerosMasDiez debería retornar [10, 20, 30, 40, 50] pero fue ${resultado}`);
})

it(`Si hacemos numerosMasDiez([15, 22, 33, 40, 65]) debería retornar [25, 32, 43, 50, 75]`, function() {
  let resultado = numerosMasDiez([15, 22, 33, 40, 65])
  assert.deepEqual(resultado, [25, 32, 43, 50, 75],`numerosMasDiez debería retornar [25, 32, 43, 50, 75] pero fue ${resultado}`);
})