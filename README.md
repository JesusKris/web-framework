# Mist.js - A lightweight web framework

## Table of Contents
- [Mist.js - A lightweight web framework](#mistjs---a-lightweight-web-framework)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Team \& My Work](#team--my-work)
  - [Main Learnings](#main-learnings)
  - [Setup](#setup)

## General Information
 This project was made as a school project in [kood/Johvi](https://kood.tech/). (10.27.2022) 
 
 This project required us to create a lightweight web-framework that abstracted the DOM, implemented routing and states.

 We were also given instructions to pay extra attention to documenting the framework.

It consists of:
1. cli-tool: just a simulated 'cli-tool' using bash script that will scaffold you a project
2. source: source of the framework
3. TodoMVC: semi-official implementation of [TodoMVC](https://todomvc.com/) using this framework

  **NB! Different source control platform was used hence no commit history.**


## Features
- **Virtual DOM** - Mist.js makes use of the virtual DOM. The changes are not straight made to the DOM, instead a replica of the DOM is created which is present in the form of data structures. Whenever changes are made, they are made in data structures and then compared to the original data structure. The final changes are then updated to the real DOM which makes it very lightweight.
-  **Routing** - Mist.js has built-in SPA url routing that allows the user to easily define routes and import components for the corresponding route.
-  **State Manegement** - Mist.js allows you to define reactive props that will be watched for changes. When a prop is changed. The state of the prop will be updated across the application.
-  **Templates** - Mist.js provides HTML-based templates using JSX. Mist complies the templates into virtual DOM that then will be rendered on the actual DOM. This makes this framework easy to use.
-  **Lightweight** - Mist.js is very lightweight and is not suitable for enterprise applications.
-  **Documentation** - Mist's methods are well documentated using TSDoc and TypeDoc making it easy to understand and learn.


## Technologies Used
- ### [TypeScript](https://www.typescriptlang.org/)
- ### [Node.js](https://nodejs.org/en/)
- ### [JSX](https://reactjs.org/docs/introducing-jsx.html)
- ### [Vite](https://vitejs.dev/)
- ### [ESLint](https://www.npmjs.com/package/eslint)
- ### [TypeDoc](https://typedoc.org/)
- ### [TSDoc](https://tsdoc.org/)


## Team & My Work
In this project I was in a team of 4 with 3 other students from kood/Jõhvi.

I was responsible for:
- Taking the product manager role and overview others and make sure progress was made and quality was met
- Designing the overall framework lifecycle
- Writing documentation
- Creating the *fake* CLI tooling
- Developing the URL based routing
- Gather feedback during daily meetings to improve the overall work environment


## Main Learnings
- Valuable leadership skills
- Basics of DOM abstraction
- Basics of URL routing
- Basics of TypeScript
- Writing documentation using real tooling
- How to design a product keeping UX in mind
- Documentation is important!

## Setup
Clone the repository
```
git clone https://github.com/JesusKris/web-framework.git
```
