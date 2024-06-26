let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
  let parafrafo = document.querySelector(tag);
  parafrafo.innerHTML = texto;
  responsiveVoice.speak(texto,  'Brazilian Portuguese Female', {rate: 1.2});
};

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
};

exibirMensagemInicial()

function verificarChute(){
  let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    //removendo atributo disabled;
    document.getElementById('reiniciar').removeAttribute('disabled');
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    exibirTextoNaTela('p', mensagemTentativas);
  } else{
    if(chute > numeroSecreto){
      exibirTextoNaTela('h1', 'Errou!');
      exibirTextoNaTela('p', 'O número secreto é menor!');
    } else{
      exibirTextoNaTela('h1', 'Errou!');
      exibirTextoNaTela('p', 'O número secreto é maior!');
    };
    tentativas++;
    limparcampo()
  };
};

function  gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt((Math.random() * numeroLimite + 1));
   let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumeroSorteados = [];
   }
   if(listaDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();  
   } else {
    //.push adiciona coisa a lista sempre sendo o ultimo da fila
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
   }

}

//função de limpar o campo;
function limparcampo(){
  chute = document.querySelector('input');
  chute.value = '';
};

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparcampo();
  tentativas = 1;
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

