const agregarIVA = (costo) => {
  return costo * 1.21;
}

const sumarGanancia = (costo) => {
  return costo * 1.5;
}

function preciosFinales(costos){
  return costos.map (costo => agregarIVA(sumarGanancia(costo)));
}