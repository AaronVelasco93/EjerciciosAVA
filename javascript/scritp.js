//var elemento=document.createElement("div");
//var padre=document.getElementById("contenedor");
//
//
//    elemento.setAttribute("class","azul");
//
//    document.body.appendChild(elemento);
//    padre.insertBefore(elemento,referencia);

var accion;

accion=function(){
    var thumb= document.getElementById("thumb");
    
    if (thumb.className=="thumb"){
        
             thumb.setAttribute("class","thumb grande");
    //thumb.className="thumb grande";
        }else {
            thumb.className="thumb";
        }
        
}

