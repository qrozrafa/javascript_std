# Semana JS.

### ATER (aula, teoria, exercicio, revisão)

##### Quando você deve usar o .map():

Quando você precisa obter um novo array, com a mesma quantidade de itens do arrays original.

map() sempre precisa receber com argumento uma função, atraves da função vc especifica os itens que o novo array deve conter. Podendo receber três parametros (item, index, array).

**Exemplo**

```javascript
const numbers = [1,2,3];
//multiplicando o itens da array. Com metodo map()
const doubleNumbers = numbers.map(item => {
  return item * 2
});
//visualizando no console
console.log(doubleNumbers);

//Exemplo dois
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
];

//criando uma nova array com produtos >= de 30 recebendo um desconto de 50%
const saleProducts = products.map(product => {
  if (product.price >= 30) {
    return {
      name: product.name
      price: product.price / 2
    };
  };
  
  return product;
});

//visualizando no console
console.log(saleProducts);
```

---

##### Quando você deve usar o filter()

Quando você precisa obter um novo array, com uma quantidade de itens menor que a do array original.

Assim como o map(). o filter() precisa receber como argumento uma função, e essa funçao também vai ser executado para cada item do array que for indicada. Essa função também pode receber como parametros (item, index, array).

**Exemplo**

```javascript
const randomNumbers = [ 36, 99, 37, 63];
//reduzindo a array a cima com o metodo filter()
const numberGreaterThan37 = randomNumbers.filter(item => item > 37);

//visualizando no console
console.log(numberGreaterThan37);

//Exemplo dois
const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]
//selecinando usuarios premium
const premiumUsers = users.filter(user => user.premium);

//visualizando no console
console.log(premiumUsers)
```

---

##### Quando você deve usar o reduce()

Quando baseado no array original, você precisa "reduzir" o array à um valor.

Reduce(). pode receber quatros parametros, (accumulator, item, index, array).

**Exemplo**

```javascript
const numbers = [1,2,3]
//reduzindo a array a um numero
const sumResult = numbers.reduce((accumulator, item) => {accumulator, item}, 0);

//visualizando no console
console.log(sumResult);

//Exemplo dois
const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]
//Somando score do jogador Roger Melo
const rogerScore = phaseScores.recude((accumulator, phaseScore) => {
  if(phase.Score.name === 'Roger Melo') {
    return accumulator + phaseScore.score
  };
  
  return accumulator;
}, 0);

//visualizando no console
console.log(rogerScore);
```

---

