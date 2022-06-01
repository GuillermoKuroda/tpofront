var cad = `
<a href="index.html">
<img class="imagenlogo" src="img/Omgoing_original_logotipo-02v1.png" alt="logo">
</a>
<nav>
<ul>
    <li> <a href="index.html"> INICIO </a></li>
    <li> <a href="nosotros.html"> NOSOTROS </a></li>
    <li> <a href="servicios.html"> SERVICIOS </a></li>
    <li> <a href="contacto.html"> CONTACTO </a></li>
</ul>
</nav>
`
document.getElementById("idheader").innerHTML = cad;

cad = `
<div>
    <p id="piecontacto1">Contacto</p>
    <a id="piecontacto2" href="mailto:omgoing.arg@gmail.com">omgoing.arg@gmail.com</a>
</div>
<div id="pieterminos">
    <p>Copyright 2022 - omgoing</p>
    <a href="">Términos y Condiciones generales para el uso del Website</a>
</div>
<div id="pieredes">
    <p id="piecontacto1">Estamos en </p>
    <a href="https://www.instagram.com/omgoing.arg/?hl=es" aria-hidden="true">
        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
    </a>
    <a href="https://www.linkedin.com/in/omgoing-arg-2396a31ab/?originalSubdomain=ar">
        <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
        <!--"https://ar.linkedin.com/in/omgoing-arg-2396a31ab?trk=author_mini-profile_title"-->
    </a>
    <a href="">
        <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
    </a>
    <a href="">
        <i class="fa fa-youtube fa-2x" aria-hidden="true"></i>
    </a>
    <a href="">
        <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
    </a>
</div>`
document.getElementById("idfooter").innerHTML = cad;

const nombre = document.getElementById("nombre")
const email = document.getElementById("mail")
const provincia = document.getElementById("provincia")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warning")
const textolibre = document.getElementById("textolibre")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warning = ""
    let entrar = false
    let validarmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length == 0) { /*VER GK duplica a required */
        warning += `Completar el nombre <br>`
        entrar = true
    }
    if (!validarmail.test(email.value)) { /*VER GK duplica a required (valida a@a) */
        warning += `Verficar el email <br>`
        entrar = true
    }
    if (provincia.value.length == 0 || provincia.value == '--Elija su provincia--') {
        warning += `Elija su provincia <br>`
        entrar = true
    }
    if (textolibre.value.length == 0) { /*VER GK duplica a required */
        warning += `Completar mensaje`
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warning
    }
})
/*VER GK falta click en Terminos y condiciones*/
