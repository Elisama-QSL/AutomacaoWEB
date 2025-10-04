/// <reference types="cypress" />

describe('Automation Test Case', () => {
    it('Login na conta', () => {

        cy.visit('https://automationexercise.com/')

        cy.url().should('include', 'automationexercise')

        cy.get('a[href="/login"]').click()
        cy.get('.login-form > h2')

        cy.get('[data-qa="login-email"]').type('qa4@gmail.com')
        cy.get('[data-qa="login-password"]').type('qa', {log: false})
        cy.get('[data-qa="login-button"]').click()

        cy.get(`.login-form > form > p`).should('contain', 'Your email or password is incorrect!')
    
        
    });
});