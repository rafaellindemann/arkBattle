var baralho = new Array()
var mao1 = new Array()
var mao2 = new Array()  
var estagiario = new Estagiario()
var vencedor = 'Ninguém'
var jogadorDaVez = parseInt(Math.random()*2 + 1)
var mesa = new Array()
var jogando = 1
    // 1: uma carta aparecendo, outra escondida (repeitando jogadorDaVez)
    // 2: duas cartas aparecendo, status vencedor em verde, perdedor em vermelho

var resultado = 0 // mostra o resultado da última mão jogada
    // 0: empate 
    // 1: vitória do player 1
    // 2: vitória do player 2

var mapaDeAtributos = ['Nome', 'Vida', 'Estamina', 'Oxigenio', 'Comida', 'Peso', 'Dano', 'Velocidade', 'Cores']

///////// cores //////
var corFundoAtt = '#ffffff10'//'black'
var corVenceu = 'green'
var corPerdeu = 'red'
var corEmpate = 'goldenrod'


var debug = 1

estagiario.inicializarSistema()
estagiario.iniciarPartida()
estagiario.mostrarCreditos()


function mostrarResultado(res, nomeAtributo)
{
    mostrarCarta1()
    mostrarCarta2()
    switch(res)
    {
        case 0: document.getElementById('div'+nomeAtributo+'1').style.backgroundColor = corEmpate
                document.getElementById('div'+nomeAtributo+'2').style.backgroundColor = corEmpate
            break
        case 1: document.getElementById('div'+nomeAtributo+'1').style.backgroundColor = corVenceu
                document.getElementById('div'+nomeAtributo+'2').style.backgroundColor = corPerdeu
            break
        case 2: document.getElementById('div'+nomeAtributo+'1').style.backgroundColor = corPerdeu
                document.getElementById('div'+nomeAtributo+'2').style.backgroundColor = corVenceu 
            break
    }
}

function compararAtributos(at1, at2, nomeAtributo)
{
    if(at1 > at2)
    {// 1 ganhou
        resultado = 1
    }else
    {
        if(at2 > at1)
        {// 2 ganhou
            resultado = 2
        }else
        {// empate
            resultado = 0
        }
    }
    mostrarResultado(resultado, nomeAtributo)   
}

function mudarJogadorDaVez()
{
    if(jogadorDaVez == 1)
    {
        jogadorDaVez = 2
    }else
    {
        jogadorDaVez = 1
    }
}

function tratarVitoria1()
{
    // primeiro as cartas das mãos vão pra mesa...
    mesa.push(mao1.splice(0, 1)[0])
    mesa.push(mao2.splice(0, 1)[0])
    // depois, toda a mesa vai para a mão1
    while(mesa.length > 0)
    {
        mao1.push(mesa.splice(0, 1)[0])
    }
    mudarJogadorDaVez()
}

function tratarVitoria2()
{
    // cartas pra mesa
    mesa.push(mao1.splice(0, 1)[0])
    mesa.push(mao2.splice(0, 1)[0])
    // cartas da mesa pra mao2
    while(mesa.length > 0)
    {
        mao2.push(mesa[0])
        mesa.splice(0, 1)
    }
    mudarJogadorDaVez()
}

function tratarEmpate()
{
    // cartas pra mesa
    mesa.push(mao1.splice(0, 1)[0])
    mesa.push(mao2.splice(0, 1)[0])
}



function testar()
{

}

function getAtributoDaID(id)
{
    atributo = ''
    for(i=3; i<id.length-1; i++)
    {
        atributo+= id[i]
    }
    return atributo
}

function identificarClique(id)
{
    var atributo = ''
    for(i=3; i<id.length-1; i++)
    {
        atributo+= id[i]
    }
    var player = parseInt(id[id.length-1])
    var numero = mapaDeAtributos.indexOf(atributo)
    return new Clique(atributo, numero, player)
}

function movimentarCartas()
{
    switch(resultado)
    {
        case 0: tratarEmpate()
        break
        case 1: tratarVitoria1()
        break
        case 2: tratarVitoria2()
        break
    }
}

function limparBackgroundAtributos()
{
    for(i=1; i<=8; i++)
    {
        document.getElementById('div'+mapaDeAtributos[i]+'1').style.backgroundColor = corFundoAtt
        document.getElementById('div'+mapaDeAtributos[i]+'2').style.backgroundColor = corFundoAtt
    }
}

function tratarClique(e)
{
    var clique = identificarClique(e.composedPath()[0].id)
    // console.log(clique);
    if(clique.numeroAtributo != -1 && clique.nomeAtributo != 'Nome') // filtra se é clique em atributo jogável
    {
        if(vencedor == 'Ninguém')
        {
            if(jogando == 1 && jogadorDaVez == clique.player) // tá em jogo e o clique é do jogador da vez
            {
                var at1 = mao1[0].getAtributoPorNumero(clique.numeroAtributo)
                var at2 = mao2[0].getAtributoPorNumero(clique.numeroAtributo)
                compararAtributos(at1, at2, clique.nomeAtributo) 
                jogando = 2
            }else if(jogando == 2)
            {
                movimentarCartas()
                limparBackgroundAtributos()
                if(jogadorDaVez == 1)
                {
                    mostrarCarta1()
                    esconderCarta2()
                }else
                {
                    esconderCarta1()
                    mostrarCarta2()
                }
                jogando = 1
            }
        }
    }

    verificarVencedor()
    atualizarTela()
}

