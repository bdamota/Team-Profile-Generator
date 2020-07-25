class Intern  {
    constructor(name, id, school, email) {
        // call parent constructor here:
        this.name = name;
        this.id = id; 
        this.school = school;
        this.email = email;
      }

    getSchool(){
        return this.school;  
    }

    getRole(){
        return 'Intern';  
    }
  }

  module.exports = Intern;