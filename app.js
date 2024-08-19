let numMax = 10;
let numSecreto;
let tentativas;
let listaNumSorteados = [];

novoJogo();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2}); //olhar site do responsive voice para mais informações
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', `Escolha um número entre 1 e ${numMax}`);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumSecreto(){
    let numSorteado =  parseInt(Math.random() *numMax +1);   
    if(listaNumSorteados.length == numMax){
        console.log('limpando lista de números sorteados-');
        listaNumSorteados = [];
    }
    if(listaNumSorteados.includes(numSorteado)){
        return gerarNumSecreto();
    }
    listaNumSorteados.push(numSorteado);
    console.log(listaNumSorteados);
    return numSorteado;
}

function novoJogo(){
    limparCampo();
    mensagemInicial()
    tentativas = 1;   
    numSecreto = gerarNumSecreto();
    console.log('Número secreto: ' + numSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute<1 || chute > numMax){
        exibirTexto('p', 'número fora do limite');
    }
    else if(chute == numSecreto){
        exibirTexto('h1', `Acertou!`);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você encontrou o número secreto em ${tentativas} ${palavraTentativa}`;       
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if( chute < numSecreto){
        exibirTexto('p', `O número é maior que ${chute}`);
        limparCampo();
    }
    else {
        exibirTexto('p', `O número é menor que ${chute}`);
        limparCampo();
    }
    tentativas++;
}


/* >>>>>>>>>>>>>>>>>>Desafio 1

function clicou(){
    console.log('o botão foi apertado');
}

function amoJs(){
    alert('Eu amo JS <3 ');
}

function cidade(){
    let cidade = prompt("Escolha uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}*/