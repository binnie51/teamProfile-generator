const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should instantiate new Engineer", () => {
            const newEngineer = new Engineer();

            expect(typeof(newEngineer)).toBe('object');
        })

        it("should instantiate new Engineer with all its properties.", () => {
            const newEngineer = new Engineer("Rika", 6921, "RikaKj@testmail.com", "hizzyRk");

            expect(newEngineer.name).toEqual("Rika");
            expect(newEngineer.id).toEqual(6921);
            expect(newEngineer.email).toEqual("RikaKj@testmail.com");
            expect(newEngineer.github).toEqual("hizzyRk");
        })
    });

    describe("engineerMethods", () =>{
        it("should return engineer's name after input.", () => {
            const newEngineer = new Engineer("Rika", 6921, "RikaKj@testmail.com", "hizzyRk");
            const engineerName = newEngineer.getName();

            expect(engineerName).toEqual("Rika");
        })

        it("should return engineer's ID after input.", () => {
            const newEngineer = new Engineer("Rika", 6921, "RikaKj@testmail.com", "hizzyRk");
            const engineerId = newEngineer.getId();

            expect(engineerId).toEqual(6921);
        })

        it("should return engineer's email after input.", () => {
            const newEngineer = new Engineer("Rika", 6921, "RikaKj@testmail.com", "hizzyRk");
            const engineerEmail = newEngineer.getEmail();
            
            expect(engineerEmail).toEqual("RikaKj@testmail.com");
        })

        it("should return Engineer when getRole() is called", () => {
            const newEngineer = new Engineer("Rika", 6921, "RikaKj@testmail.com", "hizzyRk");
            const role = newEngineer.getRole();

            expect(role).toEqual("Engineer");
        })

        it("should return gitHub after input.", () => {
            const newEngineer = new Engineer("Rika", 6921, "RikaKj@testmail.com", "hizzyRk");
            const githubUser = newEngineer.getGithub();

            expect(githubUser).toEqual("hizzyRk");
        })
    });
});