const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_rick");
    let valor = inputTexto.value;
    peticion(valor);
}

const peticion = (nombre) => {
    const baseURL = 'https://rickandmortyapi.com/';
    const endpoint = `api/character/?name=${nombre}`; // Usamos el nombre en lugar del ID
    const url = `${baseURL}${endpoint}`;

    axios.get(url)
    .then(res => {
        if (res.data.results.length > 0) {
            printData(res.data.results[0]); // Mostramos el primer personaje que coincide
        } else {
            console.log("No se encontró ningún personaje");
        }
    })
    .catch(err => console.log("Error:", err));
}

const printData = (data) => {
    let respuesta = document.getElementById("show-info");
    respuesta.innerHTML = `
    <h1>Nombre: ${data['name']}</h1>
    <h1>Estado: ${data['status']}</h1>
    <h1>Raza: ${data['species']}</h1>
    <h1>Género: ${data['gender']}</h1>
    <h1>Lugar de origen: ${data['origin']['name']}</h1>
    <img src="${data['image']}" alt="${data['name']}" />
    `;
}
