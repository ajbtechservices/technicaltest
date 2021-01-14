# Technical test project

### Setup Instructions
Clone this repository. Then in command line type.
`yarn`

Fill in the url in the `.env` file for the server. The default would be [http://localhost:3001/](http://localhost:3001/) unless you go in the server and change this. 

Then run `yarn dev` to launch both the client and server. It uses concurrently to run both. 


### Task Instructions

The task is to pull vehicle information out the express server running at the above url.
You will receive a list of general vehicle information.
You are now required to traverse the API and make further calls to get vehicle-specific information such as price and description.
Example mobile, tablet & desktop designs have been provided.
You are required to produce a similar layout for your component.

### Reasons for change to task

I felt that I could improve the overal project by making it more like a mono repo, using a more modern approach. I did this as I felt that this better reflects my code style / skillset for the purposes of a tehnical test. The end result is the same as the original task though. 

The server & data is mostly the same, except I added vehicle names and a slight change to the api url path for each car (adding 'public') to match the API paths as setup in `server.js`. For the server it's self, it now uses a router with a public prefex in the URL (sometimes you might want a /private/ endpoint which requires auth). 

### Testing
Be sure to launch the server before running tests as its dependent on it. You can run it by using `yarn test` from the project root.
You can just run `yarn server`from the project root. Similarly, you can run just the React application by running `yarn client`
