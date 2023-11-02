function curriedAdd() {
    // Initialize a variable 'sum' to keep track of the cumulative sum.
    let sum = 0;
  
    // Define a function 'add' which will be returned by 'curriedAdd'.
    const add = (num) => {
      
      // Check if 'num' is undefined, which indicates that we want to get the current sum.
      if (num === undefined) {
        return sum; // Return the current sum if no argument is provided.
      }
      
      // If 'num' is provided, add it to the 'sum' and return the 'add' function itself.
      sum += num;
      return add; // This allows us to chain more calls to 'add'.
    };
  
    // Return the 'add' function, which holds the 'sum' in a closure.
    return add;
  }

  module.exports = { curriedAdd }


  
  // Create three instances of the 'curriedAdd' function, each with its own 'sum' variable.
  let firstAdder = curriedAdd();
  let secondAdder = curriedAdd();
  let thirdAdder = curriedAdd();

  console.log(firstAdder()); // 0
console.log(secondAdder(1)(2)()); // 3
console.log(thirdAdder(2)(8)(5)(1)()); // 16

