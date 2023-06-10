let myAudio1 = new Audio; 
let i=0; 
let mas= [ "music.mp3",
"https://mp3uk.net/mp3/files/ani-lorak-misha-marvin-uhozhu-mp3.mp3", "https://mp3uk.net/mp3/files/andrej-gubin-noch-mp3.mp3","Maneskin - Beggin .mp3","Maneskin - Gasoline.mp3","download.mp3"]// массив с ссылками на аудио 
myAudio1.src = mas[i]; 
$(".h2_music").html(mas[i]) 

myAudio1.autoplay=true; 
$(".b1").click(function(){ 
    myAudio1.play(); 
}) 
$(".b2").click(function(){ 
    myAudio1.pause(); 
}) 
$(".b3").click(function(){ 
    i++; 
    if(i>mas.length-1){ 
    i=0; 
    myAudio1.src = mas[i]; 
    $(".h2_music").html(mas[i]) 
} 
else{ 
    myAudio1.src = mas[i]; 
    $(".h2_music").html(mas[i]) 
} 
if($("li:nth-child(1)").html()==mas[i]){
    $("li:nth-child(1)").addClass("active")

    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(2)").html()==mas[i]){
    $("li:nth-child(2)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(3)").html()==mas[i]){
    $("li:nth-child(3)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(4)").html()==mas[i]){
    $("li:nth-child(4)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(5)").html()==mas[i]){
    $("li:nth-child(5)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(6)").html()==mas[i]){
    $("li:nth-child(6)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
  }
  else{
    alert("NO")
  }
}) 

$(".b4").click(function(){ 
    i++; 
    if(i<mas.length-1){ 
    i=5; 
    myAudio1.src = mas[i]; 
    $(".h2_music").html(mas[i])
} 
else { 
    myAudio1.src = mas[i]; 
    $(".h2_music").html(mas[i]) 
} 
 if($("li:nth-child(1)").html()==mas[i]){
    $("li:nth-child(1)").addClass("active")

    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(2)").html()==mas[i]){
    $("li:nth-child(2)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(3)").html()==mas[i]){
    $("li:nth-child(3)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(4)").html()==mas[i]){
    $("li:nth-child(4)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(5)").html()==mas[i]){
    $("li:nth-child(5)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(6)").removeClass("active")
  }
  else if($("li:nth-child(6)").html()==mas[i]){
    $("li:nth-child(6)").addClass("active")

    $("li:nth-child(1)").removeClass("active")
    $("li:nth-child(2)").removeClass("active")
    $("li:nth-child(3)").removeClass("active")
    $("li:nth-child(4)").removeClass("active")
    $("li:nth-child(5)").removeClass("active")
  }
  else{
    alert("NO")
  }
})
$("#range1").change(function(){
   myAudio1.volume=$("#range1").val()

})
$("#but1").click(function(){ 
    let a=prompt("Введите ссылку на аудио-трек:"); 
    mas.push(a); 
}) 
$("#but2").click(function(){
    let a=mas[Math.floor(Math.random()*mas.length)]
    myAudio1.src = a
    $(".h2_music").html(a) 
}) 

//alert($("li:nth-child(1)").html())