import { series } from './data.js';
var seriesTbody = document.getElementById('serie');
var promedioTemporadasElm = document.getElementById("promedio-temporadas");
renderSeriesInTable(series);
promedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                           <td><a href=\"#\" class=\"serie-name\">").concat(serie.nombre, "</a></td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
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
