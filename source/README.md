<p align="center">
  <img width="300" height="300" src="./assets/images/mist-logo.png">
</p>

<!-- ctrl + shift + v to preview -->
# Mist.js - A lightweight web framework


## A web framework as student project @[kood/Johvi](https://kood.tech/).


## **Table of Contents**
* ### [General Information](#general-information)
* ### [Technologies Used](#technologies-used)
* ### [Features](#features)
* ### [Setup](#setup)
* ### [Usage](#usage)
* ### [Acknowledgements](#acknowledgements)


## **General Information**
 This project is a student project @[kood/Johvi](https://kood.tech/). The project taught us how to implement a virtual dom engine, url based router and HTML templating based on JSX. The source code is implemented using TypeScript and OOP practices.

For development, we are using Vite bundler to speed up testing and Eslint to keep code consistent. We are also using Jest for unit-testing.

 For documentation, we are using TSDoc and TypeDoc.


## Technologies Used
- ### [TypeScript](https://www.typescriptlang.org/)
- ### [Node.js](https://nodejs.org/en/)
- ### [JSX](https://reactjs.org/docs/introducing-jsx.html)
- ### [Vite](https://vitejs.dev/)
- ### [ESLint](https://www.npmjs.com/package/eslint)
- ### [TypeDoc](https://typedoc.org/)
- ### [TSDoc](https://tsdoc.org/)


## **Features**
- **Virtual DOM** - Mist makes use of the virtual DOM. The changes are not straight made to the DOM, instead a replica of the DOM is created which is present in the form of data structures. Whenever changes are made, they are made in data structures and then compared to the original data structure. The final changes are then updated to the real DOM which makes it very lightweight.
-  **Routing** - Mist has built-in SPA url routing that allows the user to easily define routes and import components for the corresponding route.
-  **State Manegement** - Mist allows you to define reactive props that will be watched for changes. When a prop is changed. The state of the prop will be updated across the application.
-  **Templates** - Mist provides HTML-based templates using JSX. Mist complies the templates into virtual DOM that then will be rendered on the actual DOM. This makes this framework easy to use.
-  **Lightweight** - Mist is very lightweight and is not suitable for enterprise applications.
-  **Documentation** - Mist's methods are well documentated using TSDoc and TypeDoc making it easy to understand and learn.


## Acknowledgements
- ### [Virtual DOM](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05)
- ### [SPA Routing](https://github.com/thedevdrawer/spa-routing/blob/main/js/url-router.js)
- ### [OOP Best Practices](https://excalibur.apache.org/framework/best-practices.html)