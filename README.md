# Movies DB

React.js application with a paginated list of movies. It contains page with detailed information about the selected movie (descriptoin, poster etc). Users can search movies by name.
Movies DB API <https://developer.themoviedb.org/docs/getting-started>

[Live DEMO](https://oleggnet.dev/cv/moviesdb/)

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
npm run dist:prod
```

Check bundle analyzer report

```sh
npm run bundle-report
```

## Project description

### Folder structure

**public** ⸺ public access files with additional web information;

**scripts** ⸺ webpack configs and js-scripts;

**src** ⸺ application structure;

**templates** ⸺ HTML templates with simple loading screen;

**typings** ⸺ application type declarations;

### Application structure

**loader** ⸺ load dependencies/settings before application render showing "loading screen";

**layout** ⸺ particular layout for desktop/phone/tablet and run application;

**deviceType** ⸺ device type detection and constants;

**entity** ⸺ tyni react components with properties passing inside, can't include other components;

**component** ⸺ react components with selectors/dispatch, can contain other components;

**store** ⸺ application redux store;

**utils** ⸺ utilities;

**console** ⸺ default console wrappered functions;

**error** ⸺ application error classes;

*Application entry point:* index.js -> loader -> layout -> particular layout desktop/mobile/tablet
