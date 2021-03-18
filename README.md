# WAQ_VINYL

## Description

This is an application that allows the user to search for albums, add them to a list of ones in their collection, add to their wishlist, and update their quantity and the price they paid. We use a simple crud application that searches the discog API based on the artist and/or album. This search is displayed on the page with buttons that allows you to add to your personal collection and/or your wishlist. 

## Links

You can access the application here: https://whispering-everglades-63027.herokuapp.com/

## Future Work

This project needs a user authentication aspect to really make it function how intended. If users are able to sign up and log in, they will be able to manage their own personal collections and wishlists. Without this, there is only one master user.
The project needs a tighter funneling from our chosen API. Discog’s API is very powerful and holds a lot of information, but also includes some empty albums and interesting formatting that we would need more time with to correctly funnel only complete datasets. Until then, we have a few search results that come back wonky.

The project would benefit from being able to see other user data and seeing what others have in their collections and their wishlists. This would make the app a lot more enjoyable and less like a handful of lists.
Our original plan was to dynamically add data from an outside API for artists and albums to a handful of lists. We met our original goal. Along the way, we found out the difficulty of adding user authentication, but are still motivated to make it work. Inter-user connectivity would be a super beneficial feature if we continued to work on this.

## Table of Contents

- [Description](#Description)
- [Links](#Links)
- [Install](#Install)
- [Features](#Features)
- [Built With](#Built-With])
- [Code organization](#Code-organization)
- [Design pattern used](#Design-pattern-used)
- [References](#Tests)
- [Tests](#Tests)
- [Design Documentation](#Design-Documentation)
    - [User Stories](#User-Stories)
    - [User Case](#User-Case)
- [Authors](#Author)
- [License](#License)
 
## Install

You can fork this repo and run from node. You will need to set up the .env variables.
Dependencies - npm packages (back end)
 "dependencies": {
   "bcrypt": "^5.0.1",
   "cors": "^2.8.5",
   "dotenv": "^8.2.0",
   "express": "^4.17.1",
   "express-session": "^1.17.1",
   "mongoose": "^5.12.0"
 },
 "engines": {
   "node": "14.15.4",
   "npm": "6.14.10"
 }
 
## Features

## Built With

- React
- mongodb
- node.js
- express.js
- bcrypt
- cors
- dotenv
- npm
- JavaScript
- bootstrap
- Heroku
- mongodb Atlas

## Code organization

The project tries to follow the coding style guide provided by AirBnb.

## Design pattern and System design approach


## References

## Tests

## Design Documentation

## User Stories

### Minimum Viable Product:
- “As a WAQ_Vinly User, I want to search for album’s to add”
- “As a WAQ_Vinly User, I want to search for my collection by artist ”
- “As a WAQ_Vinly User, I want view my collections”
- “As a WAQ_Vinly User, I want view my wishlist”
- “As a WAQ_Vinly User, I want add an album to my collections”
- “As a WAQ_Vinly User, I want add an album to my wishlist”
- “As a WAQ_Vinly User, I want edit an collections”
- “As a WAQ_Vinly User, I want edit an wishlist”
- “As a WAQ_Vinly User, I want to delete an album from my collection”
- “As a WAQ_Vinly User, I want to delete an album from my wishlist”

### Stretch Goals:
- “As a WAQ_Vinly User, I want to see my friends collections” 
- “As a WAQ_Vinly User, I want to see my friends Wishlist”
- “As a WAQ_Vinly User, I want use the app across all my devices” - CSS
- “As a WAQ_Vinyl User, I will have a playlist made up for me based on what I have in my collection (1 or 2 songs from each record)”

## Authors

William Leacy (Current Author),
MarQuez LeDay (Current Author),
A.J. Hutchins (Current Author).






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
