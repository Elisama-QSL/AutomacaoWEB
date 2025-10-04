/// <reference types="cypress" />

describe('Automation Test Case', () => {
    it('Login na conta', () => {

        cy.visit('https://automationexercise.com/')

        cy.url().should('include', 'automationexercise')

        cy.get('a[href="/login"]').click()
        cy.get('.login-form > h2')

        cy.get('[data-qa="login-email"]').type('qatestecase4@gmail.com')
        cy.get('[data-qa="login-password"]').type('qa1234', {log: false})
        cy.get('[data-qa="login-button"]').click()

       // cy.contains('b', 'qaTesteCase')

        cy.get('fa fa-user').parent().should('contain','qaTesteCase')
        cy.get('a[href="/logout"]').should('be.visible')
    });
});