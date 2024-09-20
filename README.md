# Mini Netflix

This mini project fetches a list of movies from the "OMDb API" and renders them on the homepage. When a user clicks on any movie poster, they are redirected to a detailed page displaying more information about the selected movie.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

## Add .env file

Create .env file inside project directory with the below variables. Make sure to add your own OBMI_API credentials. You can change VITE_OBMI_DEFAULT_SEARCH to see differnt results by default.

```sh
VITE_OBMI_API_KEY='YOUR_OBMI_API_KEY'
VITE_OBMI_DEFAULT_SEARCH='YOUR_OBMI_DEFAULT_SEARCH'
VITE_API_URL='https://www.omdbapi.com'
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
