let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Upcoming Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
    cy.contains("Upcoming").click()
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Upcoming Movies");
        cy.get(".badge").contains(20);
      });
    })
    describe("Filtering", () => {
        describe("By movie title" ,() => {
          it("should display movies with 'p ' in the title", () => {
            const searchString = 'p'
            const matchingMovies = filterByTitle(movies, searchString );
            cy.get("input").clear().type(searchString) ;
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            });
          })
          it("should display movies with 'o' in the title", () => {
            const searchString = "o";
            const matchingMovies = filterByTitle(movies, searchString);
            cy.get("input").clear().type(searchString);
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            })
          })
          it("should display movies with 'xyz' in the title", () => {
            const searchString = "xyz";
            const matchingMovies = filterByTitle(movies, searchString);
            cy.get("input").clear().type(searchString);
            cy.get(".card").should("have.length", matchingMovies.length);
         
          })
        })
        describe("By movie genre" ,() => {
            it("should display movies with the specified genre only", () => {
                const selectedGenreId = 35;
                const selectedGenreText = "Comedy";
                const matchingMovies = filterByGenre(movies, selectedGenreId);
                cy.get("select").select(selectedGenreText); 
                cy.get(".card").should("have.length", matchingMovies.length);
                cy.get(".card").each(($card, index) => {
                  cy.wrap($card)
                    .find(".card-title")
                    .should("have.text", matchingMovies[index].title);
                });          
              });
        })
        describe("By title and movie genre" ,() => {
            it("should display movies with the specified movie title and genre ", () => {
                const searchString = "m";
                const matchingMovies = filterByTitle(movies, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".card").should("have.length", matchingMovies.length);
                cy.get(".card").each(($card, index) => {
                  cy.wrap($card)
                  .find(".card-title")
                  .should("have.text", matchingMovies[index].title);
                })
                const selectedGenreId = 35;
                const selectedGenreText = "Comedy";
                const matchingMovies0 = filterByGenre(matchingMovies, selectedGenreId);
                cy.get("select").select(selectedGenreText); 
                cy.get(".card").should("have.length", matchingMovies0.length);
                cy.get(".card").each(($card, index) => {
                  cy.wrap($card)
                    .find(".card-title")
                    .should("have.text", matchingMovies0[index].title);
                });      
              });
        })

        describe("Add to watch-list button test", () => {
          it("should disappears in upcoming movies page when click the button", () => {
            cy.wait(2000);
            cy.get(".card").eq(0).find("Button").click();
            cy.get('Button').eq(0).click()
            cy.contains("Watch List").click({force: true})
           
          });
      })
      })

    })
