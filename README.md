# React Portfolio

## Description
This is my portfolio created with React.jsx. The program containts components like an About Me page, Portfolio page, a Contact page, and a Resume which will contain a link to my resume in a future installion. In the footer is a link to my GitHub.

## Table of Contents
* [Installation](#installation)
* [License](#license)
* [Collaborators](#collaborators)
* [Planned Implementation](#planned-implentation)
* [Questions](#questions)


## Installation
1. Clone the repository:
```bash
    git clone https://github.com/Falmanza94/React-Portfolio-Ku-Coding-Bootcamp-2025.git
```
2. Installer for Vite:
```bash
    npm create vite
```
--> Enter name of your project folder
--> From the first list of options, select your framework; `React`
--> From the second list of options, select your variant;`JavaScript`
--> `cd` into your newly created project folder and run `npm install`

### Further customization (Recommended)

1. Navigate to your `package.json` and modify the `scripts` object so that it looks like this example:

```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

* Note the addition of the `"start": "vite"` script.

2. Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

3. Run the Program:
```bash
    npm run dev
```

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

See the [LICENSE](LICENSE) file for more details.

## Collaborators
I had the joy of discussing code with Danny Wortman and Mina Draper-Hammond. Additionally, I also used the Xpert Learning Assistant Chat+, Chapt GPT, and MDN_Web_Docs as my resources.

## Planned Implementation
I plan on further fleshing out my program by adding the following:

* Link to a résumé
* More components (e.g., Skills, Testimonials)
* Add a more colorful background to the page
* Improve the layout with animations or transitions


## Questions
If you have questions, reach out to me at [fischer.almanza@gmail.com](mailto:fischer.almanza@gmail.com). You can find more of my work at [Falmanza94](https://github.com/Falmanza94).