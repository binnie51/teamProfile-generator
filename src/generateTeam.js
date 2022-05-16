const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateMyHtml(team) {
  let renderCards = '';
  let employeeUniqueProperty ='';
  let employeeTitle ='';
  
  for(i = 1; i <= team.length - 1; i++) {

    switch (team.length[i].getRole()) {
      case "Manager":
        employeeUniqueProperty = `Office Number: ${team[i].getOfficeNumber()}`;
        employeeTitle = `<i class="fas fa-mug-hot"></i> Manager`;
        break;
      case "Engineer":
        employeeUniqueProperty = `GitHub: ${team[i].getGithub()}`;
        employeeTitle = `<i class="fas fa-glasses"></i> Engineer`;
        break;
      case "Intern":
        employeeUniqueProperty = `School: ${team[i].getSchool()}`;
        employeeTitle = `<i class="fas fa-user-graduate"></i> Intern`;
        break;
    }
    renderCards += (`
    <div class="card shadow manager-card" style="width: 15rem;">
    <div class="card-header bg-success text-white text-center mb-3">
        <div class="card-title">${team[i].getName()}</div>
        <div class="card-title">${employeeTitle}</div>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item text-success">ID: ${team[i].getId()}</li>
            <li class="list-group-item text-success">Email: ${team[i].getEmail()}</li>
            <li class="list-group-item text-success">Office Number: ${team[i].getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `)
  }
  return (
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Team's Profile</title>
            <!-- Google font: Poppins -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
            <!-- Bootstrap CSS and Font Awesome Icons -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 bg-danger profile-heading">
                        <h1 class="text-center text-light m-3">My Team Profile</h1>
                    </div>
                </div>
                
                <!-- main content containing employee cards -->
                <!-- 3 row colums layout -->
                <div class="container">
                    <div class="row">
                        <div class="row row-cols-3 justify-content-center gap-3 mt-5" id="team-content">
                        ${renderCards}
                        </div>    
                    </div>
                </div>
            </div>
    
            <!-- Jquery, Bootstrap JS -->
            <script
            src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
            crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </body>
    </html>
`
  );
};

module.exports = generateMyHtml;