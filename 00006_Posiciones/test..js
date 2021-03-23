it(`Si hacemos posiciones(['Everlong', 'The Pretender', 'Learn to Fly']) debería retornar [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]`, function() {
  let resultado = posiciones(['Everlong', 'The Pretender', 'Learn to Fly'])
  assert.equal(resultado, ['0 - Everlong', '1 - The Pretender', '2 - Learn to Fly'],`posiciones debería retornar ['0 - Everlong', '1 - The Pretender', '2 - Learn to Fly'] pero fue ${resultado}`);
})