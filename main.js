function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();   
};

const listaDeTeclas = document.querySelectorAll('.tecla');


let contator = 0;

while (contator < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contator];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }; 

    contator = contator + 1;

}
