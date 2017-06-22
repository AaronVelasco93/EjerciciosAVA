(function(){
    
    var formulario = document.getElementsByName('formulario')[0];
        elemento=formulario.elemets,
        boton=document.getElementById('btn');
    
    var validarNombre=function(e){
        if(formulario.nombre.value == 0)
            
            alert("completa el campo nombre");
            e.preventDefault();
            
    };
    
    var validarRadio= function(e){
        
        if(formulario.sexo[0]== true || formulario.sexo[1]== true ){
            
        }else{
            alert("Completa el campo de nombre");
            e.preventDefault();
        }
        
    };    
    var validar=function(e){
        
        validarNombre(e);
        validarRadio(e);
    };
    
    formulario.addEventListener("submit",validar);
    
}())