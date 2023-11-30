console.log('\t✅ enganchado el main.js del index.html\n\n');


let input = document.getElementById('wage');


/*
    Las siguientes dos funciones son para entrar a una página si
    cuando pulsemos el botón ACCEDER tras introducir la contraseña
    correcta en el input.
    Adaptado de --> https://desarrolloweb.com/articulos/24.php
*/
function acceso(){
    if((input.value == 'familia') || (input.value == 'rodzina')){
        window.location = `./pages/${input.value}.html`;
    }else{
        console.log('Has pulsado la tecla ENTER estando en el input');
        alert('Contraseña incorrecta\nNiepoprawne hasło');
    }
} 

function validate(e) {
    acceso();
}


/*
    Función para poder llamar también a la función 'acceso()' si
    pulsamos la tecla ENTER estando dentro del input.
    Adaptado de --> https://es.stackoverflow.com/questions/167312/detectar-tecla-intro-en-campo-de-texto
*/
function onKeyUp(event) {
    var keycode = event.keyCode;
    if(keycode == '13'){
        if((input.value == 'familia') || (input.value == 'rodzina')){
            acceso(); 
        }else{
            alert('Contraseña incorrecta\nNiepoprawne hasło');
        }
    }
}


/*
    Función para para cambiar de idioma
*/
function cambiarIdioma(value){
    console.log(value);
    if(value == 'Polski'){
        document.getElementById('textillo').value =  'Hasło';
        document.getElementById('boton-acceder').value = 'Dostęp';
        document.getElementById('img-bandera-idioma').setAttribute('src', './images/bandera-polonia.png');
    }else if(value == 'Español'){
        document.getElementById('textillo').value =  'Contraseña';
        document.getElementById('boton-acceder').value = 'Acceder';
        document.getElementById('img-bandera-idioma').setAttribute('src', './images/bandera-spain.png');
    }
}

