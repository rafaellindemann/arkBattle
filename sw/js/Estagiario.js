class Estagiario{
    constructor()
    {

    }

    mostrarCreditos()
    {
        console.log('Isto é apenas um brinquedo, fiz só pra me divertir com HTML, CSS e JS. Não leva isso muito a sério não :D');
        console.log('Se quiser espiar o projeto por dentro vai ali no https://github.com/rafaellindemann/arkBattle');
    }

    iniciarPartida()
    {
        if(vencedor == 'Ninguém')
        {
            atualizarTela()
        }
    }

    criarBaralho()
    {
        baralho.push(new Carta('Alossauro', 630, 250, 150, 3000, 380, 35, 1579, 3));
        baralho.push(new Carta('Anquilossauro', 700, 175, 150, 3000, 250, 50, 750, 6)); // *** velTerra: 480, velAgua: 750
        baralho.push(new Carta('Arqueopteryx', 125, 150, 150, 900, 30, 5, 588, 4));// maiorVel é wild: 588; tamedVel é 411
        baralho.push(new Carta('Argentavis', 365, 400, 150, 2000, 400, 25, 1350, 5));
        baralho.push(new Carta('Baryonyx', 440, 325, 225, 2250, 325, 35, 1587, 4));
        baralho.push(new Carta('Basilossauro', 2400, 300, 150, 8000, 700, 47, 1350, 2));
        baralho.push(new Carta('Brontossauro', 2070, 240, 150, 10000, 1600, 60, 405, 4));
        baralho.push(new Carta('Carnotauro', 420, 300, 150, 2000, 300, 35, 1291, 4));
        baralho.push(new Carta('Compy', 50, 100, 150, 450, 25, 4, 672, 4));
        baralho.push(new Carta('Deinonico', 200, 150, 150, 1200, 140, 30, 1728, 5));
        baralho.push(new Carta('Dilofossauro', 130, 100, 150, 450, 45, 10, 594, 6));
        baralho.push(new Carta('Dimetrodonte', 350, 300, 500, 1500, 250, 20, 253, 5));
        baralho.push(new Carta('Dimorfodonte', 125, 150, 150, 900, 50, 23, 810, 3));
        baralho.push(new Carta('Diplodoco', 1700, 550, 300, 10000, 800, 0, 1350, 4));
        baralho.push(new Carta('Dunkleosteus', 710, 200, 150, 2000, 910, 60, 1213, 3));
        baralho.push(new Carta('Espinossauro', 700, 350, 650, 2600, 350, 60, 1717, 4));
        baralho.push(new Carta('Estegossauro', 650, 300, 150, 6000, 500, 42, 413, 6));
        baralho.push(new Carta('Galimimo', 150, 300, 150, 1000, 270, 8, 2189, 4));
        baralho.push(new Carta('Giganotossauro', 80000, 400, 150, 4000, 700, 500, 1681, 3)); // ***nerfar estamina?
        baralho.push(new Carta('Iguanodonte', 250, 200, 150, 1800, 375, 25, 1437, 3)); // *** buff de estamina pelo quadrúpede?
        baralho.push(new Carta('Kentrossauro', 650, 300, 150, 6000, 500, 42, 600, 6));
        baralho.push(new Carta('Leedsichthys', 4400, 500, 500, 8000, 1800, 115, 1485, 3));
        baralho.push(new Carta('Liopleurodonte', 3200, 800, 400, 2000, 1000, 40, 500, 3));
        baralho.push(new Carta('Listrossauro', 90, 100, 215, 500, 90, 6, 264, 3));
        baralho.push(new Carta('Megalania', 480, 400, 200, 1500, 400, 16, 650, 3));
        baralho.push(new Carta('Megalodonte', 600, 320, 150, 2000, 250, 40, 2070, 3));
        baralho.push(new Carta('Megalossauro', 1025, 300, 150, 2000, 300, 75, 1260, 3));
        baralho.push(new Carta('Microraptor', 130, 100, 150, 450, 45, 8, 2700, 5));
        baralho.push(new Carta('Mosassauro', 3600, 400, 150, 8000, 1300, 100, 3520, 4));
        baralho.push(new Carta('Oviraptor', 140, 120, 150, 900, 100, 12, 1551, 5));
        baralho.push(new Carta('Paquicefalossauro', 175, 150, 150, 1200, 150, 10, 622, 4));
        baralho.push(new Carta('Paquirrinossauro', 375, 150, 150, 3000, 365, 28, 632, 4));
        baralho.push(new Carta('Parassaurolofo', 200, 450, 150, 1500, 480, 12, 765, 6));
        baralho.push(new Carta('Plesiossauro', 2400, 800, 150, 5000, 800, 75, 3600, 5));
        baralho.push(new Carta('Pteranodonte', 210, 150, 150, 1200, 120, 50, 2561, 6));
        baralho.push(new Carta('Quetzalquatlus', 1200, 800, 150, 1200, 800, 32, 1296, 6));
        baralho.push(new Carta('Raptor', 200, 150, 150, 1200, 140, 15, 1324, 5));
        baralho.push(new Carta('Rex', 1100, 420, 150, 3000, 500, 62, 1104, 5));
        baralho.push(new Carta('Sarco', 400, 450, 5000, 1500, 300, 45, 962, 5));
        baralho.push(new Carta('Tapejara', 325, 250, 150, 1600, 280, 18, 1528, 5));
        baralho.push(new Carta('Ave do Terror', 270, 160, 150, 1500, 120, 18, 1440, 3));
        baralho.push(new Carta('Therizinossauro', 870, 300, 150, 3000, 365, 52, 1304, 4));
        baralho.push(new Carta('Titanossauro', 230000, 2000, 600, 8640, 50000, 1000, 686, 3));
        baralho.push(new Carta('Triceratopo', 375, 150, 150, 3000, 365, 32, 623, 5));
        baralho.push(new Carta('Troodon', 200, 150, 150, 200, 140, 7, 1152, 3));
        baralho.push(new Carta('Tropeognato', 360, 250, 150, 1600, 340, 18, 1540, 6));
        baralho.push(new Carta('Tusoteuthis', 2700, 300, 215, 3200, 800, 65, 2250, 4));
        baralho.push(new Carta('Yutirano', 1100, 420, 150, 3000, 500, 55, 1610, 4));
        
    }

    criarMaos()
    {
        // decidir/ler o número de cartas que vão pro jogo
        // var n = Number(prompt("Temos " + baralho.length + ' cartas. Com quantas você quer jogar?'))
        var n = baralho.length // *** só pra evitar o promp chato durante o desenvolvimento
        if(n<2) 
        {
            n = baralho.length
            alert('Número inválido!\nVamos jogar com o baralho inteiro!')
        }
        // dividir o baralho aleatoriamente entre mao1 e mao2
        n = parseInt(n/2)
        for(var i=0; i<n; i++)
        {
            var indice = parseInt(Math.random()*baralho.length)
            mao1.push(baralho.splice(indice,1)[0]) 
            indice = parseInt(Math.random()*baralho.length)
            mao2.push(baralho.splice(indice,1)[0])
        }
    }

    inicializarSistema()
    {
        var wp = Math.ceil(Math.random()*11)
        document.body.style.backgroundImage = `url('img/wp/${wp}.jpg')`;
        this.criarBaralho()
        this.criarMaos()
    }
}





