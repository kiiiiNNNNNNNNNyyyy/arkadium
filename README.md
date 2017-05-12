### Arkadium
An web application which allows you to play a quiz about your favourite celebrity. By default, the application is set to quiz you about Brad Pitt movies.But the name of the star can be changed depending upon the name entered in the search bar. The details of the movies are extracted from The movie Database api. Since all the deatils are fetched according to the user's input, it need to be legit and acceptable. If the user enters a name which doesn't exist, then the default Brad Pitt Quiz will be rendered. The quiz randomly asks three types of qestions regarding a paricular actor/actress which can be as follows:

1. When did this actor appear in this movie?
2. Guess the name of this movie based on this poster.
3. Which movie is best described by this title?

User's answers is evaluated and the result is diplayed along with the correct answer if the user is wrong. In order to go to the next question, you need to click on "Play Again" Button.

---

## Front-end Challenge

The front end of the application is handled with ejs. The ejs renders data passed by the request. The font-end challenge consisted of geting the data from the "Themoviedatabase.json" file in the src folder. The file consists of Brad Pitt's movies data. This quiz rendered at the home routr ('/'). For the UI, I have used Bootstrap 3, therefore the application is mobile responsive. 

---

## Back-end Challenge
The backend challenge was optional. I have implemented the back-end of this application using nodejs. The application gets the data of a particular actor depending upon the search results. Actor's id is found first based on the searched name and then this id is used to get all the movies of that actor with the help of the api. If the user enters a name which doesn't exist, then the default Brad Pitt Quiz will be rendered.  