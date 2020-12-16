# Assignment 1 - ReactJS app.

Name: Chenyan Jiang

## Features.

A bullet-point list of the ADDITIONAL user features I have implemented for the  Movies Fan app

#####        Overall,

- Feature 1 - 10 new TMDB endpoints.

- Feature 2 - 8 new views.

- Feature 3 - Routing.(protected and public)

- Feature 4 - Dynamic and interactive UI, Material UI.

- Feature 5 - Web form.

- Feature 6 - Extensive data hyperlinking.

- Feature 7 - Storybook support.

- Feature 8 - Styled Components 3rd party components.

- Feature 9 - Fire base authentication 

  

  ##### Details,

 + Feature 1 - trending people : user can see the cast which is now very popular 
 + Feature 2 - new React UI libraries: Material UI - build a new temporary drawer - entrance for (Watch List, Favorite Movies, Home Page, Trending People) combine this new element into the old site components
 + Feature 3 - new Detail Page, contain the similar movie recommentation, new function - see the related cast
 + Feature 4 - user can see the traller in the movie detail page 
 + Feature 5 - slide in now playing movies showed all page as a recommadation for attract people to learn more about now playing movies
 + Feature 6 - can see similar movies in movie detail page and related cast information
 + Feature 7 - use the login function and firebase to make some authentifiaton, also log out function.

## Setup requirements (If required).

npm install ( usually work when I test it )

I use @cypress/instrument-cra to see code coverage in cypress.  If it  can't detect this package occasionally. Re install it 

```node.js
npm i --save-dev @cypress/instrument-cra
```

I also use the below, when build now function for movies' trailer video, and slide.

```
npm install react-player
npm install react-router-dom
npm install react-rating-stars-component
npm install react-bootstrap-carousel
npm install axios   
npm install react-bootstrap bootstrap 
```

If you make any change 

```
npm run build 

npm run analyze
```

API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/top_rated - get top rated movies information
+ https://api.themoviedb.org/3/movie/now_playing - get now playing movies information
+ https://api.themoviedb.org/3/movie/top_rated - get topRated playing movies information
+ https://api.themoviedb.org/3/person/popular - get popular people's list 
+ https://api.themoviedb.org/3/person/${id} - get the detail information of specific person 
+ https://api.themoviedb.org/3/movie/${id}/similar - get similar movies information in movie detail page
+ https://api.themoviedb.org/3/movie/${id}/videos - get video for traller video for detail movie page
+ https://api.themoviedb.org/3/movie/${id}/credits -get movies cast and credits


## App Design.

### Component catalogue (If required).

 a screenshot from the Storybook UI, hi-light stories relating to new/modified components 

![][stories]

### UI Design.

screenshots of the new/modified views you have added to the Movies Fan app.

#### 

![][mainPageWithDrawAndSlide]

>#### They can login or log out. We can see the slide in now playing movies,user can click to change different poster.

![][movieDetail]
>#### Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>#### Shows the full text for a movie review. 

![][movieDetailPageTraller]
>#### In movieDetailPage add an related traller, user can watch traller video, to know more about this movie.

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/nowPlaying (public) - displays the now Playing movies
+ /movies/topRated (public) - displays the top rated movies
+ /people/pupular(public) - displays the popular movies list
+ /people/movies/watchlish(protected) - display the movies that you want to look into the watchlist
+ /people/:id (public)- show the person's details information by id
+ /movies/:id (public)- show detailed information about movie by id 

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][login]
> Show an login page as the first when visit the root page

![][signUp]
> Change the login page to sign up page by click the "sign up"

![][firebase]
> After the sign up finished the information is saved in authentication on firebase area

![][mainPagewithDrawAndSlide]
> the first page to show when login successful.
> The menu which hidden by the draw can be seen by click the "menu" button
> The slide of nowplaying movies is showing at the top of the page which attract people to learn more about the now playing movies (sounds like an advertisement)
> User can click the arrow icon on both side of the slide to see differnt now playing movies
> If they want to see more about the now playing movies they can also to the now playing movies list by click "now playing" link in the navigation

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][cardCastLink]
> Clicking a card causes the display of that movie's details

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][movieDetailShowCastOfThisMovie]
> Click the button "show cast", to show the hidden details of the cast in this movies

![][movieDetailCast]
> After click the show cast this page is shown. We can see more information about this cast by click the link in the right side of the table - "Actor Profile". 

