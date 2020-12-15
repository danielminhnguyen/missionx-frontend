# Sample React project structure

There is no particular official project structure for React. I've followed some of the commonly used structure for code organization in react projects in this sample code. 

Again, there is no ideal structure for all projects, but you could start with this and reorganize to suit your project.

## Structure used
We have the following structure currently.

```
|--src
|  |-components
|  |-config 
|  |-constants
|  |-pages
|  |-assets
|  |  |-images
|  |  |-fonts
|  |-utils
```

## Absolute Imports

By configuring a `jsconfig.json` file with a base URL, we could simplify the import paths used, ie be able to use

`import Button from 'components/Button';` 

instead of 

`import Button from '../../components/Button';`

Follow the instructions at https://create-react-app.dev/docs/importing-a-component/#absolute-imports to set it up.

## Heroku Deployment steps

1. Create an account with https://www.heroku.com/
2. Download and install the Heroku CLI https://devcenter.heroku.com/articles/heroku-cli#download-and-install
   
        npm install -g heroku
        heroku --version

3. Run `heroku login` to authenticate the CLI tool
4. Go to the React project folder and type `heroku create missionx-demo-app-name --buildpack mars/create-react-app`
5. Check to see if the Heroku remote is added `git remote -v`. If not, run `heroku git:remote -a missionx-demo-app-name` to add a remote for heroku.
6. Add node version to the react `package.json`.
        
        "engines": {
          "node": "12.x"
        }
        
7. Commit the changes and run `git push heroku` to deploy changes to Heroku whenever required.
8. Run `heroku logs --tail` to debug any issues.

### References
Heroku Deployment - https://devcenter.heroku.com/categories/deployment

These articles provided some of the ideas used in this repo.
* https://latteandcode.medium.com/reactjs-the-folder-structure-i-feel-most-comfortable-with-694edaed0065
* https://www.robinwieruch.de/react-folder-structure
* https://survivejs.com/react/advanced-techniques/structuring-react-projects/