const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should instantiate new Intern.", () => {
            const newIntern = new Intern();

            expect(typeof(newIntern)).toBe('object');
        })

        it("should instantiate new Intern with all its properties.", () => {
            const newIntern = new Intern("Rika", 6921, "RikaKj@testmail.com", "Meiji University");

            expect(newIntern.name).toEqual("Rika");
            expect(newIntern.id).toEqual(6921);
            expect(newIntern.email).toEqual("RikaKj@testmail.com");
            expect(newIntern.school).toEqual("Meiji University");
        })
    });

    describe("internMethods", () => {
        it("should get the intern's name after input.", () => {
            const newIntern = new Intern("Rika", 6921, "RikaKj@testmail.com", "Meiji University");
            const internName = newIntern.getName();

            expect(internName).toEqual("Rika");
        })

        it("should get the intern's ID after input.", () => {
            const newIntern = new Intern("Rika", 6921, "RikaKj@testmail.com", "Meiji University");
            const internId = newIntern.getId();

            expect(internId).toEqual(6921);
        })

        it("should get the intern's email after input.", () => {
            const newIntern = new Intern("Rika", 6921, "RikaKj@testmail.com", "Meiji University");
            const internEmail = newIntern.getEmail();

            expect(internEmail).toEqual("RikaKj@testmail.com");
        })

        it("should get the intern's school.", () => {
            const newIntern = new Intern("Rika", 6921, "RikaKj@testmail.com", "Meiji University");
            const internSchool = newIntern.getSchool();

            expect(internSchool).toEqual("Meiji University");
        })
        
        it("should return 'Employee' when getRole() is called.", () => {
            const newIntern = new Intern("Rika", 6921, "RikaKj@testmail.com", "Meiji University");
            const role = newIntern.getRole();

            expect(role).toEqual('Employee');
        })
    });
});