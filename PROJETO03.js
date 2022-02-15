const prompt = require('prompt-sync')();

let status = {
    fome: 0,
    saude: 100,
    xp: 0,
    sono: 0,
    arma: '',
};

if (status.sono >= 20) {
    console.log('Você está muito cansado!');
    console.log();
    console.log('Precis dormir urgentemente!');
    console.log();
    console.log('Vamos dormir?');
    console.log();
    let dormi = prompt('Digite sua resposta: ');
    if (dormi == 's' || dormi == 'sim') {
        dormir();
    } else {
        console.log('Você precisa dormir! Volte para casa para dormir logo!');
    }
}

let tempo = {
    hora: 0,
    dia: 1,
    passarTempo: function dataHora(a) {
        this.hora = this.hora + a;
        if (this.hora >= 24) {
            this.dia = this.dia + 1;
            this.hora = this.hora - 24;
        }
        console.log(`São ${tempo.hora} horas do dia ${tempo.dia}`);
    },
};

let inventario = [
    { alimento: 'Peixe', qtd: 0 },
    { alimento: 'Vaca', qtd: 0 },
    { alimento: 'Coelho', qtd: 0 },
    { alimento: 'Cenoura', qtd: 0 },
    { alimento: 'Batata', qtd: 0 },
];

let minerios = [
    { minerio: 'Diamante', qtd: 0 },
    { minerio: 'Ferro', qtd: 0 },
    { minerio: 'Pedra', qtd: 0 },
    { minerio: 'Ouro', qtd: 0 },
];
function zerarStatus() {
    status.fome = 0;
    status.saude = 100;
    status.sono = 0;
    status.xp = 0;
    tempo.dia = 1;
    tempo.hora = 0;
}
function gerarMinerios() {
    let geradorGeral = Math.floor(Math.random() * 4);
    for (let i in minerios) {
        if (geradorGeral == i) {
            minerios[i].qtd++;
            console.log(`Conseguimos minerar ${minerios[i].minerio} `);
            console.log();
            console.log(
                `Você tem no seu inventario de minerios:
              ${minerios[0].qtd} ${minerios[0].minerio} !
              ${minerios[1].qtd} ${minerios[1].minerio} !
              ${minerios[2].qtd} ${minerios[2].minerio} !
              ${minerios[3].qtd} ${minerios[3].minerio} !
             `,
            );
        }
    }
}

function dormir() {
    tempo.passarTempo(8);
    status.fome = status.fome + 6;
    status.sono = 0;
    console.log(`Você dormiu por 8 horas!`);
    console.log();
    console.log(`Agora são ${tempo.hora} horas!`);
    console.log();
}

if (status.fome >= 10) {
    console.log('Voce esta ficando com muita fome!');
    console.log();
    console.log('Voce precisa comer logo.');
    console.log();
    if (fome >= 20) {
        status.fome = 20;
    }
}

function aumentarSaude(a) {
    status.saude = status.saude + a;
    if (status.saude > 100) {
        status.saude = 100;
        console.log('Sua vida está cheia!');
        console.log();
    }
    console.log(`Você está com ${status.saude}% de saúde!`);
    console.log();
}

function comer() {
    console.log('Agora é hora de comer!');
    console.log();
    console.log(`Voce tem
     ${inventario[0].qtd} ${inventario[0].alimento}
     ${inventario[1].qtd} ${inventario[1].alimento}
     ${inventario[2].qtd} ${inventario[2].alimento}
     ${inventario[3].qtd} ${inventario[3].alimento}
     ${inventario[4].qtd} ${inventario[4].alimento}
     `);
    console.log();
    console.log('Digite 1 para peixe, 2 para vaca e assim sucessivamente...');
    console.log();
    console.log('O que voce quer comer?');
    console.log();
    let rpa = +prompt('Digite sua resposta: ');
    if (rpa == 1 && inventario[0].qtd > 0) {
        console.log();
        console.log(`Você comeu peixe!`);
        console.log();
        status.fome = status.fome - 6;
        status.saude = status.saude + 10;
        inventario[0].qtd--;
        console.log();
        aumentarSaude(20);
    } else if (rpa == 2 && inventario[1].qtd > 0) {
        console.log();
        console.log(`Você comeu carne de vaca!`);
        console.log();
        status.fome = status.fome - 6;
        status.saude = status.saude + 10;
        inventario[1].qtd--;
        console.log();
        aumentarSaude(20);
    } else if (rpa == 3 && inventario[2].qtd > 0) {
        console.log();
        console.log(`Você comeu carne de coelho!`);
        console.log();
        status.fome = status.fome - 6;
        status.saude = status.saude + 10;
        inventario[2].qtd--;
        console.log();
        aumentarSaude(20);
    } else if (rpa == 4 && inventario[3].qtd > 0) {
        console.log();
        console.log(`Você comeu cenoura!`);
        console.log();
        status.fome = status.fome - 6;
        status.saude = status.saude + 10;
        inventario[3].qtd--;
        console.log();
        aumentarSaude(20);
    } else if (rpa == 5 && inventario[4].qtd > 0) {
        console.log();
        console.log(`Você comeu batata!`);
        console.log();
        status.fome = status.fome - 6;
        status.saude = status.saude + 10;
        inventario[4].qtd--;
        console.log();
        aumentarSaude(20);
    }
}

