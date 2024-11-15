function Student(firstName, lastName, birthday, rating) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthday = birthday;
    this._rating = rating;
    this._attendance = Array(25).fill(null);
    this._attendanceIndex = 0;
  }
  
  Object.defineProperty(Student.prototype, 'firstName', {
    get: function() {
      return this._firstName;
    },
    set: function(newFirstName) {
      this._firstName = newFirstName;
    }
  });
  
  Object.defineProperty(Student.prototype, 'lastName', {
    get: function() {
      return this._lastName;
    },
    set: function(newLastName) {
      this._lastName = newLastName;
    }
  });
  
  Object.defineProperty(Student.prototype, 'birthday', {
    get: function() {
      return this._birthday;
    },
    set: function(newBirthday) {
      this._birthday = newBirthday;
    }
  });
  
  Object.defineProperty(Student.prototype, 'rating', {
    get: function() {
      return this._rating;
    },
    set: function(newRating) {
      this._rating = newRating;
    }
  });
  
  Student.prototype.present = function() {
    if (this._attendanceIndex < this._attendance.length) {
      this._attendance[this._attendanceIndex] = true;
      this._attendanceIndex++;
    } else {
      console.log("Студент уже має максимальну кількість відміток відвідування.");
    }
  };
  
  Student.prototype.absent = function() {
    if (this._attendanceIndex < this._attendance.length) {
      this._attendance[this._attendanceIndex] = false;
      this._attendanceIndex++;
    } else {
      console.log("Студент уже має максимальну кількість відміток відвідування.");
    }
  };
  
  Student.prototype.getAge = function() {
    const [date, month, year] = this._birthday.split('.').map(Number);
    const today = new Date();
    const birthDate = new Date(year, month - 1, date);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  
  Student.prototype.getAverageScore = function() {
    return this._rating.reduce((sum, score) => sum + score, 0) / this._rating.length;
  };
  
  Student.prototype.getSummary = function() {
    const averageScore = this.getAverageScore();
    const attendanceAverage = this.getAttendanceAverage();
    if (averageScore > 90 && attendanceAverage > 0.9) {
      return "Молодець!";
    } else if (averageScore > 90 || attendanceAverage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
  
  Student.prototype.getAttendanceAverage = function() {
    const attended = this._attendance.filter(Boolean).length;
    return attended / this._attendance.length;
  };
  

  const student1 = new Student("Julia", "Shvetz", "10.08.1993", [3, 4, 5]);
  console.log(student1.firstName); 
  student1.firstName = "Katrin";
  console.log(student1.firstName); 