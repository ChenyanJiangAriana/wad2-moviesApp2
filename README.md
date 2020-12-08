# Assignment 1 - ReactJS app.

Name: Chenyan Jiang

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - .... a statement of its purpose/objective ..... 
 + Feature 2 - .......
 + Feature 3 = ......
 + etc
 + etc

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/top_rated - get top rated movies information
+ https://api.themoviedb.org/3/movie/now_playing - get now playing movies information

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/nowPlaying (public) - displays the now Playing movies
+ /movies/topRated (public) - displays the top rated movies
+ 

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

1. firebase auth 
 soure code firename: 
     src/login/       src/login/fire.js (do as google firebase documentation required - var firebaseConfig)
                      src/login/login.css 
                      src/login/index.js    (logicial jump to Hero.js-after login success/ Login.js - in order to login)
                      src/login/Login.js    (main UI for login function)
                      src/login/Hero.js     (after login authentication success show this first page)
     src/index.js

 learning material:   https://www.bilibili.com/video/BV13E411W7Tn/?spm_id_from=333.788.videocard.1   
                                   - a nice website bilibilli help me a lot
                      https://firebase.google.com/docs/web/setup?hl=zh-cn   
                                   — developer documentation thanks google

2. React UI libraries: Material UI - button, temporaryDrawer
 soure code firename:
     src/components/nav/index.js     finish a TemporaryDrawer, 
                                     button new UI

 learning material:   https://material-ui.com/components/drawers/
                      https://material-ui.com/components/buttons/


                     
     
     
  
. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png