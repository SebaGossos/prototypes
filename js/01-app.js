const cliente = {
    name: 'Juan',
    balance: 500
}

console.log( cliente );

function Cliente( name, balance ) {
    this.name = name;
    this.balance = balance;
}

const juan = new Cliente('Juan', 500);

console.log( juan );