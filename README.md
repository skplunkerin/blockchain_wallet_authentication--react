# Blockchain Wallet Authentication

> _This project was:_
>
> - _Bootstrapped using [Create React App](https://github.com/facebook/create-react-app);_
>
> - _Created by following a Moralis Web3 tutorial [found here](https://youtu.be/UP6MfkU3Bkg)._

## Table of Contents

<!-- To use: `npm install -g doctoc && doctoc README.md` -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Vulnerabilities:](#vulnerabilities)
- [Setup project:](#setup-project)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [Learn More](#learn-more)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Vulnerabilities:

Use `npm audit --production` instead of `npm audit`, see why below:

Using **Create React App** creates a project that has severe vulnerabilities due
to the `react-scripts` package; Running `npm audit fix --force` doesn't fix the
problem _(it downgrades the `react-scripts` package (for some reason), and_
_creates even more vulnerabilities)_.

The only fix for this is to move the `react-scripts` package to the
`devDependencies`, and auditing via `npm audit --production`. See [this SO](https://stackoverflow.com/q/67693423/1180523)
and [this Github issue](https://github.com/facebook/create-react-app/issues/11012);
and [this SO](https://stackoverflow.com/a/69576030/1180523) and
[this Github issue](https://github.com/facebook/create-react-app/issues/11174)
for more info on this problem.

## Setup project:

1. Clone, then start the project:

   ```sh
   npm i
   npm start
   ```

2. Test your project:

   - Go to `http://localhost:3000`
   - TODO

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

- Open [http://localhost:3000](http://localhost:3000) to view it in your
  browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

> _Created/Documented from Create React App_

Launches the test runner in the interactive watch mode.

- See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
  for more information.

### `npm run build`

> _Created/Documented from Create React App_

Builds the app for production to the `build` folder.

- It correctly bundles React in production mode and optimizes the build for the
  best performance.

  The build is minified and the filenames include the hashes.\
  **Your app is ready to be deployed!**

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment)
for more information.

### `npm run eject`

> _Created/Documented from Create React App_

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn't feel obligated to use this
feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

> _Created/Documented from Create React App_

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- React Documentation:

  To learn React, check out the [React documentation](https://reactjs.org/).

  - Code Splitting:

    Please see: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  - Analyzing the Bundle Size:

    Please see: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  - Making a Progressive Web App:

    Please see: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  - Advanced Configuration:

    Please see: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  - Deployment:

    Please see: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  - `npm run build` fails to minify:

    Please see: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
