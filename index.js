function cresente() {
  var numbers = [1, 3, 4, 9, 5, 7, 2, 6, 20, 11, 12, 17];
  numbers.sort(function (x, y) {
    return x - y;
  });
  window.alert(numbers);
}


function decresente() {
  var numbers = [1, 3, 4, 9, 5, 7, 2, 6, 20, 11, 12, 17];
  numbers.sort(function (x, y) {
    if (x > y){
      return -1;
    }
    if (x < y){
      return 1;
    }
    return 0
  });
  window.alert(numbers);
}

function contaCaracteres(){
    var texto = document.getElementById("tamanhoTexto").innerHTML.length
    window.alert('O tamanho da frase é ' + texto)
}

function substituirPalavras(){
    var texto = "O joão robou pão na casa do marcelo".replace('marcelo','joão')
    window.alert(texto)
} 

function substituirPalavras2(){
  var texto = "O joão robou pão na casa do marcelo".replace('pão','torta')
  window.alert(texto)
} 

function removerPalavras(){
  var texto = "O joão robou pão na casa do marcelo".replace('joão','')
  window.alert(texto)
}

function removerPalavrasTextoSlice(){
  var texto = "O joão robou pão na casa do marcelo".slice(0,6)
  window.alert(texto)
}

function adicionarTexto(){
  var texto = "O joão robou pão na casa do marcelo "
  var concatenacao = "da IBRS"
  result = texto + concatenacao
  window.alert(result)
}

function textoSplit(){
  var texto = "O joão robou pão na casa do marcelo "
  var concatenacao = "da IBRS"
  var palavra = texto + concatenacao
  result = palavra.split('O joão robou pão na casa do marcelo')
  window.alert(result)
}


function addLista(){
  var lista = ['João','Marcelo','Marcus','Lucas','Nelson']
  lista.push('Azeite')
  window.alert(lista)
}


function removeLista(){
  var lista = ['João','Marcelo','Marcus','Lucas','Nelson']
  lista.splice(1,1)
  window.alert(lista)
}


function ordenaLista(){
  var lista = ['João','Marcelo','Marcus','Lucas','Nelson']
  window.alert(lista.sort())
}


function tamanhoLista(){
  var lista = ['João','Marcelo','Marcus','Lucas','Nelson']
  window.alert(lista.length)
}


