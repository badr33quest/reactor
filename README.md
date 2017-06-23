Reactor - React Modern Boilerplate
==================================

<img src='./.README/reactor-logo.png' height='100' />

## Description
  Boilerplate for quick start developing with ReactJS. 

## Technologies

**JS:**
  - Babel
    - babel-preset-env
  - React
    - react-router-v4
    - react-hot-loader next
  - Redux
    - redux-thunk
    - redux-logger
 
**Styles:**
  - Sass
  - PostCSS (autoprefixer)
  - Bootstrap-sass (customizable)

**Environment:**
- Webpack 2:
  - webpack-dev-server
  - HMR
- Server for mocking API (HMR supported)

**QA:**
- Eslint

## Project structure
**Principles:**
- atomic design (react compoments)
- ducks (redux)

## NPM Scripts
**Development:**
```npm start:server``` run server with API mocks (will be available at [http://localhost:3000/](http://localhost:3000/))

```npm start:client``` run client (will be available at [http://localhost:8080/](http://localhost:8080/))

**Production:**
```npm run build``` build client application to /dist folder

**Testing:**
```npm run lint``` run eslint for client application