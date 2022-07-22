
describe("User make a login", () => {
    it("Sholud be able user to make a login", () => {

        cy.visit("http://localhost:3000/");
        cy.viewport(1808, 900);

        cy.wait(2000)

        cy.intercept("POST", "/sessions", {
            statusCode: 200,
            body: {
                user: {
                    id: "ac4e1fe6-780a-4340-87b4-2ef0d25f38fb",
                    name: "Cypress",
                    email: "testUser@cypress.com",
                    course_module: "segundo modulo",
                    bio: "Lorem Ipsum",
                    contact: "15864884",

                },
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU1MjUwMzYsImV4cCI6MTY1NTc4NDIzNiwic3ViIjoiYWM0ZTFmZTYtNzgwYS00MzQwLTg3YjQtMmVmMGQyNWYzOGZiIn0.sDiUmpDQHCVLwANW0vNEk0R-7OVMAkPOSA8pG7HjuW0"
            }
        })

        cy.get(':nth-child(4) > a').click()
        cy.get(':nth-child(1) > .input > input').type("testUser@cypress.com");
        cy.get(':nth-child(2) > .input > input').type("cypress123456")

        cy.get('form > .button_Sass').click()
    })
})