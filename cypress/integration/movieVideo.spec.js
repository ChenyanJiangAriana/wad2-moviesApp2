let video;    

describe("Video Movie" , () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.wait(3000)
        cy.get(".card").eq(2).find("img").click();
      });
    

    describe("Video test", () => {
        it("Show movies video when click the player icon", () => {
            cy.wait(3000)
            cy.get('div').get("i.far.fa-play-circle").eq(5).click()
            cy.wait(3000)
            cy.get("button.close");
        });
      })
         
})
