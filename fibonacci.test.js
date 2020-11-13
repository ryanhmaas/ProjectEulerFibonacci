import { fibonacciSumEven, fibonacciSortaSnazzy } from './fibonacci';

// tests to validate implementation
test('fibonacciSumEven with an input of 10 should return 10 ', () => {
  expect(fibonacciSumEven(10)).toBe(10);
});


test('fibonacciSumEven with an input of 34 should return 44 ', () => {
  expect(fibonacciSumEven(34)).toBe(44);
});


test('fibonacciSumEven with an input of 100000 should return 60696 ', () => {
  expect(fibonacciSumEven(100000)).toBe(60696);
});


test('fibonacciSumEven with an input of 4000000 should return 4613732 ', () => {
  expect(fibonacciSumEven(4000000)).toBe(4613732);
});

// expect these tests to return same results
test('fibonacciSortaSnazzy with an input of 10 should return 10 ', () => {
  expect(fibonacciSortaSnazzy(10)).toBe(10);
});

test('fibonacciSortaSnazzy with an input of 34 should return 44 ', () => {
  expect(fibonacciSortaSnazzy(34)).toBe(44);
});

test('fibonacciSortaSnazzy with an input of 100000 should return 60696 ', () => {
  expect(fibonacciSortaSnazzy(100000)).toBe(60696);
});

test('fibonacciSortaSnazzy with an input of 4000000 should return 4613732 ', () => {
  expect(fibonacciSortaSnazzy(4000000)).toBe(4613732);
});
