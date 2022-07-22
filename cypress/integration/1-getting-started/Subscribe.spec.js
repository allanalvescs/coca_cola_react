describe("User can't make a subscribe", () => {
    it("Sholud not be able user to created account", () => {

        cy.visit("http://localhost:3000/");
        cy.viewport(1808, 900);

        cy.get(':nth-child(4) > a').click()

        cy.get('.form_login > :nth-child(5)').click()

        cy.get(':nth-child(1) > .input > input').type("test@cypress.com")
        cy.get(':nth-child(2) > .input > input').type("Igão")
        cy.get(':nth-child(3) > .input > input')
        cy.get(':nth-child(4) > .input > input').type("123456")
        cy.get(':nth-child(5) > .input > input').type("123456")
        cy.get(':nth-child(6) > .input > input')

        cy.get('.Form_subscribe > .button_Sass').click()
    })
})

describe("User make a subscribe", () => {
    it("Sholud be able user to created account", () => {

        cy.visit("http://localhost:3000/");
        cy.viewport(1808, 900);

        cy.intercept("POST", "/users", {
            statusCode: 200,
            body: {
                id: "d66973ea-d352-4208-be81-6c2a4b28a5c3",
                name: "CypressUser",
                email: "test2@cypress.com",
                course_module: "2o Módulo (Frontend avançado)",
                bio: "Lorem ipsum dolor emet",
                contact: "48 9856-2555",
                created_at: "2022-07-13T18:32:47.601Z",
                updated_at: "2022-07-13T18:32:47.601Z",
                avatar_url: null
            }
        }).as("Subscribe")

        cy.get(':nth-child(4) > a').click()

        cy.get('.form_login > :nth-child(5)').click()

        cy.get(':nth-child(1) > .input > input').type("test2@cypress.com")
        cy.get(':nth-child(2) > .input > input').type("CypressUser")
        cy.get(':nth-child(3) > .input > input').type("48 9856-2555")
        cy.get(':nth-child(4) > .input > input').type("123456cy")
        cy.get(':nth-child(5) > .input > input').type("123456cy")
        cy.get(':nth-child(6) > .input > input').click()

        cy.get('.Form_subscribe > .button_Sass').click()
    })
})