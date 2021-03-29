it(`Si hacemos enlistar(librosJS) debería retornar [25, 32, 43, 50, 75]`, function() {
  let resultado = enlistar([
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
])
  assert.deepEqual(resultado, ['<li>JavaScript for Kids: A Playful Introduction to Programming</li>','<li>Composing Software</li>','<li>Eloquent JavaScript: A Modern Introduction to Programming</li>','<li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li>','<li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li>','<li>JavaScript: The Definitive Guide</li>','<li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li>'],`enlistar(librosJS) debería retornar ['<li>JavaScript for Kids: A Playful Introduction to Programming</li>','<li>Composing Software</li>','<li>Eloquent JavaScript: A Modern Introduction to Programming</li>','<li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li>','<li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li>','<li>JavaScript: The Definitive Guide</li>','<li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li>' pero fue ${resultado}`);
})