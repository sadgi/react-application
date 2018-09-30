
# Todo Application
This is Todo application for all the tasks having properties Title, Description, Status, Due Date, Created At, Updated At,
Completed At.It simply display all the tasks and way to add more task, edit already existing tasks and delete the task as per input given by the user and it also provide the functionality of sorting the task on the basis of its title as well as completion date.In the end user can export the data into .csv file.
The front end of the project is built using react.js and backend is express.js and database is MongoDb.


## Getting Started

First you need to clone the project from github repository and it contains both the folders for frontend and backend.For frontend side the name of application is todoApplication and for backend side the name of the application is express-backend.
Backend is mongo db.

How to run the project
1. Start the mongo db server and keep it running.
2. Go inside the folder of express-backend and run the command "PORT=8088 node app.js" so that backend services starts running and connecting with mongodb.
3. Before you start run the front end portion of the application just install chrome extension named as CORS to allow access control issues because i have two separate application for frontend and backend and for integration we need to allow access control origin.
4. Go inside the folder of todoapplication and run the command "npm start".It will ask you to add it on different port then press yes and application will be up on the browser particularly chrome.
5. In the application just perform the functionality as per choice and it redirects you accordingly.
 

### Prerequisites
1. Need Node.js
2. Need to install react.js
3. Need to install express.js
4. Need to install Mongo db 
5. Need to install CORS plugin extension in chrome browser.

### Assumptions
I have made assumption that user is simply entering the data and its always correct no functionality to validate the data inside the application. It just worked with the data whatever user enters into the UI.

### Future Improvements
The application look and feel can be changed instead of making multi paging application i can make it as single page as well as responsive and provide compatibility with different browsers  and put some validation checks on the input from the user.Moreover the application needs some authentication component so that it can restrict to the tasks pending and done  by the particular authenticated user.


