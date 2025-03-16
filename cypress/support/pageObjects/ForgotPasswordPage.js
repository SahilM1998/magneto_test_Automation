class ForgotPasswordPage {
    clickForgotPassword() {
        cy.contains('a', 'click here').click();
    }
  }
  
  export default ForgotPasswordPage;