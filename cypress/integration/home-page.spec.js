let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

  describe("Home Page ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          movies = response.results
        })
    })

    beforeEach(() => {
      cy.visit('http://localhost:8080') 
    });

    describe("Base test", () => { 
      it("displays page header", () => {
        cy.get('input[type="text"]').type('jcy@outlook.com')   //type the user name in the field
        cy.get('input[type="password"]').type('123456') //type the password in the field
        cy.get('button').eq(0).click()  //click the button         //vist the url
        cy.get("h2").contains("Movies");
        cy.get(".badge").contains(20);
      });
    })

    describe("Filtering", () => {
      describe("By movie title" ,() => {
        it("should display movies with 'p ' in the title", () => {
          cy.wait(3000)
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
          cy.wait(2000)
          cy.get("input").clear().type(searchString);
          cy.get(".card").should("have.length", matchingMovies.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
          })
        })
        it("the exceptional case when their are no matches", () => {
          cy.wait(1000)
          const searchString = "xyz";
          const matchingMovies = filterByTitle(movies, searchString);
          cy.get("input").clear().type(searchString);
          cy.expect(matchingMovies).to.have.length(0);
        
        }) 
      })
      describe("By movie genre", () => {
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
      });

      describe("By movie text and genre", () => {
        it("should display movies with the specified text and genre only", () => {
          const selectedGenreId = 35;
          const selectedGenreText = "Comedy";
          const searchString = 'p'
          const matchingMovies1 = filterByTitle(movies, searchString );
          const matchingMovies2 = filterByGenre(matchingMovies1, selectedGenreId);
          cy.wait(1000)
          cy.get("input").clear().type(searchString) ;
          cy.get("select").select(selectedGenreText); 
          cy.get(".card").should("have.length", matchingMovies2.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies2[index].title);
          });      
        });
      });


   });

});