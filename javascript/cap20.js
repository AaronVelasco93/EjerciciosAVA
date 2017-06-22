//eventos estandar
(function(){
    
    var saludo;
    saludo=function(e){
        console.log("evento de tipo"+e.type);
        alert("saludo ");
   
    };
  
    
    var boton;    
    boton= document.getElementById('boton');
    boton.addEventListener("click",saludo );
    
    
   
}())