it(`Si hacemos gritarTodas(['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']) debería retornar ['¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!']`, function() {
  let resultado = gritarTodas(['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'])
  assert.deepEqual(resultado, ['¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!'],`gritarTodas debería retornar ['¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!'] pero fue ${resultado}`);
})

it(`Si hacemos gritarTodas(['Quisiera esta tarde divina de octubre', 'pasear por la orilla lejana del mar;', 'que la arena de oro, y las aguas verdes,', 'y los cielos puros me vieran pasar.']) debería retornar ['¡Quisiera esta tarde divina de octubre!', '¡pasear por la orilla lejana del mar;!', '¡que la arena de oro, y las aguas verdes,!', '¡y los cielos puros me vieran pasar.!']`, function() {
  let resultado = gritarTodas(['Quisiera esta tarde divina de octubre', 'pasear por la orilla lejana del mar;', 'que la arena de oro, y las aguas verdes,', 'y los cielos puros me vieran pasar.'])
  assert.deepEqual(resultado, ['¡Quisiera esta tarde divina de octubre!', '¡pasear por la orilla lejana del mar;!', '¡que la arena de oro, y las aguas verdes,!', '¡y los cielos puros me vieran pasar.!'],`gritarTodas debería retornar ['¡Quisiera esta tarde divina de octubre!', '¡pasear por la orilla lejana del mar;!', '¡que la arena de oro, y las aguas verdes,!', '¡y los cielos puros me vieran pasar.!'] pero fue ${resultado}`);
})