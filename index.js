const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./src/generate-site.js');
const generatePage = require('./src/page-template');

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');

const promptManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
      name: 'name',
      message: 'What is your Team Manager\'s name? (Required)',
      validate: managerNameInput => {
        if (managerNameInput) {
          return true;
        } else {
          console.log('Please enter Manager name!');
          return false;
        }
      }
    },
      {
        type: 'input',
        name: 'id',
        message: 'Enter your Team Manager\'s employee id. (Required)',
        validate: managerIdInput => {
            if (managerIdInput) {
              return true;
            } else {
              console.log('Please enter Manager id!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Team Manager\'s email. (Required)',
        validate: managerEmailInput => {
            if (managerEmailInput) {
              return true;
            } else {
              console.log('Please enter Manager email!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'office',
        message: 'Enter your Team Manager\'s office number. (Required)',
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
              return true;
            } else {
              console.log('Please enter Manager office number!');
              return false;
            }
          }
      }
    ]).then(managerData  => {
        const {name, id, email, officeNumber} = managerData
         employee = new Manager(name, id, email, officeNumber)
         let role = {role: "Manager"};
         return {...managerData, ...role}
      })
   };
  
  const promptEmployee =managerData => {
     if (!managerData.engineers) {
     managerData.engineers = [];
  }
     if (!managerData.interns) {
     managerData.interns = [];
  }
    return inquirer.prompt([
             {
                type: "list",
                name: "role",
                message: "Would you like to add an Engineer, an Intern, or Finish building your team?",
                choices: ['Engineer', 'Intern', 'Finished']
            }
   ]).then(({ role }) => {
     if (role === "Engineer") {
     return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your Engineer\'s name? (Required)',
                validate: engineerNameInput => {
                    if (engineerNameInput) {
                      return true;
                    } else {
                      console.log('Please enter Engineer name!');
                      return false;
                    }
                 }
             },
             {
                type: 'input',
                name: 'id',
                message: 'Enter your Engineer\'s employee id. (Required)',
                validate: engineerIdInput => {
                    if (engineerIdInput ) {
                       return true;
                    } else {
                      console.log('Please enter Engineer id!');
                      return false;
                    }
                 }
             },     
             {
                type: 'input',
                name: 'email',
                message: 'Enter your Engineer\'s email. (Required)',
                validate: engineerEmailInput => {
                    if (engineerEmailInput) {
                        return true;
                    } else {
                      console.log('Please enter Engineer email!');
                      return false;
                    }
                  }
              },  
              {
                type: 'input',
                name: 'github',
                message: 'Enter your Engineer\'s github username. (Required)',
                validate: engineerGithubInput => {
                     if (engineerGithubInput) {
                        return true;
                     } else {
                        console.log('Please enter Engineer github!');
                        return false;
                     }
                  }
              }
            ]).then(employeeData => {
               employee = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
               let role = {role: "Engineer"}
               managerData.engineers.push({...employeeData, ...role})
               return promptEmployee(managerData)
            })
        } else if (role === "Intern") {
            return inquirer.prompt([
              {
                type: 'input',
                name: 'name',
                message: 'What your Intern\'s name? (Required)',
                validate: internNameInput => {
                  if (internNameInput) {
                    return true;
                  } else {
                    console.log('Please enter Intern name!');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'id',
                message: 'Enter your Intern\'s employee id. (Required)',
                validate: internIdInput => {
                    if (internIdInput ) {
                      return true;
                    } else {
                      console.log('Please enter Intern id!');
                      return false;
                    }
                  }
              },     
             {
                type: 'input',
                name: 'email',
                message: 'Enter your Intern\'s email. (Required)',
                validate: internEmailInput => {
                    if (internEmailInput) {
                      return true;
                    } else {
                      console.log('Please enter Intern email!');
                      return false;
                    }
                  }
               },
               {
                type: 'input',
                name: 'school',
                message: 'Enter your Intern\'s school. (Required)',
                validate: internSchoolInput => {
                    if (internSchoolInput) {
                      return true;
                    } else {
                      console.log('Please enter Intern school!');
                      return false;
                    }
                  }
              },
            ]).then(employeeData => {
                employee = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
                let role = {role: "Intern"}
                managerData.interns.push({...employeeData, ...role})
                return promptEmployee(managerData)
             })
        } else {
            return managerData
        }
    })
} 

 
  promptManager()
  .then(promptEmployee)
  .then(managerData => {
    return generatePage(managerData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });