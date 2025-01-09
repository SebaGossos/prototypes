function Cliente( name, balance ) {
    this.name = name;
    this.balance = balance;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    
    if( this.balance > 10000 ) {
        tipo = 'Gold'
    } else if( this.balance > 5000) {
        tipo = 'Platinum'
    } else {
        tipo = 'Bronce'
    }
    return tipo;

}

Cliente.prototype.clientBalanceName = function() {
    return `Name: ${ this.name }, Balance ${ this.balance }, Client Tipe: ${ this.tipoCliente() }`
}

Cliente.prototype.withDrawBalance = function( withdraw ) {
    this.balance -= withdraw;
}

// instance 
const pedro = new Cliente('pedro', 6000);
console.log( pedro );
console.log( pedro.tipoCliente() )
console.log( pedro.clientBalanceName() )
pedro.withDrawBalance( 1000 );
console.log( pedro, pedro.tipoCliente() )

