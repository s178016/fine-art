window.onload = function(){
  var order = document.querySelector('.order');
  var message = document.querySelector('.message');
var prices = document.querySelectorAll('.prices__item');
var interval=null;
console.log(message);
for(var i = 0; i < prices.length; i++){
prices[i].onclick = function(){
  order.scrollIntoView();
  if(this.classList.contains('min')){
    console.log(message);
    message.value = 'Rozmiar: 40x60cm , ';
    changeColor();
  }
  else if (this.classList.contains('mid')){
  message.value = 'Rozmiar: 50x70cm ,';
changeColor();
  }
  else{
    message.value = 'Rozmiar: 60x90cm , ';
changeColor();
//setTimeout(() => {clearInterval(timerId);  }, 5000)
  }
}
  }
  message.onclick = function(){
    makeNormal(0);

  }

 function makeNormal(time){
   setTimeout(function(){
     clearInterval(interval);
     message.classList.remove('attention_text');}
   ,time);
 }

  function makeRed(){
  message.classList.toggle('attention_text');
  }

  function changeColor(){
    interval = setInterval(makeRed,200);
    makeNormal(2000);
  }

}
