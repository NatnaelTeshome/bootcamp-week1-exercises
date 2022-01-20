const assert = require('assert')


/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double bang (!!),
 *    or the untruthiness using a single bang (!)
 */
function isObject(obj){
  if(typeof obj === 'object' && obj !== null && !Array.isArray(obj)){
      return true;
  }
  return false;
}

const hasFalsyValue = obj => {
  for (let property in obj){
    if (isObject(obj[property])){
      return hasFalsyValue(obj[property])
    }
    else if (obj[property]){
      continue;
    }
    else if (!obj[property]){
      return true;
    }
  }
  return false;
};

const falsyObj = {
  hi: "I am falsy somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const truthyObj = {
  truthy: true,
  stillTruthy: -1,
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: ";)"
  }
};


assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
