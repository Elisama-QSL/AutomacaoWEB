class ModalPage {
    get newTransactionButton() {
        return 'a.button.new';
    }

    get modal() {
        return '.modal'; // Adjust the selector based on the actual modal implementation
    }

    openNewTransaction() {
        cy.get(this.newTransactionButton).click({ force: true });

    }

    isModalVisible() {
        cy.get(this.modal).should('be.visible');
    }

    isModalNotVisible() {
        cy.get(this.modal).should('not.exist');
    }
}

export const modalPage = new ModalPage();