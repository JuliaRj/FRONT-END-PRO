
//  ДЗ 9.1. Сумма зарплат


// let company = {

//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//         web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}]
//     },
    
//     sumArray: function () {
//         for (let i = 0; i < array.length; i++) {
//             if (typeof array[i] === "number") {  
//                 sum += array[i];
//             }
//           }
//       },
// }
const company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        }
    ],
    development: {
        wev: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    },

}

function getSalarySum(array) {
    let salarySum = 0;

    if (Array.isArray(array)) {
        for (let ell of array) {
            salarySum += ell.salary;
        }
    } else {
        for (let insideArray in array) {
            salarySum += getSalarySum(array[insideArray]);
        }
    }

    return salarySum;
}

console.log(getSalarySum(company));