//Qs. For a given array of numbers, print the square of each value using the forEach loop.

let nums = [34, 56, 67];

let calcSquare = (num) => {
    console.log(num * num);
};

nums.forEach(calcSquare);