// *********** Example: Basic Promise with a Simple Task  ********************
const basicPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete: Simple promise resolved!");
    }, 3000); // 3-second delay
  });

console.log("Starting Task 1...");
basicPromise()
  .then((message) => console.log(message))
  .catch((error) => console.error(error)); // Just in case of unexpected errors

// ************ Example: Promise with Success or Failure *********************
const successOrFailPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomSuccess = Math.random() > 0.5; // 50% chance of success
    if (randomSuccess) {
      resolve('Task 2 complete: Success!');
    } else {
      reject('Task 2 failed: Something went wrong.');
    }
  }, 3000); // 3-second delay
});

console.log('Starting Task 2...');
successOrFailPromise()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));


// ************ Example: Chaining Promises ************************************
const chainedPromise = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task 3 part 1 complete.');
  }, 3000); // 3-second delay
});

const anotherPromise = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task 3 part 2 complete.');
  }, 3000); // 3-second delay
});

console.log('Starting Task 3...');
chainedPromise()
  .then((message) => {
    console.log(message); // Log the first message after 3 seconds
    return anotherPromise(); // Return the next promise
  })
  .then((message) => {
    console.log(message); // Log the second message after another 3 seconds
  })
  .catch((error) => console.error(error));

// ********** Example: Promise with Multiple Operations (Simulated Asynchronous Tasks) ************
const taskA = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task A complete.');
  }, 3000); // 3-second delay
});

const taskB = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task B complete.');
  }, 3000); // 3-second delay
});

const taskC = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomSuccess = Math.random() > 0.3; // 70% chance of success
    if (randomSuccess) {
      resolve('Task C complete.');
    } else {
      reject('Task C failed.');
    }
  }, 3000); // 3-second delay
});

console.log('Starting Task 4...');
Promise.all([taskA(), taskB(), taskC()])
  .then((messages) => {
    messages.forEach((message) => console.log(message)); // Log all success messages
  })
  .catch((error) => console.error(error)); // Log any error if one of the tasks fails

