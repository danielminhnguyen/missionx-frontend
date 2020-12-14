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

### References
These articles provided some of the ideas used in this repo.
* https://latteandcode.medium.com/reactjs-the-folder-structure-i-feel-most-comfortable-with-694edaed0065
* https://www.robinwieruch.de/react-folder-structure
* https://survivejs.com/react/advanced-techniques/structuring-react-projects/