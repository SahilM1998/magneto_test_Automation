class CreateAccountPage {
  enterInputField(field, value) {
    cy.get(`input[id='${field}']`).should("not.be.disabled").clear();
    if (value.trim() !== "") {
      cy.get(`input[id='${field}']`).type(value); 
    } else {
      cy.get(`input[id='${field}']`).blur();
    }
  
  }

  submitAccountCreation() {
    cy.get('button[title="Create an Account"').click();
  }

  verifySuccessMessage() {
    cy.url().should('include', '/customer/account/');
    cy.get('.message-success').should('be.visible').and('contain.text', 'Thank you for registering with Main Website Store');
  }

  verifyErrorMessage(fields, errorMessage) {
    const errorFields = fields.split(',').map((field) => field.trim());
    const messages = errorMessage.split('-').map((msg) => msg.trim());
    if (errorFields.length !== messages.length) {
      throw new Error('Mismatch in number of fields and expected messages');
    }
    errorFields.forEach((field, index) => {
      let errorSelector = (field==='Global Error') ? "[data-ui-id='message-error']" : "#"+field + '-error';
      cy.get(errorSelector).should('be.visible').and('contain.text', messages[index]);
    });
  }
}

export default CreateAccountPage;