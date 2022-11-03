# EJS-selfLearning

Express.js is a Node.js framework . i's the most popular framework as of now (the most starred on NPM).

ExpressJS is a web application framework that provides you with a simple API to build Websites,web apps and backends. 

why do we actually need Express.js?

try to write a small REST API server in plain Node.js(that is,using only core modules) and then in Express.js.The latter will take you 5-10x less time and lines of code.

imp!! In NPM package manager , we can't use any capital letter in name of package.It doesnot allow it.

res.send()-> It sends the response directly.
res.status.send()-> It first checks the status of the code ,then sends the response.So in case of any error we can send a message.

Difference between res.send() and res.json():
The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.

res.send(statusCode)->will return status of the page whereas res.json(statusCode) will just simply write statusCode.
es.json(404) then res.json forces the argument to JSON and I am writing res.send(404) then his will return a status code 404 not found.
