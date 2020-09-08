console.log('')
console.log('             Opdracht: JavaScript Functies (Conceptueel)')
console.log('             ============================================')
console.log('')




console.log('=============== Deel A: Schrijf je eerste functie =====================')
function dutchBread() {
    console.log('Get one slice of bread');
    console.log('add salade on it');
    console.log('add some salami on it');
    console.log('put anoter slice of bread on it');
}
dutchBread();
console.log('')







console.log('============== Deel B: Schrijf een functie met een argument ===========')
const makeSandwich = topping => { // functie declaration 
    console.log(`Get one slice of bread with ${topping}`);
}
makeSandwich('cheese'); // function called
makeSandwich('siroop'); // function called
console.log('');







console.log('============ Deel C: gebruik een return statement =====================');
const calculateDiscountedPrice = (totalAmount, discount) => {
    let total = totalAmount - discount;
    return new Intl.NumberFormat('nl-NL',
        { style: 'currency', currency: 'EUR' })
        .format(Math.floor(total));
}
console.log(`Met de korting hoef je maar ${calculateDiscountedPrice(20, 5.20)} te betalen.`);
console.log('');







console.log('============= Deel D: gebruik meerdere return statements ==============');
const spendingMoreThenTwentyFive = (totalAmount, discount) => {
    if (totalAmount < 25) {
        return new Intl.NumberFormat('nl-NL',
            { style: 'currency', currency: 'EUR' })
            .format(Math.floor(totalAmount));
    } else {
        let endbedrag = totalAmount - discount
        return new Intl.NumberFormat('nl-NL',
            { style: 'currency', currency: 'EUR' })
            .format(Math.floor(endbedrag));
    }
}
console.log(spendingMoreThenTwentyFive(26.00, 5.20))
console.log('');


