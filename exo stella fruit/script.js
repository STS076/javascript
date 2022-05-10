var fruits = document.getElementsByTagName("li");
fruits[0].style.backgroundColor = "green";
fruits[1].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "blue";
fruits[3].style.backgroundColor = "red";
var body = document.getElementsByTagName("body")
body[0].style.backgroundColor = "pink";

var infos = document.getElementById('news');
infos.addEventListener('click', function(Event){
    Event.preventDefault();
    infos.innerHTML = 'Je rentre dans la boite';
    infos.style.color = 'pink';
  
})
infos.addEventListener("dblclick", function(Event){
    Event.preventDefault();
    infos.innerHTML = 'news';
    infos.style.color = 'red';
})  

var brownBox = document.getElementById('test')
brownBox.addEventListener('click',function() {
    brownBox.style.transition = '5s';
    brownBox.style.backgroundColor = 'purple';
    brownBox.style.width = '150px';
    brownBox.style.height = '150px';
    brownBox.style.top = '100px';
    brownBox.style.right = '100px';
})
var brownBox = document.getElementById('test')
brownBox.addEventListener('dblclick',function() {
    brownBox.style.transition = '5s';
    brownBox.style.backgroundColor = 'red';
    brownBox.style.width = '150px';
    brownBox.style.height = '150px';
    brownBox.style.top = '150px';
    brownBox.style.right = '150px';
})