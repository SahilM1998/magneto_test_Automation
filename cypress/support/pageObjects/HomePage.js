class HomePage {
    visitHomePage() {
      cy.visit("https://magento.softwaretestingboard.com/");
    }
  
    clickCreateAccount() {
        cy.contains('a', 'Create an Account').click();
    }
  
    verifySearchPlaceholder(placeholder) {
      cy.get("input[placeholder='Search entire store here...']").should("have.attr", "placeholder", placeholder);
    }
  
    verifyStoreLogo() {
      cy.get(".logo").should("be.visible");
    }
  
    verifyMainContainerText(text) {
        cy.get('main#maincontent').should('be.visible').and('contain.text', text);
    }
  
    verifyFooterText(text) {
        cy.get('footer.page-footer').should('be.visible').and('contain.text', text);
    }
  
    verifyCartOption() {
        cy.get('a.action.showcart').should('be.visible').and('contain.text', 'My Cart');
    }
  
    verifyCopyrightText(text) {
        cy.get('small.copyright').should('be.visible').and('contain.text', text);
    }
  }
  
  export default HomePage;