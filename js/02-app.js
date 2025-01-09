function Cliente( name, balance ) {
    this.name = name;
    this.balance = balance;
}

const juan = new Cliente('Juan', 500);

function formatClient( client ) {
    const { name, balance } = client;
    return `El Cliente ${ name } tiene un saldo de ${ balance } `;
}

function formatEnterprise( client ) {
    const { name, balance, category } = client;
    return `El Cliente ${ name } tiene un saldo de ${ balance } pertenece a ${category} `;
}

console.log( formatClient( juan ) );

function Empresa( name, balance, category ) {
    this.name = name;
    this.balance = balance;
    this.category = category;
}

const CCJ = new Empresa('Code with Winnie', 4000, 'Courses online');
console.log( formatEnterprise(CCJ) )