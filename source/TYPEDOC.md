<!-- ctrl + shift + v to preview -->
# Table of Contents
1. [Getting Started](#getting-started)
    1. [Introduction](#introduction)
    2. [Quick Start](#quick-start)
2. [Essentials](#essentials)
    1. [Creating an Application](#creating-an-application)
    2. [Template Syntax](#template-syntax)
    3. [Event Handling](#event-handling)
    4. [Components Basics](#components-basics)
    5. [m_if, m_if_else, m_for](#m_if-m_if_else-m_for)
3. [Router](#router)
    1. [Creating a Router](#creating-a-router)
    2. [Router Push](#router-push)
    3. [404 Page](#404-page)
4. [State Managements](#state-management)
    1. [Creating a Global Store](#creating-a-global-store)
    2. [Changing a State](#changing-a-state)
    3. [Conditional rendering based on State](#conditional-rendering-based-on-state)
5. [Hosting Mist App](#hosting-mist-app)
    1. [Vite](#vite)
    2. [Express](#express)

# Getting Started


   - ## Introduction

      - ### What is Mist?

        #### Mist (pronounced /mɪst/) is a JavaScript framework for building  user interfaces. It provides a declarative and component-based programming model that helps you efficently develop simple user interfaces. 
        <br />

        #### Here is a minimal example:

        <br />

        ```js
        //main.js
        import { createApp, createStore } from "../mist/index";
        import router from "./router/index.js";

        createStore({
            count: 0,
        });

        createApp("#app", router);
        ```

        <br />

        ```html
        <!-- index.html -->
        <body>
            <div id="app"></div>
            <script type="module" src="./src/main.js"></script>
        </body>
        ```

        <br />

        ```jsx
        // ./views/home.jsx
        /** @jsx jsxTransform */
        import { jsxTransform } from "../../mist/index";

        const Home = (state) => {
            return (
                <div>
                    <button  onClick={() => increment(state)}>
                        Count is {state.count}
                    </button>
                </div>
            )
        }

        export default Home

        const increment = (state) => {
            state.count++
        }
        ```
        <br />

        #### The above example demonstrates the two core features of Mist:

          - **Declarative Rendering**: Mist extends HTML template syntax using JSX that allows us to declaratively describe HTML output based on JavaScript state.
           
          - **Reactivity**: Mist automatically trakcs JavaScript state changes and efficiently updates the DOM when changes happen.

        <br />

        #### You may already have questions - don't worry. We will cover every little detail in the rest of the documentation.

 -  ## Quick Start
    - ### Creating a Mist Application
        #### In this section we will introduce how to scaffold a Mist Single Page Application on your local machine. The created project will be using a build setup based on [Vite](https://vitejs.dev/).

        Clone the cli-tool branch:
        ```bash
        git clone -b cli-tool https://01.kood.tech/git/nimi25820/mini-framework.git
        ```
        Run the following command in the command line:
        ```bash
        npm run cli [PROJECT-NAME]
        ```
        Once the project is created, follow the instructions to install dependencies and start the dev server:
        ```bash
        cd <project-name>

        npm install

        npm run dev
        ```

        <br />

        You should now have your first Mist project running.
# Essentials

 - ## Creating an Application

    - ### The application instance
        #### Every Mist application starts by creating a new application instance with the createApp function:

        <br />

        ```js
        import { createApp} from "../mist/index";
        import router from "./router/index.js";

        createApp("#app", router);
        ```
        <br />
        
        #### Every application takes in a mount point and a router with atleast one defined route. We will talk about router in [Router](#router) paragraph.


 - ## Template Syntax
    
    - ### Basic syntax
        #### Every template must be declared in a JSX file because Mist utilizes JSX to then transform the JSX element into Virtual DOM that gets applied to real DOM:

        <br />

        ```jsx
        // ./views/home.jsx

        /** @jsx jsxTransform */
        import { jsxTransform } from "../../../mist/index";

        const Home = (state) => {
            return (
                <div>
                    This is home
                </div>
            )
        }

        export default Home
        ```

        <br />

        ```jsx
        /** @jsx jsxTransform */
        import { jsxTransform } from "../../../mist/index";
        ```
        The above tells JSX to transform the template using Mists built in transformer.
        ```jsx
        export default Home
        ```
        Every template takes in a state argument, more about that in [State Management](#state-management) and has to be exported to be used as a view or as a component.

    - ### Binding
        #### Thanks to JSX, you can bind a function to any HTML attribute:

        <br />

        ```jsx
        // ./views/home.jsx
        const Home = (state) => {
            return (
                <div class={getHomeClass()} id={getHomeId()}>
                    This is home
                </div>
            )
        }

        export default Home

        const getHomeClass = () => {
            return "home-class"
        }

        const getHomeId = () => {
            return "home-id"
        }
        ```
 - ## Event Handling

    - ### Basic syntax
        #### Mist utilizes JSX to bind events on to HTML elements. Under the hood, Mist parses those event names and adds native JS eventHandler with the function as the parameter.

        <br />

        ```jsx
        // ./views/home.jsx
        const Home = (state) => {
            return (
                <div>
                    <button  onClick={() => increment(state)}>
                        Count is {state.count}
                    </button>
                </div>
            )
        }

        export default Home

        const increment = (state) => {
            state.count++
        }
        ```

        <br />

        ```jsx
        // ./views/home.jsx
        const Home = (state) => {
            return (
                <div>
                    <input class="alert-input" placeholder="Alert this field"  onKeyDown={(e) => alertInputValue(e)}>
                        Count is {state.count}
                    </input>
                </div>
            )
        }

        export default Home

        const alertInputField = (event) => {
	        if (event.key !== "Enter") return;

            let input = document.querySelector(".alert-input")

            alert(input.value)

            input.value = ""
        }
        ```


 - ## Components Basics

    - ### Defining a Component
        #### In Mist, everything can be used as a component. You can create seperate files for each importable component or define multiple components in the same file to be used in there.
        
        <br />

        #### Seperate importable components:

        <br />

        ```jsx
        // ./components/footer.jsx

        /** @jsx jsxTransform */
        import { jsxTransform } from "../../../mist/index";

        const Footer = (state) => {
            return (
                <div>
                    This is Footer component
                </div>
            )
        }

        export default Footer
        ```

        <br />

         ```jsx
        // ./views/home.jsx

        /** @jsx jsxTransform */
        import { jsxTransform } from "../../../mist/index";
        import Footer from "../components/footer"

        const Home = (state) => {
            return (
                <div>
                    This is Home component
                    {Footer()}
                </div>
            )
        }

        export default Home
        ```

        <br />

        #### In file components:

        <br />

         ```jsx
        // ./views/home.jsx

        /** @jsx jsxTransform */
        import { jsxTransform } from "../../../mist/index";

        const Home = (state) => {
            return (
                <div>
                    This is Home component
                    {Footer()}
                </div>
            )
        }

        export default Home

        const Footer = (state) => {
            return (
                <div>
                    This is Footer component
                </div>
            )
        }
        ```
 - ## m_if, m_if_else, m_for

   - ### m_if
       #### m_if is Mists built in way to do conditional rendering based on a boolean:

        <br />

        ```jsx
        // ./views/home.jsx

        /** @jsx jsxTransform */
        import { jsxTransform, m_if } from "../../../mist/index";

        const Home = (state) => {
            return (
                <div>
                    This is home

                    {m_if(4 > 3, (<div> It is true that 4 is bigger than 3</div>))}

                </div>
            )
        }

        export default Home
        ```
   - ### m_if_else
        #### m_if_else is the same as [m_if](#m_if) but with added else fallback element:

        <br />

        ```jsx
        // ./views/home.jsx

        /** @jsx jsxTransform */
        import { jsxTransform, m_if_else } from "../../../mist/index";

        let count = 9

        const Home = (state) => {
            return (
                <div>
                    This is home

                    {m_if_else(count % 2 === 0, (<span>Count is even</span>), (<span>Count is odd</span>))}

                </div>
            )
        }

        export default Home
        ```
   - ### m_for
        #### m_for is Mists built in way to iterate over data list and create elements using a single data from the list in each element:

        <br />

        ```jsx
        // ./views/home.jsx

        /** @jsx jsxTransform */
        import { jsxTransform, m_for } from "../../../mist/index";

        const numbers = [1, 2, 3, 4, 5];

        const Home = (state) => {
            return (
                <div>
                    This is home

                    { m_for(numbers, (num) => { return (<div>{num}</div>) }) }

                </div>
            )
        }

        export default Home
        ```
# Router

 - ## Creating a Router
    #### Mist is well-suited for building SPAs. Mists router utilizes browsers [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) to keep track of the URL and render templates defined on each route. Every Mist application requires a router with atleast one route defined. To create a router:

    <br />

    ```js
    // ./router/index.js
    import { createRouter } from "../../../mist/index";
    import Home from "../views/home";
    import Profile from "../views/profile";

    const router = createRouter([
        {
            path: "/",
            name: "home",
            title: "Home",
            view: Home
        },
        {
            path: "/profile",
            name: "profile",
            view: Profile
        },
    ]);

    export default router;
    ```

    <br />

    #### Each route consists of:
      1. path - The path at which the template will be rendered on
      2. name - The name the route has which can be used in [router push](#router-push)
      3. title - The optional title which will change the web pages title when on the route
      4. view - The template you wish to render on that specific route 
 - ## Router Push
    #### Mists router has a built in method router.push to push another state into the History API which then triggers the template to be rerendered with the corresponding template on that new route.

    <br />

     ```jsx
    // ./views/home.jsx

    /** @jsx jsxTransform */
    import { jsxTransform, router} from "../../../mist/index";

    const Home = (state) => {
        return (
            <div>
                This is Home component
                <button onClick={() => router.push({ type: "path", value: "/profile" })}>To Profile</button>
            </div>
        )
    }

    export default Home
    ```

     <br />

     ```jsx
    // ./views/profile.jsx

    /** @jsx jsxTransform */
    import { jsxTransform, router} from "../../mist/index";

    const Profile = (state) => {
        return (
            <div>
                This is Profile component
                 <button onClick={() => router.push({ type: "name", value: "home" })}>Take me back home</button>
            </div>
        )
    }

    export default Profile
    ```
 - ## 404 Page
    #### Mists router also allows you to define a 404 route which will be rendered when the user goes to a route that doesn't exist within your application. This allows you to costumize your 404 page easily.

    <br />

    ```js
    // ./router/index.js
    import { createRouter } from "../../mist/index";
    import Home from "../views/home";
    import _404 from "../views/404";

    const router = createRouter([
        {
            path: "/",
            name: "home",
            title: "Home",
            view: Home
        },
        {
            path: "/PageNotFound",
            name: "404",
            view: _404
        },
    ]);

    export default router;
    ```
# State Management

 - ## Creating a Global Store
    #### Mist can keep track of all your global states by first creating a global store where to then define your states:

    <br />

    ```js
    //main.js
    import { createApp, createStore } from "../mist/index";
    import router from "./router/index.js";

    createStore({
        count: 0
    });

    createApp("#app", router);
    ```

 - ## Changing a State
    #### To change a state, you simply have to pass the state argument into a function that then changes the selected and available state.

    <br />

    ```jsx
    // ./views/home.jsx
    /** @jsx jsxTransform */
    import { jsxTransform } from "../../mist/index";

    const Home = (state) => {
        return (
            <div>
                <button  onClick={() => increment(state)}>
                    Count is {state.count}
                </button>
            </div>
        )
    }

    export default Home

    const increment = (state) => {
        state.count++
    }
    ```
    <br />

 - ## Conditional rendering based on State
    #### We already talked about our built in m_if and m_if_else methods. Lets have a look how to use them with states:

    <br />

    ```jsx
    // ./views/home.jsx

    /** @jsx jsxTransform */
    import { jsxTransform, m_if } from "../../../mist/index";

    const Home = (state) => {
        return (
            <div>
                This is home

                {m_if(state.count > 3, (<div> It is true that {state.count} is bigger than 3</div>))}

            </div>
        )
    }

    export default Home
    ```

     <br />

    ```jsx
    // ./views/home.jsx

    /** @jsx jsxTransform */
    import { jsxTransform, m_if_else } from "../../../mist/index";

    const Home = (state) => {
        return (
            <div>
                This is Home component

                {m_if_else(state.count % 2 === 0, (<span>Count is even</span>), (<span>Count is odd</span>))}

            </div>
        )
    }

    export default Home
    ```
# Hosting Mist App

 - ## Vite
    #### We already talked about how to scaffold our project using Vite. Well you can keep on using Vite to host yourself a hot reloaded dev server.

 - ## Express
    #### If you need an actual server to host then Vites dev server might not be enough. That why we recommend using Express. Hosting a Mist app is not done the usual way. Thats due to Mists router being a SPA router. We need to tell the web server to always point back to index.html otherwise the browser will hit a 404 page. To host your files on the server, you have to compile them using Vite `npm run build`. That will create a `dist` dir.

    <br />

    ```js
    // ./server.js
    const express = require('express');
   
    const app = express();

    //Serves the /dist folder to the server
    app.use(express.static(__dirname + "/dist"));
    app.get('/', (req, res) => {
    res.sendFile('src/index.html');
    });

    //Express server 
    app.listen(8090, () => console.log('server started'));
    ```
