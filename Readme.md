# The app
The design of this To-Do List app is simple and contemporary, with a pastel color palette.  Tasks can be added, edited, and deleted using its user-friendly interface, which displays tasks in a list manner.  Completed activities are identified visibly, and forms and interactive buttons make navigating them simple.  There is a fixed bottom with more information about the app, and the layout is straightforward.

# Details 
The To-Do list app's Express.js server is configured via the `app.js` file, which also defines routes for task management and uses Pug as the templating engine.  The port 3000 is used by the server.

Task operations are handled by the `todoService.js`, which uses `fs-extra` to read from and write to a JSON file.  It preserves data integrity while allowing for the addition, editing, and deletion of jobs.

To display, add, modify, and delete tasks, the `routes/index.js` module translates HTTP requests to controller functions.

The main view is provided by `index.pug`, which also includes options to edit or remove tasks and a form for adding tasks.  Tasks are conditionally styled according on their status of completion.

The application's HTML structure, including a container and content placeholder, is defined by the `layout.pug` file.

A new task is created using `new.pug`, which displays any validation failures above the form.

Users can update already-existing tasks by using the `edit.pug`, which pre-fills the form with task information.

Task operations are handled by the `controllers/index.js` by invoking the appropriate todoService functions.

The `style.css` The application's contemporary, pastel appearance is defined via CSS, which also styles the body, container, tasks, forms, and buttons with interactive hover effects.  Additional details about the app are included in a footer that is set at the bottom.


# How to run description 
1. Clone the repository to your local machine.

2. Open a terminal and navigate to the project directory.

3. Run npm install to install all necessary dependencies.

4. After installation, run npm start to start the server.

5. Open a browser and go to http://localhost:3000 to view the app.

# Dependencies 
1. express: Web framework for Node.js to handle routing and server setup.

2. pug: Templating engine for rendering HTML views.

3. body-parser: Middleware to parse incoming request bodies.

4. fs-extra: File system utility to read and write JSON data asynchronously.

# Structure
WT_CW2_00018304/
│
├── app.js                     # Main server file
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Dependency tree lock
├── .gitignore                 # Node modules excluded from Git
│
├── controllers/
│   └── index.js               # Controller logic
│
├── data/
│   └── todos.json             # Stores todo items
│
├── node_modules/              # Node.js modules (excluded from Git)
│
├── public/
│   └── styles/
│       └── style.css          # CSS styling
│
├── routes/
│   └── index.js               # Application routing
│
├── services/
│   └── todoService.js         # Logic to interact with todo data
│
└── views/                     # View templates using Pug
    ├── layout.pug
    ├── index.pug
    ├── edit.pug
    └── new.pug


# Links 
Github link: https://github.com/00018304/WebTechnologyCW2.git
Hosting:https://webtechnologycw2-2.onrender.com  
(unfortunately, the app did not work in hosting but its finely working when running through the terminal)




