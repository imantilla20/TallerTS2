
import { Serie } from './Serie.js';

import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('serie')!;
const promedioTemporadasElm: HTMLElement = document.getElementById("promedio-temporadas")!;



renderSeriesInTable(series);
promedioTemporadasElm.innerHTML = `${getPromedioTemporadas(series)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.numero}</td>
                           <td><a href="#" class="serie-name">${serie.nombre}</a></td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`
                           ;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioTemporadas(series: Serie[]): number {
  let sumatemporadas: number = 0;
  let promediotemporadas: number=0;
  series.forEach((serie) => sumatemporadas = sumatemporadas + serie.temporadas);
  promediotemporadas=sumatemporadas/series.length
  return promediotemporadas;
}
