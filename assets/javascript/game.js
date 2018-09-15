
//Variable definition
var wins = 0;
var losses = 0;
var winnernumber = Math.floor(Math.random() * 101) + 19; //Winnumber is the initial value to match
var scoreacc=0;
 

console.log(winnernumber);
//console.log(winnernumber);

//Displaying the initial value in html
document.getElementById("randominitial").innerHTML=winnernumber;


//Random values of the Crystal images
var Crystal1= Math.floor(Math.random() * 11) + 1;
var Crystal2= Math.floor(Math.random() * 11) + 1;
var Crystal3= Math.floor(Math.random() * 11) + 1;
var Crystal4= Math.floor(Math.random() * 11) + 1;

//Passing the initials values of the counters to html
document.getElementById("wins").innerHTML= "Wins:" + wins ;
document.getElementById("losses").innerHTML="Losses:" +losses;
document.getElementById("scoreadd").innerHTML= scoreacc;


//This is the fucntion reset called in the functions "youwin" and"youlost"

function reset(){
    winnernumber = Math.floor(Math.random() * 101) + 19;
    document.getElementById("randominitial").innerHTML=winnernumber;
    scoreacc=0;
    Crystal1= Math.floor(Math.random() * 11) + 1;
    Crystal2= Math.floor(Math.random() * 11) + 1;
    Crystal3= Math.floor(Math.random() * 11) + 1;
    Crystal4= Math.floor(Math.random() * 11) + 1;
    document.getElementById("scoreadd").innerHTML= scoreacc;
   // document.getElementById("messageresult").innerHTML="";

}


//Here is the start of the fuction "youwin"

function youwin() {
document.getElementById("messageresult").innerHTML="Congrats you win the last game!";
                
wins++;
document.getElementById("wins").innerHTML="Wins:" + wins;
reset();

}

//Here is the start of the function youlose

function youlose(){


losses++;
document.getElementById("losses").innerHTML="Losses:" + losses;
document.getElementById("messageresult").innerHTML="Sorry You lose last game!";

reset();
}


//Jquery for the click of the image

$("#imaged1").on('click', function(){
 scoreacc=scoreacc+Crystal1;

  document.getElementById("scoreadd").innerHTML=scoreacc;

  if (scoreacc == winnernumber){
      youwin();
  }else if (scoreacc > winnernumber){
     youlose();
  }
});



  $("#imaged2").on('click', function(){
    scoreacc=scoreacc+Crystal2;
   
     document.getElementById("scoreadd").innerHTML=scoreacc;
   
     if (scoreacc == winnernumber){
         youwin();
     }else if (scoreacc > winnernumber){
        youlose();
     }
   });


   $("#imaged3").on('click', function(){
    scoreacc=scoreacc+Crystal3;
   
     document.getElementById("scoreadd").innerHTML=scoreacc;
   
     if (scoreacc == winnernumber){
         youwin();
     }else if (scoreacc > winnernumber){
        youlose();
     }
   });
 
   
   $("#imaged4").on('click', function(){
    scoreacc=scoreacc+Crystal4;
   
     document.getElementById("scoreadd").innerHTML=scoreacc;
   
     if (scoreacc == winnernumber){
         youwin();
     }else if (scoreacc > winnernumber){
        youlose();
     }
   });

