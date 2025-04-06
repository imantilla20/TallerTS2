
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
                           <td><button class="btn btn-link p-0 serie-name text-primary">${serie.nombre}</button></td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`
                           ;
    const linkElement = trElement.querySelector(".serie-name")!;
    linkElement.addEventListener("click", () => mostrarSerieDetalle(serie));
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

function mostrarSerieDetalle(serie: Serie): void {
  const serieTarjeta = document.getElementById('serie-card') as HTMLDivElement;
  const serieNombre = document.getElementById('nombre-card') as HTMLHeadingElement;
  const serieDescripcion = document.getElementById('descripcion-card') as HTMLParagraphElement;
  const serieUrl = document.getElementById('url-card') as HTMLAnchorElement;
  const serieImagen = document.getElementById('imagen-card') as HTMLImageElement;

  serieNombre.textContent = serie.nombre;
  serieDescripcion.textContent = serie.descripcion;
  serieUrl.href = serie.url;
  serieUrl.textContent = serie.url;
  serieImagen.src = serie.imagen;

  serieTarjeta.classList.remove('d-none');
}