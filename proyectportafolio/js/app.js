// mostrar menu
function ViewMenu() {
    const btnclick = document.getElementById('btnmenu');
    btnclick.addEventListener('click', () => {
        document.getElementById("myNav").style.width = "100%";
    })
}
// mostrar menu responsivo
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// mis habilidades
const mishabilidades = ['Python', 'Html', 'Css', 'C++','Wolfram',' JavaScript','Genexus','Wordpres','Ensamblaje','Project','Circuitos','Sql server'];
const habil = document.getElementById('habilidad');
mishabilidades.forEach(e => {
    habil.innerHTML += `<span href="#">${e}</span>`;
})

// mostrar menu



function MostrarModal() {
    const btnclick = document.getElementById('enviar');
    btnclick.addEventListener('click', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const comentario = document.getElementById('comentario').value;
        const valinombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        // si los campos estan vacios
        let camposvacios = true;
        let datosvalidos = false;
        if (nombre !== '' && email !== '' && comentario !== '') {
            camposvacios = false;
        }
        // si nombre y mail son validos
        if (valinombre.test(nombre) && emailRegex.test(email)) {
            datosvalidos = true;
        }
        if (camposvacios === false && datosvalidos === true) {
            document.getElementById('myModal').style.display = 'block';
            document.getElementById('saludos').innerHTML = `<img class='estrella' src="./img/Pico1.png" alt="" />
            <strong style="font-size: 1rem;">Gracias por su inscripcion, le saluda Miguel Pico</strong><p>${nombre} revise su correo => ${email} para confirmar su registro, gracias por su comentario => ${comentario}</p> <span id="closex" class="close">Aceptar</span>`
            document.getElementById('closex').addEventListener('click', () => {
                document.getElementById('myModal').style.display = 'none'
            });
        } else {
            alert("Datos vacios o no validos")
        }
    })

}
// call fuction
ViewMenu();
MostrarModal();