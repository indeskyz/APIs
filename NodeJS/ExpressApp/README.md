## Express App which fetches an external API

- Uses Axios to make API requests
- Redis is used to preform a caching solution
- Provides test cases using Jest and Mocha

* The external API can only handle one query parameter at a time so this application uses Promise.All to make multiple concurrent requests
* Query Parameter sanitation is handled as well, you may only pass in expected parameters, all others will result in a 404 response
* The redis server is being seperately hosted on a raspberry pi to ensure constant uptime

### To Run

> **npm install**

- Create a .env file with the following:

  > **PORT**=port number || 9005

  > **SERVER_ADDRESS**= _http://localhost || your custom ip/domain_

  > **REDIS_PORT**=_port number_ || 9095

  > **REDIS_ADDRESS**=_ip of redis server_ || 10.35.212.110

  > **API_ROUTE**=_your api which you want to access_ || https://api.hatchways.io/assessment/blog/posts

- After a .env file is created run:
  > **npm start**
