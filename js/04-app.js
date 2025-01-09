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




function Persona( name, balance, phone ) {
    Cliente.call(this, name, balance )
    this.phone = phone;
}

Persona.prototype = Object.create( Cliente.prototype )
Persona.prototype.constructor = Cliente;


const juan = new Persona('juan', 5000, 23423432);
console.log( juan )
console.log( juan.clientBalanceName() )

Persona.prototype.showPhone = function() {
    return ` The phone of this person is ${ this.phone }`
}