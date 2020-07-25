class Manager {
    constructor(name,id, office, email) {
        // call parent constructor here:
        this.name = name;
        this.id = id; 
        this.office = office;
        this.email = email;
      }

    getOffice(){
        return this.office;  
    }

    getRole(){
        return 'Manager';  
    }
  }

  module.exports = Manager;