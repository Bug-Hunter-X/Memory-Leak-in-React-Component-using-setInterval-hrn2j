# React SetInterval Memory Leak

This repository demonstrates a common error in React applications: using `setInterval` within a `useEffect` hook without proper cleanup. This leads to memory leaks and unexpected behavior.

The `bug.js` file contains the faulty component. The `bugSolution.js` file shows the corrected implementation.

## How to Reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. Observe the counter in the browser. Unmount the component (e.g. by navigating away), and notice that the counter continues to increment even though the component is no longer displayed. This demonstrates the memory leak.

## Solution

The solution involves returning a cleanup function from the `useEffect` hook that uses `clearInterval` to stop the interval when the component unmounts.