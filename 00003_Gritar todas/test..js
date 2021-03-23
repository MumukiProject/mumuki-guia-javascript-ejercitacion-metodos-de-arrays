it(`Si hacemos gritarTodas(['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']) debería retornar [6, 14, 26, 198]`, function() {
  let resultado = gritarTodas(['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'])
  assert.equal(resultado, ['¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!'],`gritarTodas debería retornar ['¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!'] pero fue ${resultado}`);
})