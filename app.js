const transactionUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');
const form = document.querySelector('#form');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

let dummyTransactions = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salario', amount: 300 },
    { id: 3, name: 'Torta de frango', amount: -10 },
    { id: 4, name: 'Violão', amount: 150 }
];

//removendo transação
const removeTransaction = ID => {
    dummyTransactions = dummyTransactions.filter(transaction => transaction.id !== ID);
    init();
};

//adicionando as transições no DOM
const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
    const amountWithoutOperator = Math.abs(transaction.amount);
    const li = document.createElement('li');

    li.classList.add(CSSClass);
    li.innerHTML= `
        ${transaction.name} 
        <span>${operator} R$ ${amountWithoutOperator}</span>
        <button class="delete-btn" onClick="removeTransaction(${transaction.id})">
            x
        </button> 
    `
    transactionUl.prepend(li);
};

//manipulando os valores receitas e despesas
const updateBalanceValues = () => {
    //criando uma array de amounts com metodo map
    const transactionsAmounts = dummyTransactions
        .map(transaction => transaction.amount);
    //somando total dos amounts
    const total = transactionsAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2);
    //somando as receitas
    const income = transactionsAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2);
    //somando as despesas
    const expense = Math.abs(transactionsAmounts
        .filter(value => value < 0)  
        .reduce((accumulator, value) => accumulator + value, 0))
        .toFixed(2);

    balanceDisplay.textContent = `R$ ${total}`;
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expense}`;
};

//preenchendo as informações mesmo com recarregamento da paginas
const init = () => {
    //limpando as ul para cada preenchimento
    transactionUl.innerHTML = '';
    //interando a transação da array, cada item dessa array sendo inserida no DOM
    dummyTransactions.forEach(addTransactionIntoDom);
    updateBalanceValues()
};

init();

//gerando id
const generateID = () => Math.round(Math.random() * 1000);

//list de evento, mas nao enviando.
form.addEventListener('submit', event => {
    event.preventDefault()
    
    const transactionName = inputTransactionName.value.trim();
    const transactionAmount = inputTransactionAmount.value.trim();

    //verificando se o form name ou amount estão vazio
    if (transactionName === '' || transactionAmount === '') {
        alert('Por favor, preencha tanto o nome quanto o valor da transação.');
        return
    }

    const transaction = { 
        id: generateID(), 
        name: transactionName, 
        amount: Number(transactionAmount)
    };

    //inserido o obj transaction no dummyTransactions
    dummyTransactions.push(transaction);
    init();

    //limpando os inputs
    inputTransactionName.value = '';
    inputTransactionAmount.value = '';
});