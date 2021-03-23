it(`Si hacemos dobles([3, 7, 13, 99]) debería retornar [6, 14, 26, 198]`, function() {
  let resultado = dobles([3, 7, 13, 99])
  assert.equal(resultado, [6, 14, 26, 198],`dobles debería retornar [6, 14, 26, 198] pero fue ${resultado}`);
})

it(`Si hacemos dobles([19, 27, 12, 24, 18]) debería retornar [38, 54, 24, 48, 36]`, function() {
  let resultado = dobles([19, 27, 12, 24, 18])
  assert.equal(resultado, [38, 54, 24, 48, 36],`dobles debería retornar [38, 54, 24, 48, 36] pero fue ${resultado}`);
})

