it(`Si hacemos corresponder([12.5, 56, 98],['celular', 'notebook', 'monitor']) debería retornar ['celular 22.6875', 'notebook 101.64', 'monitor 177.87']`, function() {
  let resultado = corresponder([12.5, 56, 98],['celular', 'notebook', 'monitor'])
  assert.deepEqual(resultado, ['celular 22.6875', 'notebook 101.64', 'monitor 177.87'],`corresponder debería retornar ['celular 22.6875', 'notebook 101.64', 'monitor 177.87'] pero fue ${resultado}`);
})
