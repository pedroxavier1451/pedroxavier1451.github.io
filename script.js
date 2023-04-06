console.log('Hello!');


function cambiarColor() {
  var texto = document.getElementById("miTexto");
  var texto2 = document.getElementById("miTexto2");
  var texto3 = document.getElementById("miTexto3");
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  texto.style.color = "rgb(" + r + "," + g + "," + b + ")";
  texto2.style.color = "rgb(" + r + "," + g + "," + b + ")";
  texto3.style.color = "rgb(" + r + "," + g + "," + b + ")";
}

setInterval(cambiarColor, 2000);
	
