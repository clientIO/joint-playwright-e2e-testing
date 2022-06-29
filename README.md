# E2E Testing: JointJS & Playwright

This git repository is intended for instructional purposes. It is the source code that accompanies a JointJS blog post "E2E Testing: JointJS & Playwright" which can be found [here](https://resources.jointjs.com/tutorial/testing-e2e-playwright).

### Dependencies

Make sure you have the following dependencies installed on your system:

- [Node.js (v12 or above)](https://nodejs.org/en/)
- git

#### Setup

Clone this repository.

```
git clone git@github.com:clientIO/{INSERT REPO NAME}.git
```

Change into the `{INSERT REPO NAME}` directory.

```
cd {INSERT REPO NAME}
```

Install Playwright dependencies, and supported browsers. This tutorial and project uses ` "@playwright/test": "^1.22.1"`.

```
npm install
# install supported browsers
npx playwright install
```

Change into app directory. Install app dependencies, and serve the JointJS app.

```
cd app
npm install
npm run dev
```

You should be able to view the demo at `http://localhost:3000/`.

You are now ready to run tests from the project root. Change directory to root if currently in app directory, and run the tests.

```
cd ..
npm run test
```

NOTE: Visual Regression tests should fail on the first test run as explained in the accompanying tutorial. This is because no "golden snapshots" of the application exist yet.
