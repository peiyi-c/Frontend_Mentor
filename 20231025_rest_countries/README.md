# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Overview

### The challenge

Users should be able to:

- See all countries from the [API](https://restcountries.com/) on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshots
<details>
<summary>Homepage</summary>

  #### Example: Filter by region Americas
  
![Opera Snapshot_2023-11-18_151828_numerous-zephyr surge sh](https://github.com/peiyi-c/Frontend_Mentor/assets/73789013/dc5b9596-f331-465e-8182-077f99290919)

</details>
<details>
<summary>Country detail</summary>

  #### Example: Panama

![Opera Snapshot_2023-11-18_152056_numerous-zephyr surge sh](https://github.com/peiyi-c/Frontend_Mentor/assets/73789013/3cbb5f46-3267-4f5a-8047-170042fd96cf)

</details>

### Link

- Live Site URL: [URL](https://20231025-rest-country.netlify.app/)

### File structure

```
├── dist
├── public
├── src
│   ├── assets
│   ├──components
│   │     ├── Header
│   │     │   ├── index.jsx
│   │     │   └── index.scss
│   │     │
│   │     ├── HomePage
│   │     │   ├── index.jsx
│   │     │   └── index.scss
│   │     │
│   │     ├── Navigation
│   │     │   ├── index.jsx
│   │     │   └── index.scss
│   │     │
│   │     ├── Main
│   │     │   ├── index.jsx
│   │     │   └── index.scss
│   │     │
│   │     ├── CountryCard
│   │     │   ├── index.jsx
│   │     │   └── index.scss
│   │     │
│   │     ├── CountryCardLoading
│   │     │   ├── index.jsx
│   │     │   └── index.scss
│   │     │
│   │     ├── CountryCardDetail
│   │     │   ├── index.jsx
│   │     │   └── index.scss
│   │     │
│   │     ├── CountryCardDetailLoading
│   │     │   ├── index.jsx
│   │     │   └── index.scss
│   │     │
│   │     └── Border
│   │         ├── index.jsx
│   │         └── index.scss
│   ├──pages
│   │     └── HomePage
│   │         └── index.jsx
│   │
│   │
│   ├── containers
│   │     ├── CountryContext
│   │     │   └──index.jsx
│   │     │
│   │     └── ThemeContext
│   │         └── index.jsx
│   ├── helpers
│   │     └── index.js
│   │
│   ├── App.jsx
│   ├── App.scss
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
...
└── README.md

```

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- React Router
- Axios

### What I practiced

- Make HTTP requests with Axios
- Add loader animation while data is loading

### Continued development

- Customize multiselect dropdown style

## Author

- Website - [Pei-Yi C.](https://github.com/peiyi-c)