function caçar() {
    console.log('Voce precisa caçar para ganhar alimento!');
    console.log();
    console.log('Parece ter um animal bem proximo, vamos la ver?');
    console.log();
    let irCaçar = prompt('Digite sua resposta: ');
    console.log();
    if (irCaçar === 'sim' || irCaçar === 's') {
        console.log('Tem um animal na sua frente! Voce quer ataca-lo?: ');
        console.log();
        let atacarAnimal = prompt('Digite sua resposta:');
        if (atacarAnimal == 'sim' || atacarAnimal == 's') {
            let geradoranimal = Math.floor(Math.random() * 3);
            console.log();
            console.log(`Você matou um ${inventario[geradoranimal].alimento}`);
            console.log();
            inventario[geradoranimal].qtd++;
            console.log(
                `Agora voce tem ${inventario[geradoranimal].qtd} ${inventario[geradoranimal].alimento}!`,
            );
            console.log();
            tempo.passarTempo(4);
            status.xp = status.xp + 50;
            status.fome = status.fome + 4;
            console.log();
        } else {
            tempo.passarTempo(2);
            status.sono = status.sono + 4;
            status.fome = status.fome + 2;
            console.log('Droga! Você deixou o animal escapar!');
        }
    } else {
        tempo.passarTempo(1);
        status.sono = status.sono + 2;
        status.fome = status.fome + 1;
        console.log(
            'Entendido! Nao se esqueça de que voce precisa caçar para se alimentar!',
        );
    }
}

function minerar() {
    console.log();
    console.log(
        `Voce precisa minerar para ganhar suprimentos, para fazer armas, armaduras para conseguir derrotar o grande dragão!`,
    );
    console.log();
    console.log('Vamos começar a mineração? ');
    console.log();
    let minerar = prompt('Digite sua resposta: ');
    console.log();
    while (minerar == 'sim' || minerar == 's') {
        console.log();
        gerarMinerios();
        console.log();
        status.sono = status.sono + 4;
        status.fome = status.fome + 5;
        status.xp = status.xp + 20;
        status.saude = status.saude - 10;
        tempo.passarTempo(2);
        console.log();
        console.log('Deseja minerar novamente?');
        minerar = prompt('Digite sua resposta: ');
        console.log();
    }
    tempo.passarTempo(1);
    status.sono = status.sono + 1;
    status.fome = status.fome + 2;
    console.log();
    console.log(
        'Volte mais tarde para minerar! Voce precisa muito de minerios!',
    );
}

function atacarMob() {
    console.log('Tem um zumbi te atacando, o que voce quer fazer?: ');
    console.log();
    let ratacarMob = prompt('atacar ou fugir?: ');
    console.log();
    if (ratacarMob == 'atacar') {
        console.log('Você matou o zumbi!');
        console.log();
        status.sono = status.sono + 4;
        status.fome = status.fome + 2;
        status.saude = status.saude - 10;
        status.xp = status.xp + 100;
        tempo.passarTempo(1);
        console.log();
    } else if (ratacarMob == 'fugir') {
        console.log('Você fugiu do zumbi');
        status.sono = status.sono + 2;
        console.log();
        status.fome = status.fome + 2;
        status.saude = status.saude - 10;
    }
}

function matarDragaofim() {
    let vidaDragao = 100;
    console.log(
        'Chegamos ao momento tão esperado, vamos matar o grande dragão!',
    );
    console.log();
    console.log('Voce quer atacar o dragão?');
    let atacarDragao = prompt('Digite sua resposta');
    while (atacarDragao == 's' || atacarDragao == 'sim') {
        vidaDragao -= 20;
        console.log(
            `Você deu 20 de dano no dragão, agora ele esta com ${vidaDragao} de vida!`,
        );
        atacarDragao = prompt('Quer ataca-lo denovo? ');
        console.log();
        if (vidaDragao <= 20) {
            console.log(`Você conseguiu matar o grande Dragão!!!!!`);
            console.log();
            console.log(`Meus PARABENSSSSS!!!!!!!`);
            console.log(`Você conseguiu ZERAR O JOGO! ISSO MESMO`);
            status.xp += 1000000;
            console.log(
                `Você chegou ao nivel: ${status.xp}, Voce esta no nivel maximo.`,
            );
            console.log('Até mais!');
            break;
        }
    }
}

