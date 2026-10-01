/* ==========================================
   PORTAFOLIO - JAVASCRIPT
========================================== */


/* ==========================================
   1. ANIMACIONES AL HACER SCROLL
========================================== */

const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {

    observer.observe(elemento);

});


/* ==========================================
   2. BOTÓN VOLVER ARRIBA
========================================== */

const botonArriba =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botonArriba.classList.add("show");

    } else {

        botonArriba.classList.remove("show");

    }

});


botonArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   3. AÑO AUTOMÁTICO
========================================== */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


/* ==========================================
   4. FORMULARIO
========================================== */

const formulario =
    document.getElementById("contactForm");


formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const asunto =
        document.getElementById("asunto").value.trim();

    const mensaje =
        document.getElementById("mensaje").value.trim();


    if (
        nombre === "" ||
        email === "" ||
        asunto === "" ||
        mensaje === ""
    ) {

        alert(
            "Por favor, completa todos los campos."
        );

        return;

    }


    alert(
        `¡Gracias ${nombre}! Tu mensaje fue enviado correctamente.`
    );


    formulario.reset();

});


/* ==========================================
   5. MENÚ RESPONSIVE
========================================== */

const enlaces =
    document.querySelectorAll(".nav-link");

const menu =
    document.getElementById("menu");


enlaces.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const menuBootstrap =
                bootstrap.Collapse.getInstance(menu);

            if (menuBootstrap) {

                menuBootstrap.hide();

            }

        }

    });

});


/* ==========================================
   6. MENSAJE DE PRUEBA
========================================== */

console.log(
    "✨ Portafolio cargado correctamente."
);