console.log('\t✅ enganchado familia-rodzina.js\n\n');


// ******************** JAVASCRIPT para cambiar de idioma *******************

function cambiarIdiomaFotos(){
    let idiomaPagina = document.documentElement.lang;
    // console.log(`Esta página está en ${idiomaPagina}`);
    if(idiomaPagina == 'pl'){
        window.location = './' + 'familia' + '.html';
    }else if(idiomaPagina == 'es'){
        window.location = './' + 'rodzina' + '.html';
    }
}

// ******************* JAVASCRIPT para cambiar de SECCIÓN *******************

function aparecerYdesaparecer(elemento){
    let rellenoToggle = document.getElementsByClassName('relleno-toggle');
    if(elemento == 'iglesia'){
        rellenoToggle[0].classList.add('display-block');
        rellenoToggle[0].classList.remove('display-none');
        rellenoToggle[1].classList.add('display-none');
        rellenoToggle[1].classList.remove('display-block');
        rellenoToggle[2].classList.add('display-none');
        rellenoToggle[2].classList.remove('display-block');
    }else if(elemento == 'convite'){
        rellenoToggle[0].classList.add('display-none');
        rellenoToggle[0].classList.remove('display-block');
        rellenoToggle[1].classList.add('display-block');
        rellenoToggle[1].classList.remove('display-none');
        rellenoToggle[2].classList.add('display-none');
        rellenoToggle[2].classList.remove('display-block');
    }else if(elemento == 'fotos'){
        rellenoToggle[0].classList.add('display-none');
        rellenoToggle[0].classList.remove('display-block');
        rellenoToggle[1].classList.add('display-none');
        rellenoToggle[1].classList.remove('display-block');
        rellenoToggle[2].classList.add('display-block');
        rellenoToggle[2].classList.remove('display-none');
    }
}



// ********************** JAVASCRIPT para SECCIÓN FOTOS *********************

function desplazarseFotos(direccion){
    let imagenes = document.getElementsByClassName('carrousel-fotos-boda');
    let indiceParaMostrar = 0;
    for(let i=0; i<imagenes.length; i++){
        if(imagenes[i].classList.contains('display-block')){
            if((direccion == 'atras') && (i == 0)){
                // si el índice es cero, ir a la ´última foto del array
                indiceParaMostrar = imagenes.length-1;
            }else if((direccion == 'atras') && (i>0)){
                indiceParaMostrar = i - 1;
            }else if((direccion == 'adelante') && (i<imagenes.length-1)){
                indiceParaMostrar = i + 1;
            }else if((direccion == 'adelante') && (i == imagenes.length)){
                // si el índice es cero, ir a la primera foto del array
                indiceParaMostrar = 0;
            }
        }
    }
    let pCarrouselFotos = document.getElementById('carrousel-texto');
    let idiomaPagina = document.documentElement.lang;
    // console.log(`Esta página está en ${idiomaPagina}`);
    if(idiomaPagina == 'pl'){
        pCarrouselFotos.innerHTML = `Zdjęcie ${indiceParaMostrar+1} z ${imagenes.length}`;
    }else if(idiomaPagina == 'es'){
        pCarrouselFotos.innerHTML = `Mostrando foto ${indiceParaMostrar+1} de ${imagenes.length}`;
    }
    // console.log(indiceParaMostrar);
    mostrarUnaFotoYocultarElResto(indiceParaMostrar);
}

function mostrarUnaFotoYocultarElResto(indice){
    // console.log('entrando en cambiar estilos');
    let imagenes = document.getElementsByClassName('carrousel-fotos-boda');
    for(let i=0; i<imagenes.length; i++){
        if(i == indice){
            // console.log(`mostrando índice ${i} y ocultando el resto`);
            imagenes[i].classList.add('display-block');
            imagenes[i].classList.remove('display-none');
        }else if(imagenes[i] !== indice){
            imagenes[i].classList.remove('display-block');
            imagenes[i].classList.add('display-none');
        }
    }
}