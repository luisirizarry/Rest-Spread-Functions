// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => {
    return nums.filter(num => num % 2 ===0);
}

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...nums) => {
    return nums.reduce((min, currval) => {
        return Math.min(min, currval);
    })
}

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
} 

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...nums) => {
    const doubledNums = nums.map(num => num * 2);
    
    arr.push(...doubledNums);
    
    return arr;
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]:val});

/** Return a new object with a key removed. */

const removeKey = (obj, key) => 
    Object.keys(obj).reduce((newObj, k) => {
        if (k !== key) {
            newObj[k] = obj[k];
        }
        return newObj;
    }, {});

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key]:val});