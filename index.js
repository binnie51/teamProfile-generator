// Import files and modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const team = [];

// Inquirer to collect infos on employees 
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
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please enter engineer's email."
                }
            },
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

function addNewEmployee() {
    inquirer
    .prompt(selectEmployeeType)
    .then(data => {
        // console.log(data.employeeType)
        if (data.employeeType === "Manager") {

        }
    });
}