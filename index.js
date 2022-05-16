// Import all classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Import neccesary dependecies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const emailValidator = require("email-validator");

const generateHTML = require("./src/generateTeam");

// global variables
const team = [];
var CanAddEmployee = true;

// Inquirer to collect inputs from employees, their job titles, and other necessary infos
const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please enter the manager's name."
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please enter manager's ID."
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please enter manager's email"
                }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please enter manager's office number."
                }
            },
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"]
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "What is the name of the enginner?",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please enter the name of the engineer."
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please enter engineer's ID."
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
            validate: emailValidator
        },
        {
            type: "input",
            name: "github",
            message: "Please enter engineer's gitHub.",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please enter gitHub."
                }
            },
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"]
        }
    ],

    Intern: [
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Plese enter intern's name."
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Plese enter intern's name."
                }
            },
        },
        {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
                validate: (value) => {
                    if (value) {
                        return true
                    }
                    else {
                        return "Plese enter intern's name."
                    }
            },
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern go to?",
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Plese enter the name of the school."
                }
            },
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"]
        }
    ]
};

const selectEmployeeType = [
    {
        type: "list",
        name: "employeeType",
        message: "Select role of the employee",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

// init function to activate inquirer
function addNewEmployee() {
    inquirer
    .prompt(selectEmployeeType)
    .then(data => {
        // console.log(data.employeeType)
        
        if (CanAddEmployee) {
            // when user answer `Manager`, they'll be given manager's prompt questions
            if (data.employeeType === "Manager") {
                inquirer.prompt(questions.Manager)
                .then(data => {
                    const manager = new Manager(
                    data.name, data.id, data.email, data.officeNumber
                    );
                
                team.push(manager);
                // save info to the array, `team`, if the team doesn't have a manager
                CanAddEmployee = false;
                if (data.addEmployee === "yes") {
                    addNewEmployee();
                }
                else {
                    return generateFile();
                }
                });
            }
            else {
                console.log("This team already has a manager.");
                addNewEmployee();
            }
        }
        
        if (data.employeeType === "Engineer") {
            inquirer
            .prompt(questions.Engineer)
            .then(data => {
                const engineer = new Engineer(
                    data.name, data.id, data.email, data.github
                );
                team.push(engineer);

                // looping back to questions after registering engineer
                // if 'no', generate my HTML now!
                if (data.addEmployee === "yes") {
                    addNewEmployee();
                }
                else {
                    return generateFile();
                }
            });
        }
        
        if (data.employeeType === "Intern") {
            inquirer
            .prompt(questions.Intern)
            .then(data => {
                const intern = new Intern(
                    data.name, data.id, data.email, data.school
                )
                team.push(intern);
                
                // looping back to questions after registering intern
                // if 'no', generate my HTML now!
                if (data.addEmployee === "yes") {
                    addNewEmployee();
                }
                else {
                    return generateFile();
                };
            });
        };

    });
};

// function to generate my HTML file
function generateFile() {
    const html = generateHTML(team);
    fs.writeFileSync('./dist/team-profile.html', html, (err) => {
        err ? console.log(err) : console.log("HTML sucessfully generated!");
    })
}

// function call to initialize app
addNewEmployee();