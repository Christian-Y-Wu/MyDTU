# MyDTU Server

This project consists of the code for the remote Heroku server to prove ownership of the domain host with regards to the redirection in the OAuth 2.0 authorization process. 

Without this server running, the Authorization server will not be able to redirect the OAuth client back to the main application, but instead go to the redirecturl in the browser which leads to an empty page. 
## Description

This index.js file sets up a simple Express server with CORS middleware enabled. It serves two files from the `.well-known` directory: `apple-app-site-association` and `assetlinks.json`. It also creates an HTTPS server using the provided key and cert files. The server listens on the specified port and logs a message to the console upon success.


## Set up

1. Install the required dependencies by running `npm install cors express http fs`.
2. Make sure you have the necessary `key` and `cert` files in a `cert` directory.
3. Replace `process.env.PORT` with the desired port number on which you want the server to run.
4. Run the server by using `node index.js`.
