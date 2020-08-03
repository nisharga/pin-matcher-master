//hide notify-section element
document.getElementById("notify1").style.display = 'none';
document.getElementById("notify2").style.display = 'none';

// After Click left element Random-number show 4 digit
document.getElementById("pin-btn").addEventListener("click", function(){
    document.getElementById("random-num").value = Math.floor(Math.random() * 8999) + 1000 ;
  });

// show Number on right-display after click digit
function screenShow(number){
  return calculator.screen.value += number;
}


// match the number and show result
document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  var random = parseInt(document.getElementById("random-num").value);
  var rightScreen =  parseInt(document.getElementById("screen-right").value);
  if(random == rightScreen){
    document.getElementById("notify2").style.display = 'block';
    document.getElementById("notify1").style.display = 'none';
  }
  else{
    document.getElementById("notify1").style.display = 'block';
    document.getElementById("notify2").style.display = 'none';
  }

});

// three times try
var click = 2;
function fun(){
  if(click >= 0){
    document.getElementById("try").innerHTML = click;
    click--;

    if(click == -1){
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").style.backgroundColor = 'red';
      
    }
  }
  

}