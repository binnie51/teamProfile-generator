const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        this.officeNumber = officeNumber;

        super()
    }
    getRole() {

    }
}