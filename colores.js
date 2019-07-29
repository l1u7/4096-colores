var colores = document.querySelectorAll('.contenedor-colores span');


var longitudColores = colores.length;
var contador = 0;
while(contador < longitudColores) {
    colores[contador].addEventListener('click', saberContenido);
    contador++;
} 

function saberContenido(e) { 

  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");
  var color = e.target.innerHTML;
  	
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", color);

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado 
  var guardado = document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);
    
  if (guardado) {
      avisosFlotantes(color);
  } else {
      alert('No se ha copiado al portapapeles, no he buscado una solucion porque me da flojera tal vez lo haga luego :P, cambia tu navegador');
  }
}

// FUNCION PARA CEAR UN AVISO

function avisosFlotantes(color) {
    
        
    var avisoFlotante = document.createElement('div');
    avisoFlotante.setAttribute('class', 'aviso-copiado');
    avisoFlotante.innerHTML = '¡Copiado!';
    avisoFlotante.style.backgroundColor = color;
    document.body.appendChild(avisoFlotante); 
    
    var intervalo = setInterval(function(){
        document.body.removeChild(avisoFlotante);
        clearInterval(intervalo);
    }, 4000);
    
}