Reactor - React Modern Boilerplate
==================================

<img src='./.README/reactor-logo.png' height='100' />

## Description

**JS:**
  - Babel
    - babel-preset-env
  - React
    - react-router-v4
 
**Styles:**
  - Sass
  - PostCSS (autoprefixer)
  - Bootstrap-sass (customizable)

**Environment:**
- Webpack 2:
  - webpack-dev-server
  - react-hot-loader next
  - eslint-loader

**Principles:**
- Components organization pattern - atomic design

## Development

```npm start:server``` run server API (will be available at [http://localhost:3000/](http://localhost:3000/))

```npm start:client``` run client (will be available at [http://localhost:8080/](http://localhost:8080/))

## Production

```npm run build``` build client application to /dist folder

## Testing

```npm run lint``` run eslint for client application