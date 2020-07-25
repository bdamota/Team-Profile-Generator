class Engineer {
    constructor(name, id, github, email) {
        // call parent constructor here:
        this.name = name;
        this.id = id; 
        this.github = github;
        this.email = email;
      }

    getGitHub(){
        return this.github;  
    }

    getRole(){
        return 'Engineer';  
    }
  }

  module.exports = Engineer;