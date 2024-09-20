# Movies DB

React.js application with a paginated list of movies. It contains page with detailed information about the selected movie (description, poster etc). Users can search movies by name.
Movies DB API <https://developer.themoviedb.org/docs/getting-started>

<img src="assets/check.jpg" width="10px" alt="done" /> Use Movies DB API.

<img src="assets/check.jpg" width="10px" alt="done" /> Create a paginated list with 10 items on the page.

<img src="assets/check.jpg" width="10px" alt="done" /> Style the list with the SASS approach.

<img src="assets/check.jpg" width="10px" alt="done" /> Use Typescript.

<img src="assets/check.jpg" width="10px" alt="done" /> Use Redux to store state.

<img src="assets/check.jpg" width="10px" alt="done" /> README with explanation how to run.

<img src="assets/check.jpg" width="10px" alt="done" /> Scalable view to fit mobile and desktop.

<img src="assets/check.jpg" width="10px" alt="done" /> [Live Application DEMO](https://oleggnet.dev/cv/moviesdb/)

## Bitbucket

[Original Repository](https://bitbucket.org/olegg-examples/moviesdb/src/main/)

## Usage

### API Key

If the default API key has expired, you can pass a new one using the query string `apiKey=KEY-STRING`

### Settings

**view** - list or tile

**sort per page** - sort records per page by rank, title, release date

**movie count** - you can set movie count per page: 4, 5, 10, 20

### Direct link

Application read query sting and use this parameters by default

## Installation

1. Requirements.

    * [`node 21` or greater must be installed](https://nodejs.org/en/download)

    * [`git 2` or newer must be installed](https://git-scm.com/downloads)

1. Install packages and setup.

    ```sh
    npm i
    ```

1. VS Code recommended settings, add to `.vscode/settings.json`

    ```json
    {
        "typescript.tsdk": "./node_modules/typescript/lib",
        "editor.codeActionsOnSave": {
            "source.fixAll": "explicit"
        },
        "eslint.validate": [
            "typescript"
        ]
    }
    ```

## Development

Start development run following command and check browser <http://localhost:8888/>

```sh
npm run start
```

Build develoment bundles

```sh
npm run build:dev
```

Fix all (autofixamble) linter issues if do not fixed automatically

```sh
npm run lint
```

Fix linter issues in modified files only

```sh
npm run lint:diff
```

## Production build

```sh
npm run build:prod
```

Check bundle analyzer report

```sh
npm run bundle-report
```

## Project description

### Folder structure

**public** ⸺ public access files with additional web information;

**assets** ⸺ any application assets, have access from root path '/';

**scripts** ⸺ webpack configs and js-scripts, create version file;

**src** ⸺ application structure;

**templates** ⸺ HTML templates with simple loading screen;

**typings** ⸺ application type declarations;

### Application structure

**loader** ⸺ load dependencies/settings before application render showing "loading screen", also separate entry point for particular movie page;

**layout** ⸺ particular layout for desktop/phone/tablet/moviPage and run application;

**deviceType** ⸺ device type detection and constants;

**entity** ⸺ tyni react components with properties passing inside, can't include other components;

**component** ⸺ react components with selectors/dispatch, can contain other components;

**factory** ⸺ component creation with same behaviour but with differenct data;

**store** ⸺ application redux store;

**store/selectors** ⸺ property selcector from particular state only;

**store/featureSelectors** ⸺ combine any selectors to achive feature goal;

**store/errorHandler** ⸺ server communication error entry point;

**store/responseHandler** ⸺ server response entry point;

**utils** ⸺ utilities;

**console** ⸺ default console wrappered functions avoid using in production mode;

**error** ⸺ application error classes;

**transport** ⸺ implemented like independent component for direct communication with server (for example it can be replaced to websocket with minimal changes)

*Application entry point:* index.js -> loader -> layout -> particular layout desktop/mobile/tablet

*Movie page entry point:* index.js -> loader -> layout -> pageMovie(desktop/mobile);
