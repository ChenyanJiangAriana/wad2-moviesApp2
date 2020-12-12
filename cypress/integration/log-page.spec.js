describe("Log Page ", () => {
  beforeEach(() => {
    cy.visit('/')          //vist the url
  });

  it("should Sign Up", () => {
    cy.wait(3000)
    cy.get('button').eq(1).click()
    
    cy.get('input[type="text"]').type('jcy@outlook.com')   //type the user name in the field
    cy.get('input[type="password"]').type('123456') 
    cy.get('button').eq(0).click()  //click the button         //vist the url
    cy.get("h2").contains("Movies");
  })

  it("should logout and log in", () => {
    cy.wait(3000)
    cy.contains('Logout').click()
    cy.wait(3000)
    cy.get('input[type="text"]').type('jcy@outlook.com')   //type the user name in the field
    cy.get('input[type="password"]').type('123456') 

    cy.get('button').eq(0).click()  //click the button         //vist the url
    cy.get("h2").contains("Movies");
  })

});

