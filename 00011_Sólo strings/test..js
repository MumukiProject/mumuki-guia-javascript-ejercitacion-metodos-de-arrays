it(`Si hacemos soloStrings([1, 2, 3, 4, 5]) debería retornar [10, 20, 30, 40, 50]`, function() {
  let resultado = numerosMasDiez([1, 2, 3, 4, 5])
  assert.equal(resultado, [10, 20, 30, 40, 50],`numerosMasDiez debería retornar [10, 20, 30, 40, 50] pero fue ${resultado}`);
})