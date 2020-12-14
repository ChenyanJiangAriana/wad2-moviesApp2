let movies;    // List of movies from TMDB


describe("Now Playing movie Slide ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=2`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
    cy.wait(3000)
  });
  
    describe("Base test", () => {
      it("displays slide about now playing movies", () => {
        cy.wait(3000);
        cy.get("h2").contains("No. Movies");
        cy.get(".badge").contains(20);
      });
    })
    
    it("should show different movie Slide", () => {
        cy.wait(3000);
        cy.get('div').get("a.right.carousel-control-next").click();
        cy.wait(3000);
        cy.get("h2").contains("No. Movies");
        cy.get(".badge").contains(20);
      })

})

