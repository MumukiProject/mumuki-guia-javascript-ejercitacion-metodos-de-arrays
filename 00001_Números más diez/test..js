it(`Si hacemos numerosMasDiez([15, 22, 33, 40, 65]) debería retornar [25, 32, 43, 50, 75]`, function() {
  let resultado = numerosMasDiez([15, 22, 33, 40, 65])
  assert.deepEqual(resultado, [25, 32, 43, 50, 75],`numerosMasDiez debería retornar [25, 32, 43, 50, 75] pero fue ${resultado}`);
})

it(`Si hacemos numerosMasDiez([10, 20, 30, 40, 50]) debería retornar [20, 30, 40, 50, 60]`, function() {
  let resultado = numerosMasDiez([10, 20, 30, 40, 50])
  assert.deepEqual(resultado, [20, 30, 40, 50, 60],`numerosMasDiez debería retornar [20, 30, 40, 50, 60] pero fue ${resultado}`);
})