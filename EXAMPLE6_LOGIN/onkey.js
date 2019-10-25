var events = document.getElementById('username');
events.onkeyup=function(){
  document.getElementById('feedback1').innerHTML=events.value;
}
