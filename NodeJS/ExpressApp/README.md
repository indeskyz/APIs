## Express App which fetches an external API

- Uses Axios to make API requests
- Redis is used to preform a caching solution
- Provides test cases using Jest and Mocha

* The external API can only handle one query parameter at a time so this API uses Promise.All to make multiple concurrent requests
* Query Parameter sanitation is handled as well, you may only pass in expected parameters, all others will result in a 404 response
* The redis server is being seperately hosted on a raspberry pi to ensure constant uptime
