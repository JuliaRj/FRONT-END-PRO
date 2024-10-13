
//  ДЗ 6.1. Написати функцію видалення масиву символів 

    function removeLetters(userText, lettersToRemove)
    {
        let result = '';
        for (let i = 0; i < userText.length; i++){
            if (!lettersToRemove.includes(userText[i])) {
                result += userText[i];
            }
        }
        return result;
        
    }
    let result = removeLetters(" hello world", ['l', 'd']);
    console.log(result);

//  ДЗ 6.2. Визначення середнього арифметичного. 

function calculateAverage(userArr){
    let sum = 0;
    let count = 0;
for (let numb of userArr){
        if (typeof numb === "number"){
            sum += numb;
            count++;
        }
}
 return sum/count;
}
console.log(calculateAverage([19, "hello", 8, "hi"]));

//  ДЗ 6.3.Функція видалення елементу. 

function removeEl(array, item){
    let resultArr = [];
    for (let numb of array){
        if (numb !== item){
            resultArr.push(numb);
        }
    }
    return resultArr;
}
const array = removeEl([1, 3, 4, 6, 2, 5, 7], 3);
console.log(array); 
