/* SELECT */

const objetoMapa = [
    {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
    },
    {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
    },
    {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
    },
    {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
    ];

let select= document.querySelector('select')
let jugadoresSelect = objetoMapa.map(function(objeto) {
    return`<option> ${objeto.jugador}</option>`
})

select.innerHTML = jugadoresSelect.join().replaceAll("," , "")

const changeMap = () => {
    console.log('si anda');
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    mapa.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { marker }).addTo(mapa);
    marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
  }

/* MAPA */
// En center guardamos las coordenadas donde se centra el mapa
let center = [25.2841470, 51.4419568];

// En la variable map enviamos el centro del mapa y el zoom incial (10)
let mapa = L.map("map").setView(center, 10);

// Creamos el mapa
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
}).addTo(mapa);


// Icono de Messi
let messiIcon = L.icon({
    iconUrl: "css/Bg.png",
    iconSize: [60, 60],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
});

// Ponemos el icono en el mapa
let marker = L.marker(center, { icon:messiIcon }).addTo(mapa);

// Agregamos el pop up
marker.bindPopup("<b>Messi</b><br>Los amo!").openPopup();


/* Boton cerrar sesion */

let boton = document.querySelector('.boton')

boton.addEventListener('click', (evento) => {
    evento.preventDefault()
    localStorage.removeItem('logged');
    window.location.href = "index.html"; // para redirigir
})
