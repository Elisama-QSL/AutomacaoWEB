// cypress/support/pageObjects/modalPage.js

// cypress/integration/modalTests.spec.js
import { modalPage } from '../support/pageObjects/modalPage';

describe('Modal Tests', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#');
    });

    it('Verify that clicking the link opens the modal for creating a new transaction', () => {
        modalPage.openNewTransaction();
        modalPage.isModalVisible();
    });

    it('Test the behavior when the user clicks the link while the modal is already open', () => {
        modalPage.openNewTransaction();
        modalPage.isModalVisible();
        modalPage.openNewTransaction();
        // Assuming the modal should still be visible and not create a new instance
        modalPage.isModalVisible();
    });
});