function verificarVencedor()
{
    if(mao1.length == 0)
    {
        vencedor = 'Player 2'
        alert(vencedor)
    }
    if(mao2.length == 0)
    {
        vencedor = 'Player 1'
        alert(vencedor)
    }
}

function atualizarTela()
{
    if(vencedor == 'Ninguém')
    {
        if(jogando == 1)
        {
            if(jogadorDaVez == 1)
            {
                mostrarCarta1()
                esconderCarta2()
        
            }else
            {
                mostrarCarta2()
                esconderCarta1()
            }
        }else // jogando == 2
        {
            mostrarCarta1()
            mostrarCarta2()
        }

    }
    // placar/baralhos
    document.getElementById('divPlacarEsquerda').innerHTML = mao1.length
    document.getElementById('divPlacarDireita').innerHTML = mao2.length
    if(mesa.length>0) 
    {
        document.getElementById('divCabecalho').innerHTML = mesa.length
    }else
    {
        document.getElementById('divCabecalho').innerHTML = ''
    }
}

document.onclick = tratarClique

function criarNomeDoArquivo(nomeDino)
{
    var nome = nomeDino.split(' ').join('') // remove espaços que tiver
    nome = nome.toLowerCase()   
    return 'img/dinos/' + nome + '.png'
}

function mostrarCarta1()
    {
        var nome = criarNomeDoArquivo(mao1[0].nome)
        document.getElementById('imgFoto1').setAttribute('src', nome)
        document.getElementById('divNome1').innerHTML = `${mao1[0].nome}`
        document.getElementById('divVida1').innerHTML = `Vida:<BR>${mao1[0].vida}`
        document.getElementById('divEstamina1').innerHTML = `Estamina:<BR>${mao1[0].estamina}`
        document.getElementById('divOxigenio1').innerHTML = `Oxigênio:<BR>${mao1[0].oxigenio}`
        document.getElementById('divComida1').innerHTML = `Comida:<BR>${mao1[0].comida}`
        document.getElementById('divPeso1').innerHTML = `Peso:<BR>${mao1[0].peso}`
        document.getElementById('divDano1').innerHTML = `Dano:<BR>${mao1[0].dano}`
        document.getElementById('divVelocidade1').innerHTML = `Velocidade:<BR>${mao1[0].velocidade}`
        document.getElementById('divCores1').innerHTML = `Cores:<BR>${mao1[0].cores}`
    }

    function mostrarCarta2()
    {
        var nome = criarNomeDoArquivo(mao2[0].nome)
        document.getElementById('imgFoto2').setAttribute('src', nome)
        document.getElementById('divNome2').innerHTML = `${mao2[0].nome}`
        document.getElementById('divVida2').innerHTML = `Vida:<BR>${mao2[0].vida}`
        document.getElementById('divEstamina2').innerHTML = `Estamina:<BR>${mao2[0].estamina}`
        document.getElementById('divOxigenio2').innerHTML = `Oxigênio:<BR>${mao2[0].oxigenio}`
        document.getElementById('divComida2').innerHTML = `Comida:<BR>${mao2[0].comida}`
        document.getElementById('divPeso2').innerHTML = `Peso:<BR>${mao2[0].peso}`
        document.getElementById('divDano2').innerHTML = `Dano:<BR>${mao2[0].dano}`
        document.getElementById('divVelocidade2').innerHTML = `Velocidade:<BR>${mao2[0].velocidade}`
        document.getElementById('divCores2').innerHTML = `Cores:<BR>${mao2[0].cores}`
    }

    function esconderCarta1()
    {
        document.getElementById('imgFoto1').setAttribute('src', 'img/vazio.png')
        document.getElementById('divNome1').innerHTML = ''
        document.getElementById('divVida1').innerHTML = ''
        document.getElementById('divEstamina1').innerHTML = ''
        document.getElementById('divOxigenio1').innerHTML = ''
        document.getElementById('divComida1').innerHTML = ''
        document.getElementById('divPeso1').innerHTML = ''
        document.getElementById('divDano1').innerHTML = ''
        document.getElementById('divVelocidade1').innerHTML = ''
        document.getElementById('divCores1').innerHTML = ''
    }

    function esconderCarta2()
    {
        document.getElementById('imgFoto2').setAttribute('src', 'img/vazio.png')
        document.getElementById('divNome2').innerHTML = ''
        document.getElementById('divVida2').innerHTML = ''
        document.getElementById('divEstamina2').innerHTML = ''
        document.getElementById('divOxigenio2').innerHTML = ''
        document.getElementById('divComida2').innerHTML = ''
        document.getElementById('divPeso2').innerHTML = ''
        document.getElementById('divDano2').innerHTML = ''
        document.getElementById('divVelocidade2').innerHTML = ''
        document.getElementById('divCores2').innerHTML = ''
    }