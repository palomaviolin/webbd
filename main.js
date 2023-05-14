console.log('\t✅ enganchado el main.js\n\n');


// ********************  JAVASCRIPT del index.html ********************

// https://desarrolloweb.com/articulos/24.php
function acceso(){
    window.location = "./pages/" + document.formclave.clave.value + ".html"
} 

var wage = document.getElementById("wage");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});

function validate(e) {
    acceso();
}


// ********************** JAVASCRIPT de misa.html *********************


// Ponemos el display none para que al cargar la página agarre de primeras
// el none, porque sino, al principio, la primera vez tenía que pinchar dos
// veces el botón para que comenzara el toggle de la invitación, y con esto
// ya es directamente pinchando una vez y funciona perfecto.
function invisible(){
    let estiloNone = document.getElementsByClassName('estilo-none');
    for(let i=0; i<estiloNone.length; i++){
        estiloNone[i].style.display = 'none';
    }
}
window.onload = invisible;


/*
        
FUNCIÓN que hace aparecer y desaperecer los elementos cuando se pincha el botón
        
Se pasa como PARÁMETRO un número que corresponde al índice de la clase 'estilo-none'
    ● 0 → iglesia
    ● 1 → restaurante

*/
function aparecerYdesaparecer(elemento) {
    // Localizar el main para jugar con su height porque:
    // - cuando no se muestre ningún dato, el main debe ser height: 100vh;
    // - cuando sí se muestren datos de iglesia o restaurante, el main debe ser height: 100%;
    let main = document.getElementById('main');
    // Localizar los elementos del html con clase 'estilo-none'
    let elementos = document.getElementsByClassName('estilo-none');
    // Bucle para recorrer la clase
    for(let i=0; i<elementos.length; i++){
        // Si el botón que se ha seleccionado coincide con el índice que se está recorriendo
        if(elemento == i){
            // Si está es invisible entonces mostrarlo
            if (elementos[i].style.display === "none") {
                elementos[i].style.display = "block";
                cualApareceOdesaparece(elemento, 'Aparece');
                main.style.height = '100%';
            // Si es visible entonces ocultarlo
            // Esto es para cuando se pincha dos veces seguidas el mismo botón,
            // para que se oculte si se estaba mostrando, que queda mejor así.
            } else {
                elementos[i].style.display = "none";
                cualApareceOdesaparece(elemento, 'Desaparece');
                main.style.height = '100vh';
            }
        // Si el botón que se ha seleccionado NO coincide con el índice que se está recorriendo
        // entonces esos elementos se ocultarán siempre.
        }else{
            elementos[i].style.display = "none";
        }
    }
}

function cualApareceOdesaparece(elemento, queHace){
    if(elemento == 0){
        console.log(`${queHace} ${elemento}: iglesia`);
    }else if(elemento == 1){
        console.log(`${queHace} ${elemento}: restaurante`);
    }
}
