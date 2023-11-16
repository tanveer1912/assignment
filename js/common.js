
function getArrayFromObj(arrayGeo) {

    const tBody = document.getElementById('t-body');
    tBody.innerHTML = '';

    for (let i = 0; i < arrayGeo.length; i++) {
        const geo = arrayGeo[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${geo.geoName}</td>
        <td>${geo.result}</td>
        <td><button class="text-xs px-4 py-2 bg-blue-500 rounded-md text-white">Covert to m<sup>2</sup></button></td>
        `;
        tBody.appendChild(tr)
    }
}

document.addEventListener('mouseover', function () {

    getNewColor();

})
