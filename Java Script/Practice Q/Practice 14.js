//Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [97, 54, 87, 67, 45, 23, 98];

let toppers = marks.filter((val) => {
    return val > 90;
})

console.log(toppers);