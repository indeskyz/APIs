## Built Using Django and React

- uses Redux for state management & PostgreSQL as the main database
- you need psycog2 and an instance of PostgreSQL in order to start the Django Server
  - **PostgreSQL credentials can be found in the /crud_project/crud_project/ directory you will need to configure them for your personal instance**

### To Run

**Install and Configure PostgreSQL on your machine then run pip3 install psycog2**

**Start the Django Server**

> python manage.py runserver 8080

**Navigate to /frontEnd/todos & run**:

> npm install

**Next create a .env file in /frontend/todos** & add the following:

> PORT=8081

**In /frontend/todos run**:

> npm start

**You can now view the application at _http://localhost:8081_**
