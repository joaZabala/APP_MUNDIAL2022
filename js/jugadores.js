let boton = document.querySelector('.boton')

boton.addEventListener('click', (evento) => {
    evento.preventDefault()
    localStorage.removeItem('logged');
    window.location.href = "index.html"; // para redirigir
})

let section = document.querySelector('section')

fetch("https://639a535a3a5fbccb5264b073.mockapi.io/jugadores")
.then((response) => response.json())
.then(datos => datos.map(function (data) {
    section.innerHTML += 
`              
<div class="card cardjugadores col-lg-2 col-md-2 col-xxl-3 col-xl-2 col-sm-1 float-start">
    <div class = "img-wrapper"> 
        <img src="https://julioavantt.github.io/guayerd-project-images/img/${data.dorsal}.jpg" class="card-img-top imagenesjuga" alt="messi">
        <span>${data.dorsal}</span>
    </div>
    <div class="card-body p-4">
        <h2 class="card-title titulocard">${data.name}</h2>
        <div class="textocard">
            <ol>Edad: ${data.edad}</ol>
            <ol>Posicion: ${data.posicion}</ol>
            <ol>Peso: ${data['stats-fisico'].peso} </ol>
            <ol>Altura: ${data['stats-fisico'].altura}  </ol>
            <ol>Equipo actual: ${data['equipo-actual']}</ol>
            <ol>Fecha de nacimiento: ${data['fecha-nacimiento']}</ol>
        </div>
    </div>
</div>
`
}));