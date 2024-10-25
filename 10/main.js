
//  ДЗ 10.1. Картка користувача
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'Odessa',
   getInfo: function () {
    
    for (const key in user) {
       
        if (typeof user[key] !== 'function'){
            console.log(`${key}: ${user[key]}`);
        }
      }
       return this;
   }
}
user.getInfo();


//  ДЗ 10.2. Отримання парних чисел з масиву
const mass = [1, 2, 2, 3, 4];
let newMass = [];

for (const number of mass) {
    if (number % 2 == 0){
        newMass.push(number);
    }
  };
console.log(newMass);
//  ДЗ 10.3. Книга контактів
const phoneBook = {
    contacts: [
        {
            name: "Julia Shvets",
            phone: "+35145015215",
            email: "myauk@.gmail.com"
        },
        {
            name: "John Wick",
            phone: "+3515322215",
            email: "aufff@.gmail.com"
        },
        {
            name: "Taras Shevchenko",
            phone: "+3515245215",
            email: "My_thirteenth_year_was_wearing_on@.gmail.com"
        },
    ],
    findContact(findName){
   return this.contacts.find(contact => contact.name === findName)
},
    addContact(name, phone, email){
     this.contacts.push({name, phone, email})
 }
};

console.log(phoneBook.findContact("John Wick"));
phoneBook.addContact("Freddy Krueger", "+3451515441", "freddy_will_come_for_you@mail.com");
console.log(phoneBook.findContact("Freddy Krueger"));