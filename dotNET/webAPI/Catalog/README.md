# .NET Web API

- The application is dockerized and connects to a seperate MongoDB container for storage
- Provides all CRUD operations

# To Run

- First Ensure Docker is installed and configured on your machine

- Then run:

  > docker build -t catalog:v1 .

- Create a network so you can run both the application and mongo containers:

  > docker network create <_yournetworkname_>

- Next run to create the image:

> docker run -d --rm --name mongo -p 27017:27017 -v mongodbdata:/data/db -e MONGO\*INITDB_ROOT_USERNAME=hazel -e MONGO_INITDB_ROOT_PASSWORD=\<mongoDBPassword\> mongo

- Now you can start the application by running:

  > docker run -it --rm -p 8080:80 -e MongoDbSettings:Host=mongo -e MongoDbSettings=\<mongoDBPassword\> catalog:v1
