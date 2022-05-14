const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate new Employee.", () => {
            const newEmployee = new Employee();

            expect(typeof(newEmployee)).toBe('object'); 
        })

        it("should instantiate new Employee with all its properties.", () => {
            const newComer = new Employee("Budi", 5110, "budiSekali@testmail.com");

            expect(newComer.name).toEqual("Budi");
            expect(newComer.id).toEqual(5110);
            expec(newComer.email).toEqual("budiSekali@.testmail.com");
        })
    })

    describe("employeeMethods", () => {
        it("should get the name of employee after input.", () => {
            const newComer = new Employee("Rika", 6921, "RikaKj@testmail.com");
            const employeeName = newComer.getName();

            expect(employeeName).toEqual("Rika");
        })

        it("should get the id of employee after input." , () => {
            const newComer = new Employee("Rika", 6921, "RikaKj@testmail.com");
            const employeeID = newComer.getId();

            expect(employeeID).toEqual(6921);
        })

        it("should get the email of employee after input.", () => {
            const newComer = new Employee("Rika", 6921, "RikaKj@testmail.com");
            const employeeEmail = newComer.getEmail();

            expect(employeeEmail).toEqual("RikaKj@testmail.com");
        })

        it("should return Employee when getRole() is called", () => {
            const newComer = new Employee("Rika", 6921, "RikaKj@testmail.com");
            const role = newComer.getRole();

            expect(role).toEqual('Employee');
        })
    });
});