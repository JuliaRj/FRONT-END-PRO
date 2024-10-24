
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



//  ДЗ 10.3. Книга контактів