function portalFim() {
    if (minerios[3].qtd < 4) {
        console.log(`Voce nao tem 4 ouros para fazer o portal agora!`);
        console.log();
        console.log(`Minere mais e tente mais tarde!`);
        tempo.passarTempo(1);
        status.fome += 2;
    } else if (minerios[3].qtd >= 4) {
        console.log(`Conseguimos o portal para o fim! `);
        console.log();
        console.log('Você quer enfrentar o grande dragao agora?');
        console.log();
        let irdragao = prompt('Digite sua resposta: ');
        console.log();
        if (
            (irdragao == 's' || irdragao == 'sim') &&
            status.arma == 'espada suprema'
        ) {
            matarDragaofim();
        } else if (
            irdragao == 's' ||
            (irdragao == 'sim' && status.arma != 'espada suprema')
        ) {
            console.log(`Voce nao tem a espada suprema!`);
            console.log();
        } else {
            console.log('Tudo bem! A qualquer hora voce pode vir!');
            console.log();
        }
    }
}

function fazerEspada() {
    if (minerios[0].qtd < 5) {
        console.log(
            `Voce não possui diamantes suficiente para fazer uma espada! `,
        );
        console.log();
    } else if (minerios[0].qtd >= 6) {
        console.log(`Voce conseguiu fazer a espada SUPREMA!`);
        console.log();
        console.log(`Agora voce ja consegue matar o dragao do fim!`);
        console.log();
        status.arma = 'espada suprema';
    }
}

// ----------------------------------------------------------------------------

console.log();
console.log('Hoje vamos jogar: ');
console.log();
console.log(`   MINECRAFT       `);
console.log();
console.log('Seu objetivo é:');
console.log(`
-Sobreviver,

-Minerar bastante,

-Conseguir 4 ouros para fazer o portal do fim,

-Conseguir 2 diamantes para fazer uma espada,

-Ir para a dimensão do fim e matar o grande dragão!`);
console.log();
console.log('Vamos comecar o jogo?');
let iniciarjogo = prompt('Digite sua resposta: ');
console.log();
while (iniciarjogo == 's' || iniciarjogo == 'sim') {
    console.log();
    console.log(`Agora são ${tempo.hora} horas do dia ${tempo.dia}`);
    console.log();
    console.log('Vamos para o abrigo seguro?');
    var abrigo = prompt('Digite sua resposta: ');
    while (abrigo == 's' || abrigo == 'sim') {
        console.log('Voce está no abrigo seguro! o que vamos fazer agora?');
        console.log();
        if (status.fome >= 10) {
            console.log('Voce esta ficando com muita fome!');
            console.log();
            console.log('Voce precisa comer logo.');
            console.log();
            if (status.fome >= 20) {
                status.fome = 20;
                status.saude -= 1;
                console.log('Voce perdeu 1 de vida!');
            }
        }
        if (status.saude <= 0) {
            console.log(`Você morreu ):!`);
            console.log();
            zerarStatus();
            iniciarjogo = prompt(`Deseja jogar denovo?`);
            if (iniciarjogo != 's' || iniciarjogo != 'sim') {
                break;
            }
        }
        console.log(`Voce está com:

        ${status.fome} de fome,
        ${status.saude} de vida,
        ${status.sono} de sono
        ${status.xp} de experiencia!
        `);
        console.log();
        console.log(`
    Digite 1 para minerar,
    Digite 2 para ir caçar,
    Digite 3 para dormir,
    Digite 4 para ir comer,
    Digite 5 para fazer o portal do fim,
    Digite 6 para fazer uma espada,
    Digite 7 para parar o jogo! `);
        console.log();
        let decisao = +prompt('Digite sua resposta: ');
        console.log();
        if (decisao == 1) {
            minerar();
            status.fome = 20;
        } else if (decisao == 2) {
            caçar();
        } else if (decisao == 3) {
            dormir();
        } else if (decisao == 4) {
            comer();
        } else if (decisao == 5) {
            portalFim();
        } else if (decisao == 6) {
            fazerEspada();
        } else if (decisao == 7) {
            console.log('Obrigado por jogar!');
            break;
        } else if (
            decisao != 1 ||
            decisao != 2 ||
            decisao != 3 ||
            decisao != 4 ||
            decisao != 5 ||
            decisao != 6 ||
            decisao != 7
        ) {
            decisao = +prompt('Numero inválido, Digite novamente:  ');
        }
        abrigo = 's';
    }
    iniciarjogo = prompt('Deseja iniciar o jogo denovo?');
    if (iniciarjogo == 's' || iniciarjogo == 'sim') {
        zerarStatus();
    }
}