![][movieDetailCastDetails]
> Now the movie detail cast page is shown.

![][mainPagewithDrawAndSlide]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][movieDetailPageTraller2]
> Click the "playing" icon to play video about this movie's traller

![][movieDetailPageTraller3]
> Click the Close button in the up right area to close the traller or find other youtube video.
## Independent learning (If relevant).

1. #### firebase auth 
 
    ##### soure code firename: 
    
    | src/login/   | src/login/fire.js   | (do as google firebase documentation required - var firebaseConfig) |
    | ------------ | ------------------- | ------------------------------------------------------------ |
    |              | src/login/login.css |                                                              |
    |              | src/login/index.js  | (logicial jump to Hero.js-after login success/ Login.js - in order to login) |
    |              | src/login/Login.js  | (main UI for login function)                                 |
    |              | src/login/Hero.js   | (after login authentication success show this first page)    |
    | src/index.js |                     |                                                              |

​    **learning material:**   https://www.bilibili.com/video/BV13E411W7Tn/?spm_id_from=333.788.videocard.1   
​                                         reference: https://firebase.google.com/docs        — developer documentation thanks Google

2. #### React UI libraries: Material UI - button, temporaryDrawer
 
    ##### soure code firename:  src/components/nav/index.js 
    
     finish a TemporaryDrawer
    
    ![][draw]

#####         learning material:   

| https://material-ui.com/components/drawers/     |
| :---------------------------------------------- |
| **https://material-ui.com/components/buttons/** |



---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Chenyan Jiang

## App Features.

<u>Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.</u>

Tests: cypress/integration/movieDetails.spec.js 

![][movieDetail]

<u>Movie Review page: Displays the full text of a movie review.</u>

Tests: cypress/integration/movieReviewPage.spec.js 

![][review]

<u>login page: Displays the login and sign up page.</u>

Tests: cypress/integration/log-page.spec.js 

![][login]

<u>Homepage: The main page.</u>

Tests: cypress/integration/movieSlide.spec.js 

![][mainPagewithDrawAndSlide]

<u>Person: person page testing</u>

Tests: cypress/integration/person-page.spec.js 

![][cardCastLink]

![][personPage]

Tests: cypress/integration/movieVideo.spec.js 

![][movieDetailPageTraller]

Tests: cypress/integration/ufavoirite-page.spec.js 

![][favorite]

<u>The navigation test: the page should have different route url when enter or click some button</u>

Tests: cypress/integration/navigation.spec.js 

![][favorite]

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/organizations/d39f3020-0fa9-4d9b-9208-1662c0d53dd5/projects

### Advanced Testing (If required)

+ cypress/integration/topRated-page.spec.js - test the toprated page when with the hyperlinking and change url test in navigation.spec.js
+ cypress/integration/upcoming-page.spec.js - test when a movie has similar movie and the the url change and filter function test
+ cypress/integration/person-page.spec.js - test person detail page when click person link and button.
+ cypress/integration/movieSlide.spec.js -  click icon to change the slide to an different poster.
+ cypress/integration/movieDetails.spec.js - test the movie detail page when the nav change or click the similar movies button or click to see the cast information.

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)





Thanks for reading. If you have any questions just email me : 624071310@qq.com

List reference material links (articles/blogs).
---------------------------------



[model]: ./data.jpg
[mainPagewithDrawAndSlide]:./public/mainPagewithDrawAndSlide.png
[cardCastLink]: ./public/drawmenu.png
[draw]: ./public/draw.png
[firebase]: ./public/firebase.png
[drawmenu]: ./public/drawmenu.png
[movieDetailshowCastofThisMovie]: ./public/movieDetailshowCastOfThisMovie.png
[movieDetailCastDetails]: ./public/movieDetailCastDetails.png
[personPage]: ./public/personPage.png
[movieDetailPageTraller]: ./public/movieDetailPagetraller.png
[movieDetailPageTraller2]: ./public/movieDetailPagetraller2.png
[movieDetailCast]: ./public/movieDetailCast.png
[movieDetailPageTraller3]: ./public/movieDetailPagetraller3.png
[login]: ./public/login.png
[signUp]: ./public/sign.png
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewlink.png
[movieDetailSimilarMovie]: ./public/movieDetailSimilarMovie.png
[cardLink]: ./public/cardlink.png
[favorite]: ./public/favorite.png
[stories]: ./public/storybook.png

---------------------------------






