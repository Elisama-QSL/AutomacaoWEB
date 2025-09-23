/// <reference types="cypress" />

describe('Automation Test Case', () => {
    it('Cadastrar um usuário no test case', () => {

        cy.visit('https://automationexercise.com/')


        cy.url().should('include', 'automationexercise')
        cy.get('.active > :nth-child(1) > h1 > span')

        cy.get('a[href="/login"]').click()
        cy.get('.signup-form > h2')

        cy.get('[data-qa="signup-name"]').type('qaTesteCase')
        cy.get('[data-qa="signup-email"]').type(`qatestecase4@gmail.com`)
        cy.contains('button', 'Signup').click()                                                                     
        cy.contains('b', 'Enter Account Information')

        cy.get('#id_gender1').check()

        cy.get('input#password').type('qa1234', {log: false})

        cy.get('[data-qa=days]').select('1')
        cy.get('[data-qa=months]').select('June')
        cy.get('[data-qa=years]').select('1985')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('input#first_name').type('Rua h')
        cy.get('input#last_name').type('Novo')
        cy.get('input#company').type('POS')
        cy.get('input#address1').type('Novo Horizonte')
        cy.get('select#country').select('Canada')
        cy.get('input#state').type('Toronto')
        cy.get('input#city').type('Alaska')
        cy.get('[data-qa="zipcode"]').type('69874512')
        cy.get('[data-qa="mobile_number"]').type('+5587456213')

        cy.get('[data-qa="create-account"]').click()

        cy.contains('b', 'Account Created!')

        cy.get('[data-qa="continue-button"]').click()

        cy.contains('b', 'qaTesteCase')

        
    });
});