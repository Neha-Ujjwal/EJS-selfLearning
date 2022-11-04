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

## Template Engine

A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.

To render template files, set the following application setting properties, set in app.js in the default app created by the generator:

views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.
view engine, the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug').
link- https://expressjs.com/en/guide/using-template-engines.html
