import { series } from './data.js';
var seriesTbody = document.getElementById('serie');
var promedioTemporadasElm = document.getElementById("promedio-temporadas");
renderSeriesInTable(series);
promedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                           <td><button class=\"btn btn-link p-0 serie-name text-primary\">").concat(serie.nombre, "</button></td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        var linkElement = trElement.querySelector(".serie-name");
        linkElement.addEventListener("click", function () { return mostrarSerieDetalle(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var sumatemporadas = 0;
    var promediotemporadas = 0;
    series.forEach(function (serie) { return sumatemporadas = sumatemporadas + serie.temporadas; });
    promediotemporadas = sumatemporadas / series.length;
    return promediotemporadas;
}
function mostrarSerieDetalle(serie) {
    var serieTarjeta = document.getElementById('serie-card');
    var serieNombre = document.getElementById('nombre-card');
    var serieDescripcion = document.getElementById('descripcion-card');
    var serieUrl = document.getElementById('url-card');
    var serieImagen = document.getElementById('imagen-card');
    serieNombre.textContent = serie.nombre;
    serieDescripcion.textContent = serie.descripcion;
    serieUrl.href = serie.url;
    serieUrl.textContent = serie.url;
    serieImagen.src = serie.imagen;
    serieTarjeta.classList.remove('d-none');
}
