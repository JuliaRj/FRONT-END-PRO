
//  ДЗ 7.1. Замикання
function getSum(){
    let sum = 0;
    return function (value) {
        sum += value;
        return sum;
    };
}
const sum = getSum();
console.log(sum(2));
console.log(sum(3));

//  ДЗ 7.2. Добуток через карування
function multiply (firstNumber) {
return function (secondNumber) {
    return firstNumber * secondNumber;
    }
}
console.log (multiply(5)(2));

//  ДЗ 7.3. Функція з циклом
function getNumber() {
    let number;
    for(let i = 0; i < 10; i++){
        let userNumber = prompt("Введіть число більше 100");
        if (userNumber === null) {
            console.log("Користувач вийшов");
            return null;}  else 
             if (isNaN(userNumber) || userNumber > 100 || i == 9){
                number = userNumber;
                break;
        }
      
    }
    console.log("Останнє введення:", number);
    return  number;
    
}
getNumber();