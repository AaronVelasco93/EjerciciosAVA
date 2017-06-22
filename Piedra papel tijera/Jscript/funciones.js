function Juego(){
    
    
  var player1;
  var player2;

    
    player1=document.getElementById("p1").value;
    player2=document.getElementById("p2").value;
    
    if(player1 == player2){
        alert("Empate");
    }else {
        if( player1=="Piedra" && player2=="Papel" ){
                alert("Gana player2");
           }
        if( player1=="Piedra" && player2=="Tijeras" ){
                alert("Gana player1");
           }
        if( player1=="Papel" && player2=="Piedra" ){
                alert("Gana player1");
           }
        if( player1=="Papel" && player2=="Tijeras" ){
                alert("Gana player2");
           }
        if( player1=="Tijeras" && player2=="Papel" ){
                alert("Gana player1");
           }
        if( player1=="Tijeras" && player2=="Piedra" ){
                alert("Gana player2");
           }
        
     
        
        
    }
    

};

