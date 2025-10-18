/// <reference types="cypress" />

/**
 * 
 */



import userData from '../fixtures/example.json'
import{faker, fakerEN_AU_ocker} from '@faker-js/faker'


import menu from '../modules/menu/index.js'
describe('Automation Exercise', () => {
    beforeEach(() => {
        

        cy.viewport('iphone-xr')
        cy.visit('https://automationexercise.com/')
        
        menu.navegarParaLogin

    });
    

    it.only('Cadastrar um usuário', () => {
        const timestamp = new Date().getTime()

        cy.get('[data-qa="signup-name"]').type(`qaTester`)
        cy.get('[data-qa="signup-email"]').type(`testerqa${timestamp}@gmail.com`)
        
        cy.contains('button', 'Signup').click()

       // cy.get('input[type=radio]').check('Mrs')
        cy.get('#id_gender2').check()

        cy.get('input#password').type('teste123', {log: false})

        //para comobox
        cy.get('[data-qa=days]').select('11')
        cy.get('[data-qa=months]').select('May')
        cy.get('[data-qa=years]').select('1991')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('input#first_name').type(faker.person.firstName())
        cy.get('input#last_name').type(faker.person.lastName())
        cy.get('input#company').type(faker.company.name())
        cy.get('input#address1').type(faker.location.streetAddress())
        cy.get('select#country').select('Canada')
        cy.get('input#state').type(faker.location.state())
        cy.get('input#city').type(faker.location.city())
        cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
        cy.get('[data-qa="mobile_number"]').type(faker.phone.number('1199#####99'))

        cy.get('[data-qa="create-account"]').click()

        // Assert
        cy.url().should('includes', 'account_created')
        cy.contains('b', 'Account Created!')
        
    });

     it('Login na conta', () => {

        cy.url().should('include', 'automationexercise')

        cy.get('.login-form > h2')

        cy.get('[data-qa="login-email"]').type('qatestecase4@gmail.com')
        cy.get('[data-qa="login-password"]').type('qa1234', {log: false})
        cy.get('[data-qa="login-button"]').click()

       // cy.contains('b', 'qaTesteCase')

        cy.get('i.fa-user').parent().should('contain','qaTesteCase')
        cy.get('a[href="/logout"]').should('be.visible')
    });

    
    it('Login Incorreto', () => {

        cy.url().should('include', 'automationexercise')
        cy.get('.login-form > h2')

        cy.get('[data-qa="login-email"]').type('qa4@gmail.com')
        cy.get('[data-qa="login-password"]').type('qa', {log: false})
        cy.get('[data-qa="login-button"]').click()

        cy.get(`.login-form > form > p`).should('contain', 'Your email or password is incorrect!')
    
        
    });

     it('Logout na conta', () => {

        cy.url().should('include', 'automationexercise')

        cy.get('.login-form > h2')

        cy.get('[data-qa="login-email"]').type('qatestecase4@gmail.com')
        cy.get('[data-qa="login-password"]').type('qa1234', {log: false})
        cy.get('[data-qa="login-button"]').click()

        //cy.contains('b', 'qaTesteCase')
        cy.get('i.fa-user').parent().should('contain','qaTesteCase')
        cy.get('a[href="/logout"]').should('be.visible').click()
      //  cy.get(`.shop-menu > .nav > :nth-child(4) > a`).click()

        cy.url().should('contain', 'login')
        
    });

    it('Cadastrar um usuário com email existente', () => {
    
        cy.get('[data-qa="signup-name"]').type('qaTesterQA')
        cy.get('[data-qa="signup-email"]').type(`qatestecase4@gmail.com`)

        cy.contains('button', 'Signup').click()

        cy.get(`.signup-form > form > p`).should('contain', 'Email Address already exist!')
     });
     

     it('Upload de arquivo', () => {
       // cy.get('a[href="/contact_us"]').should('be.visible').click()
        cy.get(`a[href*=contact]`).click()
        cy.get('[data-qa="name"]').type(userData.name)
        cy.get('[data-qa="email"]').type(userData.email)
        cy.get('[data-qa="subject"]').type(userData.subject)
        cy.get('[data-qa="message"]').type(userData.message)

        cy.fixture('example.json').as('arquivo')
        cy.get('input[type=file]').selectFile('@arquivo')

        cy.get('[data-qa="submit-button"]').click()

        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')


     });
    
});