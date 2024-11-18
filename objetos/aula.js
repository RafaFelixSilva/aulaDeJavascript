const rafael = {
    nome: 'Rafael Felix da Silva',
    idade: 34,

    descrever: function() {
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}`);
    }
};

console.log(rafael.nome);
console.log(rafael.idade);
console.log(rafael);

rafael.altura = 1.65;

console.log(rafael);

delete rafael.nome;

console.log(rafael);

rafael.nome = 'Rafael Felix da Silva';

rafael.descrever();