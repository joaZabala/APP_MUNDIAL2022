const credenciales = {
    email: "estudiante@guayerd.com",
    password: "123456",
    };
    
let form = document.querySelector('form');
let bandera =localStorage.getItem('logged');


form.addEventListener("submit", (evento) => {
    evento.preventDefault();//para que la pagina no se recargue y le quite esa accion por defecto
    let mail = form.mail.value 
    let contracena = form.contracena.value

    if (mail === credenciales.email && contracena === credenciales.password) {
        localStorage.setItem("logged", 'true')
        window.location.href = "map.html"; // para redirigir la pagina a map.html
    }
    else{
        alert("las credenciales introducidas con inválidas. Porfavor vuelva a loggear")
    }
})



//codigo abel

/* const credenciales = {
    email: "estudiante@guayerd.com",
    password: "123456",
    }

    
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    let userEmail = form.elements.mail.value;
    let userPassword = form.elements.contracena.value;
if (
      credenciales.email === userEmail &&
      credenciales.password === userPassword
    ) {
      localStorage.setItem("logged", "true");
      window.location.href = "map.html";
    } else {
      alert("Credenciales introducidas inválidas.");
    }
  }); */