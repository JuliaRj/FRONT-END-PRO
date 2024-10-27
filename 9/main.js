
//  ДЗ 9.1. Сумма зарплат


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

function getSum(array) {
    let salarySum = 0;

    if (Array.isArray(array)) {
        for (let ell of array) {
            salarySum += ell.salary;
        }
    } else {
        for (let insideArray in array) {
            salarySum += getSum(array[insideArray]);
        }
    }

    return salarySum;
}

console.log(getSum(company));