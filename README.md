# GlicoPal

GlicoPal is a full CRUD app that implements:
  1. MongoDB to storage data.
  2. Javascript logic and JQuery DOM manipulation
  3. Materialize CSS Framework.
  4. EJS package.
  5. Mongoose Framework with model relationships.
  6. Express sessions package
  7. Bcrypt
  8. Mobile responsiveness

 On page load:
  There is a brief description on how the app works and a carousel with images of every step that the app has in order to upload and manipulate each log.
  This app is useful for patients with any stage of Diabetes and it makes it easy to keep track of the glucose levels during the day as well as Insulin applications, weight and time of the day when those were recorded.


User Story:
Each new person that enters the app is welcomed and given a brief description of the app complemented with a carousel of images of each piece of functionality that the app has.
On the navbar there are options to sign-up or log-in that will take the user to their respectives routes in order to start a new session or create a new user.

If the user signs-up for the first time then after the sign-ip process, is returned to the welcome page and now they can log-in.

Once logged in, the user name is displayed in the navbar and they are taken to their main page where the current logs are. The navbar now is updated with a + button to add a new log and a logout option to end the session.

Each log has a colored icon that represents the level of safety of the glucose level when recorded and the glycemia level as well as the date and time when it was recorded. The user can click on each log and be directed to that particular log's page where they will find the necessary tools to edit or delete that log as well as the ability to go back to the main log list.

Whenever the user wants to log out they can click on the log out button and that will delete the current session
