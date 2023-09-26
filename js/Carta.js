class Carta{
    constructor(nome, vida, estamina, oxigenio, comida, peso, dano, velocidade, cores){
        this.nome = nome;
        this.vida = vida;
        this.estamina = estamina;
        this.oxigenio = oxigenio;
        this.comida = comida;
        this.peso = peso;
        this.dano = dano;
        this.velocidade = velocidade;
        this.cores = cores;
    }

    getNome()
    {
        return this.nome
    }

    getAtributoPorNumero(n)
    {
        switch(n)
        {
            case 0: return this.nome
            case 1: return this.vida
            case 2: return this.estamina
            case 3: return this.oxigenio
            case 4: return this.comida
            case 5: return this.peso
            case 6: return this.dano
            case 7: return this.velocidade
            case 8: return this.cores
        }
    }

}