# 🐅 Tiger King Todo
Just an Experiment in Server-Sider Rendering. Made for the person that has too many tigers to take care of.

Hey DigitalCrafts ;) 

Live Demo Here: TBD

## Development

### Prequisites

You're going to need to install these dependencies on you you machine. Please follow the instructions in each of the links below:
- Docker Desktop Edition
    - Windows
    - Mac
- Node.js 12
    - Bonus: You can (and should) probably install this with a version manager tool
        - NVM for Windows
        - NVM (Mac)

### Steps to Run the Application

Some other steps I need to explain in more detail to get up and started:
1. Creating the OAuth Client in Github
1. Starting the database with docker
1. Creating the initial database (tiger-todo)

The first time you run the application, you will need to securely pass in the database credentials by creating an environment variable file. Create a file `.env` in the project root and add the following information:

```bash
POSTGRES_PASSWORD="<Choose a Password for the database>"
POSTGRES_USER="<Choose a Username for the database>"
POSTGRES_HOSTNAME=localhost

PGADMIN_EMAIL="<Pick an email to use to login to pgadmin>"
PGADMIN_PASSWORD="<Pick a Password for pgadmin>"

GITHUB_CLIENT_ID="<Client ID From Github OAuth App Setup>"
GITHUB_CLIENT_SECRET="<Pick an email to use to login to pgadmin>"

URL=http://localhost:3000
```

From the command line:
1. `npm install`
1. `$ npm start`

## Assumptions
- I probably wouldn't have students install and work with docker if I felt there environment would be relatively consistent, but it's easier for me to do quick development and cleanup my workstation.
- TODO Limitations (intentional):
    - You cannot make collections of notes/ no title field
    - No reordering
    - Not bulks operations (delete multiple/delete all)
    - ^^^ These would all be good exercise for a student to complete.
- Cleanup Inline Styles and Reorganize the Templates
- Error handling and testing can ALWAYS be better.


## TODOS:
- [X] Authentication
- [ ] Live Demo
- [ ] Styling Improvements
- [ ] Instructions
- [ ] Tests
- [ ] Presistent User Storage
- [ ] Sequelize Migrations
- [ ] Better Error Checking in the Services and Router

# Reference
* Github2 Passport Middleware: http://www.passportjs.org/packages/passport-github2/
* Other reference are inlined in the code
