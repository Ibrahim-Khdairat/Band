'use strict';
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 4 seconds
}


let ticketBuyContEl = document.getElementById('ticketBuyCont');

let buybuttonEl_1 = document.getElementById('buttonS1');
let buybuttonEl_2 = document.getElementById('buttonS2');
let buybuttonEl_3 = document.getElementById('buttonS3');



buybuttonEl_1.addEventListener('click',handelClick);
buybuttonEl_2.addEventListener('click',handelClick);
buybuttonEl_3.addEventListener('click',handelClick);


function handelClick(event){
  event.preventDefault();

  ticketBuyContEl.removeAttribute('hidden');


}

let closeEl = document.getElementById('close');
closeEl.addEventListener('click',handleClose);
 function handleClose()
 {
  ticketBuyContEl.setAttribute('hidden',1);

 }

