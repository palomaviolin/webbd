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
        let estiloNone = document.getElementsByClassName('estilo-none');
        invisible();
        function invisible(){
            for(let i=0; i<estiloNone.length; i++){
                estiloNone[i].style.display = 'none';
            }
        }

        let footer = document.getElementById('footer');
        footer.style.display = 'none';

        /*
        
        FUNCIÓN que hace aparecer y desaperecer los elementos cuando se pincha el botón
        
        Se pasa como PARÁMETRO un número que corresponde al índice de la clase 'estilo-none'
            ● 0 → iglesia
            ● 1 → restaurante

        */
        function aparecerYdesaparecer(elemento) {
            // Localizar los elementos del html con clase 'estilo-none'
            let elementos = document.getElementsByClassName('estilo-none');
            // Bucle para recorrer la clase
            for(let i=0; i<elementos.length; i++){
                // Si el botón que se ha seleccionado coincide con el índice que se está recorriendo
                if(elemento == i){
                    // Si está es invisible entonces mostrarlo
                    if (elementos[i].style.display === "none") {
                        elementos[i].style.display = "block";
                        console.log(`Aparece ${elemento}`);
                        // Mostrar footer
                        footer.style.display = 'inline-block';
                    // Si es visible entonces ocultarlo
                    // Esto es para cuando se pincha dos veces seguidas el mismo botón,
                    // para que se oculte si se estaba mostrando, que queda mejor así.
                    } else {
                        elementos[i].style.display = "none";
                        console.log(`Desaparece ${elemento}`);
                        // Ocultar footer
                        footer.style.display = 'none';
                    }
                // Si el botón que se ha seleccionado NO coincide con el índice que se está recorriendo
                // entonces esos elementos se ocultarán siempre.
                }else{
                    elementos[i].style.display = "none";
                }
            }
        }

        // Primera versión del toggle invisible-visible
        // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
        // function aparecerYdesaparecer(elemento) {
        //     var x = document.getElementById(elemento);
        //     if (x.style.display === "none") {
        //         x.style.display = "block";
        //         console.log(`Aparece ${elemento}`);
        //     } else {
        //         x.style.display = "none";
        //         console.log(`Desaparece ${elemento}`);
        //     }
        // }