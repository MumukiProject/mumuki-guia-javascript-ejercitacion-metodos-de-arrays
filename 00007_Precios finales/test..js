it(`Si hacemos preciosFinales([ 12.5, 56, 98, 45.75 ]) debería retornar [22.6875, 101.64, 177.87, 83.03625]`, function() {
  let resultado = preciosFinales([ 12.5, 56, 98, 45.75 ])
  assert.deepEqual(resultado, [22.6875, 101.64, 177.87, 83.03625],`preciosFinales debería retornar [22.6875, 101.64, 177.87, 83.03625] pero fue ${resultado}`);
})

it(`Si hacemos preciosFinales([43, 17, 19, 24]) debería retornar [78.045, 30.855, 34.485, 43.56]`, function() {
  let resultado = preciosFinales([43, 17, 19, 24])
  assert.deepEqual(resultado, [78.045, 30.855, 34.485, 43.56],`preciosFinales debería retornar [78.045, 30.855, 34.485, 43.56] pero fue ${resultado}`);
})