const projectsList = [
    {
        id: '1',
        projectName: 'Emoji Game',
        projectDescription: 'Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all displayed emojis are clicked. All emojis positions will be randomized after each click * List of Emojis is displayed by using React components, props , lists, conditional rendering, styled using CSS and randomized emojis placed using event listeners by updating react state. * Updated different game states such as emojis list, winning state and losing state by using game state variable and conditional rendering.',
        technologies: ["React JS", "CSS"],
        imageUrl: "https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output-v2.png",
        gitHubLink: "https://github.com/ChandrakanthMullangi/Emoji-Game",
    },
    {
        id: '2',
        projectName: 'Cryptocurrency Tracker',
        projectDescription: 'Developed an cryptocurrency tracker application where user can see available crypto currencies and their market price * Implemented cryptocurrencies table using React components & bootstrap table classes and achieved responsiveness using bootstrap flex classes and CSS box model through mobile-first approach. * Fetched cryptocurrencies data from server asynchronously using fetch GET HTTP API call.',
        technologies: ["React JS", "REST API calls", "CSS"],
        imageUrl: "https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-lg-success-output.png",
        gitHubLink: "https://github.com/ChandrakanthMullangi/Crypto-Currency-Tracker",
    },
    {
        id: '3',
        projectName: 'Nxt Trendz',
        projectDescription: 'Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc.. * Implemented Different pages and routes for Login, Products, Product details using React Router components Route, Switch, Link, props, state, lists, event handlers, form inputs. * Authenticating and authorizing users by taking username, password and doing login POST HTTP API Call and implementing filters by sending them as query parameters to product api calls. * Persisted user login state by keeping jwt token in local storage, Sending it in headers of further api calls to authorize the user.',
        technologies: ["React JS", "JS", "CSS", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication"],
        imageUrl: "https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-output-v2.png",
        gitHubLink: "https://github.com/ChandrakanthMullangi/Nxt-Trendz-Cart-Features",
    },
    {
        id: '4',
        projectName: 'Github Popular Repos',
        projectDescription: 'Developed a web application where user can see popular github repos and can be filtered through a selected programming language * Implemented repos list using React component, props, lists & keys and achieved responsiveness using bootstrap flex classes and CSS box model through mobile-first approach. * Fetched repos particular to a language from server asynchronously using fetch GET HTTP API call by sending selected language in query parameter.',
        technologies: ["React JS", "REST API calls", "CSS"],
        imageUrl: "https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-success-output.png",
        gitHubLink: "https://github.com/ChandrakanthMullangi/Github-Popular-Repos",
    },
    {
        id: '5',
        projectName: 'Jobby App',
        projectDescription: 'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc * Implemented different pages like Login, Home, Jobs, Job item details using React components, props, state, lists, event handlers, form inputs. * Authenticating by taking username, password and doing login post HTTP API Call. * Persisted user login state by keeping jwt token in client storage, Sending it in headers of further API calls to authorize the user. * Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link. * Implemented filters and search text by sending them as query parameters to jobs API calls. * Redirecting to the login page if the user tries to open Home, Jobs, Job item details routes which need authentication by implementing protected Route.',
        technologies: ["React JS", "JS", "CSS", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication"],
        imageUrl: "https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-success-lg-output-v0.png",
        gitHubLink: "https://github.com/ChandrakanthMullangi/Jobby-App",
    },
    {
        id: '6',
        projectName: 'Tasty Kitchens',
        projectDescription: 'Implemented a responsive Online Food Ordering System like Swiggy/Zomato where users can see popular restaurants with sort by rating, specific restaurant details, adding or removing food items to cart, and payments section. * Implemented different routes for features like login, home, specific restaurant details, cart by using React Router components Route, Switch, Link. * Implemented horizontal scrolling (carousel images on the home page) using React Third Party library called React Slick. * Used Figma mockups to implement UI-rich and pixel-perfect React components. * Used fetch to call REST APIs for popular restaurants with sort by, specific restaurant details. * Implemented username and password authentication and persisted login state using client storage. * Implemented a protected route to ensure only authenticated users can access the pages like home, specific restaurant details, etc.',
        technologies: ["HTML", "CSS", "JS","React JS", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication"],
        imageUrl: "https://res.cloudinary.com/dcftzujt8/image/upload/v1686368302/Tasty-Kitchesn-Home_dvv4it.jpg",
        gitHubLink: "https://github.com/ChandrakanthMullangi/Tasty-Kitchens-App",
    },
]

export default projectsList