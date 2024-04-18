const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"Nous kave coze creole dans sa messaze la" + element.innerHTML;


document.getElementById("demo1").innerHTML = "Hello World!";



const element1 = document.getElementsByTagName("p");

document.getElementById("demo3").innerHTML = 'The text in first paragraph (index 0) is: ' + element1[3].innerHTML;
