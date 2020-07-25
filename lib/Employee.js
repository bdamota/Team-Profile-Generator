class Employee {
    constructor(name,id,email) {
      // call parent constructor here:
      this.name = name;
      this.id = id; 
      this.email = email;
    }

    getName(){
        return this.name   
    }
  }

  module.exports = Employee;