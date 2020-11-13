// naive implementation
export function fibonacciSumEven(maximumValue){
  // start with 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

  // init vars
  let sum = 0;
  let previous = 1;
  let current = 2;
  let temp = 0;

  while (previous <= maximumValue) {
    temp = previous;
    previous = current;
    current += temp;

    // only want even valued entries
    if (temp % 2 == 0)
      sum += temp;
  }
  return sum;
} 

/*
Some extra mathematical fun (something I had not noticed before)

F(n) is the nth Fibonacci number, so therefore F(n) = F(n-1) + F(n-2)
If F(n) is even, then:
  F(n) = F(n-1) + F(n-2)
       = F(n-2) + F(n-3) + F(n-2)
       = 2(F(n-2)) + F(n-3)

  If we expand some more:

  F(n) = 2(F(n-3) + F(n-4)) + F(n-3)
       = 3(F(n-3)) + 2(F(n-4))
       = 3(F(n-3)) + 2(F(n-5) + F(n-6))

  Substitution/more expansion and changing equations:

  F(n-3) = F(n-4) + F(n-5)
         = F(n-5) + F(n-6) + F(n-5)
        = 2(F(n-5)) + F(n-6)

  2(F(n-5)) = F(n-3) - F(n-6)

  Finally, we can sub these into our original F(n) equation:

  F(n) = 3(F(n-3)) + 2(F(n-5) + F(n-6))
       = 3(F(n-3)) + (F(n-3) - F(n-6)) + 2(F(n-6))
       = 4(F(n-3)) + F(n-6)

  Voila!
*/

// less iterations version
export function fibonacciSortaSnazzy(maximumValue){
  let fib3 = 2;
  let fib6 = 0;
  let result = 2;
  let summed = 0;

  while (result <= maximumValue) {
    summed += result;

    result = 4 * fib3 + fib6;
    fib6 = fib3;
    fib3 = result;
  }

  return summed;
}