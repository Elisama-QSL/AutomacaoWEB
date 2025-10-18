/// <reference types="cypress" />

/**
 * 
 */



import userData from '../fixtures/example.json'
import{faker, fakerEN_AU_ocker} from '@faker-js/faker'

describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('https://automationexercise.com/')
        cy.xpath('//a[contains(text(), "Signup / Login")]').click()
        //cy.url().should('include', '/login')

    });
    

    it('Cadastrar um usuário', () => {
        const timestamp = new Date().getTime()
   
        cy.xpath('//input[@data-qa="signup-name"]').type('QA Teste')
        cy.xpath('//input[@data-qa="signup-email"]').type(`testerqa${timestamp}@gmail.com`)


        cy.xpath('//button[@data-qa="signup-button"]').click()

        cy.xpath('//b[text()="Enter Account Information"]').should('be.visible')

        cy.xpath('//input[@id="id_gender2"]').check()
        cy.xpath('//input[@id="password"]').type('teste123', {log: false})
        cy.xpath('//select[@id="days"]').select('26')
        cy.xpath('//select[@id="months"]').select('June')
        cy.xpath('//select[@id="years"]').select('1981')

        cy.xpath('//input[@id="first_name"]').type('QA')
        cy.xpath('//input[@id="last_name"]').type('Teste')
        cy.xpath('//input[@id="address1"]').type('Rua F, Nova Cidade 17')
        cy.xpath('//select[@id="country"]').select('Canada')
        cy.xpath('//input[@id="state"]').type('Novo Estado')
        cy.xpath('//input[@id="city"]').type('Zona1')
        cy.xpath('//input[@id="zipcode"]').type('12345')
        cy.xpath('//input[@id="mobile_number"]').type('690578236')

        cy.xpath('//button[@data-qa="create-account"]').click()

        cy.xpath('//b[text()="Account Created!"]').should('be.visible')
    });


     it('Login na conta', () => {

        cy.xpath('//input[@data-qa="login-email"]').type('qatestecase4@gmail.com')
        cy.xpath('//input[@data-qa="login-password"]').type('qa1234', {log: false})
        cy.xpath('//button[@data-qa="login-button"]').click()

        cy.xpath('//a[contains(text(), "Logged in as")]').should('be.visible')
        cy.xpath('//a[contains(text(), "Logged in as")]').should('contain', 'qaTesteCase')
    });

    
    it('Login Incorreto', () => {


        cy.xpath('//input[@data-qa="login-email"]').type('qa4@gmail.com')
        cy.xpath('//input[@data-qa="login-password"]').type('qa', {log: false})
        cy.xpath('//button[@data-qa="login-button"]').click()

        cy.xpath('//p[contains(text(), "Your email or password is incorrect!")]').should('be.visible')
      
    });

    it('Logout na conta', () => {

        cy.xpath('//input[@data-qa="login-email"]').type('qatestecase4@gmail.com')
        cy.xpath('//input[@data-qa="login-password"]').type('qa1234', {log: false})
        cy.xpath('//button[@data-qa="login-button"]').click()

        cy.xpath('//a[contains(text(), "Logged in as")]').should('be.visible')

        cy.xpath('//a[contains(text(), "Logout")]').click()

        cy.url().should('include', '/login')
        cy.xpath('//h2[contains(text(), "Login to your account")]').should('be.visible')
        
    });


    it('Cadastrar um usuário com email existente', () => {
    
        cy.xpath('//input[@data-qa="signup-name"]').type('qaTesterQA')
        cy.xpath('//input[@data-qa="signup-email"]').type(`qatestecase4@gmail.com`)


        cy.xpath('//button[@data-qa="signup-button"]').click()

        cy.xpath('//p[contains(text(), "Email Address already exist!")]').should('be.visible')
     });
     

     it('Upload de arquivo', () => {
       
        cy.xpath('//a[contains(text(), "Contact us")]').click()

        cy.xpath('//h2[contains(text(), "Get In Touch")]').should('be.visible')

        cy.xpath('//input[@data-qa="name"]').type('Teste do Trabalho')
        cy.xpath('//input[@data-qa="email"]').type('qatestecase4@gmail.com')
        cy.xpath('//input[@data-qa="subject"]').type('Entrega de Trabalho')
        cy.xpath('//textarea[@data-qa="message"]').type('Upload com Sucesso')

        cy.xpath('//input[@name="upload_file"]').selectFile('cypress/fixtures/example.json')

        cy.xpath('//input[@data-qa="submit-button"]').click()

        cy.xpath('//div[@class="status alert alert-success"]').should('be.visible')
        cy.xpath('//div[@class="status alert alert-success"]').should('have.text', 'Success! Your details have been submitted successfully.')

     });
    
});