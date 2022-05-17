const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("managerMethods", () => {
        it("should instantiate new Manager.", () => {
            const newManager = new Manager();

            expect(typeof(newManager)).toBe('object');
        })

        it("should instantiate new Manager with all its properties.", () => {
            const newManager = new Manager("Rika", 6921, "RikaKj@testmail.com", 101);

            expect(newManager.name).toEqual("Rika");
            expect(newManager.id).toEqual(6921);
            expect(newManager.email).toEqual("RikaKj@testmail.com");
            expect(newManager.officeNumber).toEqual(101);
        })
    });

    describe("managerMethods", () => {
        it("should get the name of manager after input.", () => {
            const newManager = new Manager("Rika", 6921, "RikaKj@testmail.com", 101);
            const managerName = newManager.getName();

            expect(managerName).toEqual("Rika");
        })
        
        it("should get the manager's ID numbers.", () => {
            const newManager = new Manager("Rika", 6921, "RikaKj@testmail.com", 101);
            const managerId = newManager.getId();

            expect(managerId).toEqual(6921);
        })

        it("should get the manager's email.", () => {
            const newManager = new Manager("Rika", 6921, "RikaKj@testmail.com", 101);
            const managerEmail = newManager.getEmail();

            expect(managerEmail).toEqual("RikaKj@testmail.com");
        })

        it("should get the manager's office numbers.", () => {
            const newManager = new Manager("Rika", 6921, "RikaKj@testmail.com", 101);
            const managerOfficeNum = newManager.getOfficeNumber();

            expect(managerOfficeNum).toEqual(101);
        })

        it("should return 'Manager' when getRole() is called.", () => {
            const newManager = new Manager("Rika", 6921, "RikaKj@testmail.com", 101);
            const role = newManager.getRole();

            expect(role).toEqual('Manager');
        })


    });
});