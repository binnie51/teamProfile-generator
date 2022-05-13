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
            message: "What is the of the manager?",
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

        }
    ]
};