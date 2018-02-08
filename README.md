# Eat Da Burger
This is a full stack application leveraging Node.js, Express, SQL, Handlebars, and custom built ORM.

###Description 
The user can add any burger they wish to the application, which adds an entry into the SQL database. Once added, the page is updated with the entry and is loaded into the left column ready to be eaten. When the user clicks on the devour button, data is passed back to the database to update the matching record, which prompts the site to move the entry to the right side of the screen.

The front end is built on the Bootstrap framework, and the UI is templated with Handlebars.

The back end built with Node.js using Express and a custom ORM to integrate with MySQL. 

###Demo
You can check out the deployed version on Heroku [here](https://rocky-everglades-74994.herokuapp.com/)