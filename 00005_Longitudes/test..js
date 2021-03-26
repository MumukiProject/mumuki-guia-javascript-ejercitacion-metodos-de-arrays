it(`Si hacemos longitudes(['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']) debería retornar [6, 14, 26, 198]`, function() {
  let resultado = longitudes(['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'])
  assert.deepEqual(resultado, [17, 18, 16],`longitudes debería retornar [17, 18, 16] pero fue ${resultado}`);
})

it(`Si hacemos longitudes(['Quisiera esta tarde divina de octubre', 'pasear por la orilla lejana del mar;', 'que la arena de oro, y las aguas verdes,', 'y los cielos puros me vieran pasar.']) debería retornar [37, 36, 40,35]`, function() {
  let resultado = longitudes(['Quisiera esta tarde divina de octubre', 'pasear por la orilla lejana del mar;', 'que la arena de oro, y las aguas verdes,', 'y los cielos puros me vieran pasar.'])
  assert.deepEqual(resultado, [37, 36, 40,35],`longitudes debería retornar [37, 36, 40,35] pero fue ${resultado}`);
})