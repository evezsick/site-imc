var idade = document.getElementById("idade").value;

function checarIdade(){
  if(idade<=60){
    calculoIMCA()
  } else {
    calculoIMCI()
  }
}


function calculoIMCA(){
  var e1 = parseFloat(document.getElementById("alt").value);
  var e2 = parseFloat(document.getElementById("peso").value);
  var e4 = document.getElementById("imgch");
  var cont = (e2 / (e1 * e1)).toFixed([1]);
  document.getElementById("res").innerHTML = "Resultado: "+cont;

  if(cont<=18.5){
    e4.src="./imagens_imc/baixopeso.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Baixo Peso";
  }

  if(cont>=18.6 && cont <= 24.9){
    e4.src="./imagens_imc/normal.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Peso Ideal!";
  }

  if(cont>=25.0 && cont <= 29.9){
    e4.src="./imagens_imc/acimapeso.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Sobrepeso";
  }

  if(cont>=30.0 && cont <= 34.9){
    e4.src="./imagens_imc/obeso.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Obesidade de Classe 1";
  }

  if(cont>=35.0 && cont <= 39.9){
    e4.src="./imagens_imc/obs2.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Obesidade de Classe 2";
  }

  if(cont>=40.0){
    e4.src="./imagens_imc/obs2.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Obesidade de Classe 3";
  }
}

function calculoIMCI(){
  var e1 = parseFloat(document.getElementById("alt").value);
  var e2 = parseFloat(document.getElementById("peso").value);
  var e4 = document.getElementById("imgch");
  var cont = (e2 / (e1 * e1)).toFixed([1])
  document.getElementById("res").innerHTML = "Resultado: "+cont

  
  if(cont<=22){
    e4.src="./imagens_imc/baixopeso.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Baixo Peso";
  }

  if(cont>=22.1 && cont <= 27){
    e4.src="./imagens_imc/normal.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Peso Adequado!";
  }

  if(cont>=27.0){
    e4.src="./imagens_imc/acimapeso.png";
    let textres = document.getElementById("paragrafo");
    textres.innerHTML = "Sobrepeso";
  }
}