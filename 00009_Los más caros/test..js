it(`Si hacemos losMasCaros([ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]) debería retornar [53, 99, 68, 54, 97, 90, 92, 75, 86]`, function() {
  let resultado = losMasCaros([ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ])
  assert.deepEqual(resultado, [53, 99, 68, 54, 97, 90, 92, 75, 86],`losMasCaros debería retornar [53, 99, 68, 54, 97, 90, 92, 75, 86] pero fue ${resultado}`);
})

it(`Si hacemos losMasCaros([ 19, 27, 24, 18, 33 ]) debería retornar []`, function() {
  let resultado = losMasCaros([19, 27, 24, 18, 33])
  assert.deepEqual(resultado, [],`losMasCaros debería retornar [] pero fue ${resultado}`);
})