let studentOne = [2,2,2,2];
let studentTwo = [1,2,3,4,5];
let studentThree = [1,1,1,1,1,1,1,2];


function getAverage(marks){
    let acc = 0;
    marks.forEach(el => acc += el);
    return Math.floor(acc / marks.length);
}
