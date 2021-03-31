it(`Si hacemos posiciones(['Everlong', 'The Pretender', 'Learn to Fly']) debería retornar [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]`, function() {
  let resultado = posiciones(['Everlong', 'The Pretender', 'Learn to Fly'])
  assert.deepEqual(resultado, ['0 - Everlong', '1 - The Pretender', '2 - Learn to Fly'],`posiciones debería retornar ['0 - Everlong', '1 - The Pretender', '2 - Learn to Fly'] pero fue ${resultado}`);
})

it(`Si hacemos posiciones(['The Pretender', 'Everlong', 'Learn to Fly']) debería retornar [ '0 - The Pretender', '1 - Everlong', '2 - Learn to Fly' ]`, function() {
  let resultado = posiciones(['Everlong', 'The Pretender', 'Learn to Fly'])
  assert.deepEqual(resultado, ['0 - The Pretender', '1 - Everlong', '2 - Learn to Fly'],`posiciones debería retornar ['0 - Everlong', '1 - The Pretender', '2 - Learn to Fly'] pero fue ${resultado}`);
})