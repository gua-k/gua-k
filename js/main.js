var imagenes = ['../assets/images/productos/M-1.jpg','../assets/images/productos/M-2.jpg','../assets/images/productos/M-3.jpg','../assets/images/productos/M-4.jpg','../assets/images/productos/M-5.jpg'],
cont = 0;

/**variables enlaces de sitio*/

function carousel(contenedor){
    contenedor.addEventListener('click', e =>{
    let atras = contenedor.querySelector('.atrasBtn'),
        adelante = contenedor.querySelector('.siguienteBtn'),
        img = contenedor.querySelector('img'),
        tgt = e.target;

    if(tgt == atras){
        if(cont > 0){
            img.src = imagenes[cont - 1];
            cont--;
        } else {
            img.src = imagenes[imagenes.length -1];
            cont = imagenes.length-1;
        }
    } else if (tgt == adelante){
        if(cont < imagenes.length-1){
            img.src = imagenes[cont + 1];
            cont++;
        } else {
            img.src = imagenes[0];
            cont = 0;
        }
    }
    });

}

document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.contenedor');

    carousel(contenedor);
});