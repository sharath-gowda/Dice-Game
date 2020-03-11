
var num=Math.floor(Math.random()*6)+1;
 var num2=Math.floor(Math.random()*6)+1;


   $(".img1").click(function () { 
     
    if(num==1){
          $(".img1").attr("src","dice1.png");
        }
        else if(num==2){
         $(".img1").attr("src","dice2.png");
       }
        else if(num==3){
         $(".img1").attr("src","dice3.png");
       }
        else if(num==4){
         $(".img1").attr("src","dice4.png");
       }
       else if(num==5){
         $(".img1").attr("src","dice5.png");
       }
       else{
         $(".img1").attr("src","dice6.png");
       }
   });
 
   
   $(".img2").click(function () { 
     
    if(num2==1){
          $(".img2").attr("src","dice1.png");
        }
        else if(num2==2){
         $(".img2").attr("src","dice2.png");
       }
        else if(num2==3){
         $(".img2").attr("src","dice3.png");
       }
        else if(num2==4){
         $(".img2").attr("src","dice4.png");
       }
       else if(num2==5){
         $(".img2").attr("src","dice5.png");
       }
       else{
         $(".img2").attr("src","dice6.png");
       }
   });

   $("#btn1").click(function(){
     if(num>num2){
       $("h1").text("🚩 Player 1 Wins!");
     }
     else if(num<num2){
      $("h1").text("🚩 Player 2 Wins!");
     }
     else{
      $("h1").text("🚩 Draw");
     }
   })
 
   $("#btn2").click(function(){
     window.location.reload();
   })
