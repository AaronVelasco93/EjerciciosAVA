

var elementoP=document.getElementsByTagName("p");
var segundoParrafo=document.getElementById("segundo");


//Crear un elemento
var elemento=document.createElement("h2");

// Crear un nodo de texto
var contenido=document.createTextNode("este es nuestro contenido")

//Añadir al nodo de texto al elemento
elemento.appendChild(contenido);
//Agregar atributos al elemento
elemento.setAttribute("aling","center");

// Agregar el elemento al documento
document.getElementById("subtitulo").appendChild(elemento);