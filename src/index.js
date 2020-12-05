import 'dotenv/config';
import findDepth from "./learning_array";

console.log(`Welcome to ${process.env.TEST_ENV_VARIABLE}`);

const arr = [1,2, [3], [4, [5, [6, [7, [8,9]]]]], 10];
const depth = findDepth(arr);
console.log(`Depth of the array is ${depth}.`);
