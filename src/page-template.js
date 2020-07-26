const fs = require('fs');

// create manager section
const generateManager = Manager => {
 return `
    <div class="card" style="width: 18rem;">
     <h5 class="card-title">${Manager.name}</h5> 
     <h5 class="card-text">${Manager.role}</h5>  
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
            </ul>  
        </div>
    </div>
  `;
};
const generateEngineers = engineersArr => {
  return `
      ${engineersArr
        .map(({ name, id, email, github, role }) => {
          return `
          <div class="card" style="width: 18rem;">
          <h5 class="card-title">${name}</h5> 
          <h5 class="card-text">${role}</h5>  
             <div class="card-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
                 </ul>  
             </div>
         </div>
        `;
        })
        .join('')}
        `}
const generateInterns = internsArr => {
  return `
      ${internsArr
        .map(({ name, id, email, school, role }) => {
          return `
          <div class="card" style="width: 18rem;">
          <h5 class="card-title">${name}</h5> 
          <h5 class="card-text">${role}</h5>  
             <div class="card-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                 </ul>  
             </div>
         </div>
        `;
        })
        .join('')}
        `}


module.exports = templateData => {
  // destructure page data by section
  const { interns, engineers, ...manager } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>

      </div>
    </header>
    <main class="container my-5">
   ${generateManager(manager)}
   ${generateEngineers(engineers)}
   ${generateInterns(interns)}
    </main>
  </body>
  </html>
  `;
};
