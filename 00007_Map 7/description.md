
* Tenemos un array en una variable `costos` con números que representan costos de diferentes productos.
* Completar el siguiente código para llegar al resultado esperado
* A un costo primero se le agrega la ganancia y después el IVA (este ultimo sobre el costo + la ganancia)

```js
const costos = [ 12.5, 56, 98, 45.75 ];

const agregarIVA = (costo) => {
  return costo * 1.21;
}

const sumarGanancia = (costo) => {
  return costo * 1.5;
}

// codear acá la solución del ejercicio


console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]
```
