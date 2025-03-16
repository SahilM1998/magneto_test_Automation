class ApiHelper {
    verifyAllLinksStatus() {
      cy.get("a").each(($el) => {
        const url = $el.prop("href");
        if (url && url.startsWith("https://magento.softwaretestingboard.com")) {
          cy.request(url).its("status").should("be.oneOf", [200, 301, 302]);
        }
      });
    }
  
    verifyLinkNavigation() {
      cy.get("a").then(($links) => {
        const hrefs = [];
    
        $links.each((index, el) => {
          const href = Cypress.$(el).attr("href");
          if (href && href.startsWith("https://magento.softwaretestingboard.com/")) {
            hrefs.push(href);
          }
        });
        console.log(`Total links to check: ${hrefs.length}`);
        const normalizeUrl = (url) => (url.endsWith("/") ? url.slice(0, -1) : url);
        cy.wrap(hrefs).each((href) => {
          cy.visit(href);
    
          cy.location("href").then((currentUrl) => {
            const normalizedCurrent = normalizeUrl(currentUrl);
            const normalizedExpected = normalizeUrl(href);
            expect(normalizedCurrent).to.eq(normalizedExpected);
          });
    
          cy.go("back");
        });
      });
    }
  
    verifyNoErrorStatus() {
      cy.wait("@networkCalls").its("response.statusCode").should("not.be.oneOf", [400, 500]);
    }
  }
  
  export default ApiHelper;