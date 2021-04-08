## React Typescript Boilerplate

#### Bootstrapped by [CRA](https://github.com/facebook/create-react-app)

### Project Setup

1. Run **`yarn install`** ([yarn](https://classic.yarnpkg.com/en/docs/install) is required on your local machine)

1. Create a **`.env`** file in the project’s root and copy the variables from **`.env-example`**

1. Run **`yarn start`** (This will start your project in dev environment)

---

### Folder Structure

The project contains the following tree structure:

- **`app`**
  > Contains the core Providers and Routes that are used in the top level App.tsx

- **`assets`**
    > Contains the project’s assets that are used throughout the application
  
- **`components`**
    > Contains all reusable components

- **`global`**
    > Contains all global variables that are used throughout the application

- **`pages`**
    > Contains all components that represent a React Route

- **`services`**
    > Contains the state for global backend-side data management
  
- **`store`**
    > Contains the state for global client-side data management

- **`theming`**
    > Contains the global themes and design system

- **`utils`**
    > Contains utility functions that are used throughout the application

---

### Conventions

- This project follows a functional paradigm and is built only with functional components using React hooks

- Each component is put into a folder named the same as we would like to call the component (ex: `Button`)

- The component is written in an **`index.tsx`** file

- If there are additional files that are needed for the component (e.g. test, animations etc.) they are put inside the component’s folder.

    **Example:**
    ```
    /Button
        /tests
            index.test.tsx
            test-data.ts
            __snapshots__
        index.tsx
    ```

- If a particular component is only used and only makes sense inside another component (For example we want to divide a component into multiple subcomponents for readability) then we create another **`components`** folder inside the parent and create the subcomponent there.

    **Example:**
    ```
    /Header
        /components
            /HeaderPromo
                index.tsx
        index.tsx
    ```
  
- The maximum number of subcomponent nesting should be 2 levels. After 2 levels, put the subcomponents as siblings to the component where they are used.

- Multiple components that have something in common can be grouped into a folder that is named after the thing that they have in common and is written in lowercase.

    **Example:**
    ```
    /src
        /components
            /Header
            /form-elements
                /Input
                /Select
                /Checkbox
            /MultiStep
    ```
    
- When grouping create an **index.tsx** to export all components from inside the folder

    **Example:**
    ```
    /src
        /components
            /form-elements
                /Input
                /Select
                /Checkbox
                index.tsx
    ```

- Use named exports instead of default exports

- Absolute paths are used when importing something that is outside of the folder in which we are using the import

- Relative paths are used when importing something that is within the same folder or is a subcomponent

- When importing external libraries or internal icons use named imports (e.g. `import * as _ from 'lodash-es'` instead of `import { map } from 'lodash-es'`)

---

### Linting

#### Eslint

This project uses Airbnb's eslint config and typescript-eslint.

Install and configure an ESLint plugin for your IDE to be able to see all eslint errors.

All customized rules are inside **`.eslintrc`**.

All files that should be ignored by eslint are specified inside **`.eslintignore`**.

---

Code with linting errors should not be pushed to repositories. For that reason a pre-hook is attached that checks for any linting errors when committing.

If you find a certain rule to be invaluable, talk with the team to potentially get it removed.

---

### Testing

For unit tests we use [@testing-library/react](https://github.com/testing-library/react-testing-library).

Import `utils/testing` into your unit tests in order to utilize the testing API

To run the unit tests, run `yarn test`

---

### Dependencies

- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** (page routing)

- **[react-query](https://react-query.tanstack.com/)** (managing server side data)

- **[axios](https://www.npmjs.com/package/axios)** (http requests)

- **[theme-ui](https://theme-ui.com/home)** (styling and theming)

- **[lodash-es](https://lodash.com/docs/4.17.15)** (utility functions)

---

#### Need a library that is not included in this boilerplate?

Please refer to the [recommended libraries page](http://404.com) if you find yourself in need of a library for something specific that wasn't included in this boilerplate
