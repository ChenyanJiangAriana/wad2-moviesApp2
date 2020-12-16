let movies;
const movieId = 602211; 
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");

    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Top Rated Movies");
      
    });
  });

  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit("/");
      
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.wait(3000)
      cy.get(".card").eq(4).find("img").click();
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movies[4].id}/reviews`);
      cy.wait(3000)
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movies[4].id}/reviews`);
    });
    it("should change browser URL when show/hide Cast is clicked", () => {
      
      cy.get(".card").eq(0).find("img").click();
      cy.contains("Show Cast").click();
      cy.url().should("include", `/movies/${movies[0].id}/cast`);
      cy.contains("Hide Cast").click();
      cy.url().should("not.include", `/movies/${movies[0].id}/cast`);
    });

    it("should change browser URL when show/hide similar movies is clicked", () => {
      cy.get(".card").eq(2).find("img").click();
      cy.contains("Some Similar Movie").click();
      cy.url().should("include", `/movies/${movies[2].id}/similar`);
      cy.contains("Hide").click();
      cy.url().should("not.include", `/movies/${movies[2].id}/similar`);
    });
  

    it("navigate to the full review page when a 'Full Review' link is clicked", () => {
      cy.wait(3000)
      cy.get(".card").eq(2).find("img").click();
      cy.contains("Show Reviews").click();
      cy.url().should("include",`/movies/${movies[2].id}/reviews`);
    });

    it("navigate to the cast page when a 'show Cast' button is clicked", () => {
      cy.wait(1000)
      cy.get(".card").eq(0).find("img").click();
      cy.contains("Show Cast").click();
      cy.url().should("include", `/movies/${movies[0].id}/cast`);
    });

    it("navigate to the similar movies page when a 'Some Similar Movies' button is clicked", () => {
      cy.wait(3000)
      cy.get(".card").eq(2).find("img").click();
      cy.contains("Some Similar Movies").click();
      cy.url().should("include", `/movies/${movies[2].id}/similar`);
    });


  });

  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(3).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.wait(3000)
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });

  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");

    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("No. Movies");
    });
    it("should navigate from favorites page to movie details and back", () => {
        cy.wait(3000)
        cy.get(".card").eq(0).find("button").click();
        cy.get("Button").eq(0).click();
        cy.contains("Favorite Movies").click({force:true});
        cy.get(".card").eq(0).find("button").click();
        cy.contains("Back").click();
        cy.url().should("include", `/favorites`);
        cy.get("h2").contains("Favorite Movies");
    });
  });
});

