# Minimal Node.js App Template with Babel and Jest

## The following steps are for creating minimal Node.js app with Babel and Jest.

- `mkdir minimal-app`
- `cd minimal-app`
- `npm init -y`
- `npm install nodemon --save-dev`
- `npm install @babel/core @babel/node --save-dev`
- `npm install @babel/preset-env --save-dev`
- `npm install dotenv --save`
- `npm install --save-dev jest`
- `mkdir src`
- `cd src`
- create `index.js` file at `src` folder. Below is sample code.
    ```javascript
    import 'dotenv/config';
    import findDepth from "./learning_array";

    console.log(`Welcome to ${process.env.TEST_ENV_VARIABLE}`);

    const arr = [1,2, [3], [4, [5, [6, [7, [8,9]]]]], 10];
    const depth = findDepth(arr);
    console.log(`Depth of the array is ${depth}.`);
    ```
- create `learning_array.js` file at `src` folder. Below is sample code.
    ```javascript
    function findDepth(arr) {
        return Array.isArray(arr) ?
            1 + Math.max(...arr.map(findDepth))
            : 0;
    }

    export default  findDepth;
    ```
- create `spec.js` file at `src` folder. Below is sample code.
    ```javascript
    import findDepth from "./learning_array";

    test("non array", () => {
        expect(findDepth(1)).toBe(0);
    });

    test("array with 1 depth", () => {
    expect(findDepth([1,2,3])).toBe(1);
    });

    test("array with 2 depth", () => {
        expect(findDepth([1,2,[3]])).toBe(2);
    });

    test("array with 3 depth", () => {
        expect(findDepth([1,2,[3, [4]]])).toBe(3);
    });
    ```
- create `.babelrc` file at root folder and add below.
    ```javascript
    {
        "presets": [
            "@babel/preset-env"
        ]
    }
    ```
- create `.env` file at root folder and add below.
    ```javascript
    TEST_ENV_VARIABLE=Minimal Node.JS App Template
    ```
- create `jest.config.json` file at root folder and add below.
    ```javascript
    {
        "testRegex": "((\\.|/*.)(spec))\\.js?$"
    }
    ```
- update `package.json` as below
    ```javascript
        "scripts": {
            "start": "nodemon --exec babel-node src/index.js",
            "test": "jest --config ./jest.config.json",
            "test:watch": "npm run test -- --watchAll"
        },
    ```
## Running the app and test
Run the following commands in seperate command prompt. Every time source fiels are modified, the app and test will be run again automatically.
- `npm start`
- `npm run test:watch`

![image](https://user-images.githubusercontent.com/156037/101244793-68788f00-3743-11eb-9f6d-d8eca1488d41.png)
