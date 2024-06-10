davaleba 5:
// 1

let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray = array2.map(element => {
    if (typeof element === 'number') {
        return element * element; 
    } else if (typeof element === 'string') {
        return element.toUpperCase(); 
    } else {
        return element; 
    }
});

console.log(newArray);

// 2
let answer = "თბილისი";
let userAnswer = prompt("რა არის საქართველოს დედაქალაქი?");
userAnswer = userAnswer.toLowerCase();
if (userAnswer === answer) {
    console.log("სწორია");
} else {
    console.log("არასწორია");
}

//3
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray5 = array5.map(item => item / 3);
console.log(newArray5);

//4
let array1 = ["hello1", 14, 24, "hello2"];
let newArray1 = array1.filter(item => typeof item === 'number');
console.log(newArray1);

//5
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newLangauges = languages.filter(word => word.length > 3);
console.log(newLangauges);

// 6
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let newWords = words.filter(word => word.toLowerCase().includes('m'));
console.log(newWords);

// 7
function checkLink(link) {
    if (link.includes("https://")) {
        return "კი მოიცავს";
    } else {
        return "არა - არ შედგება";
    }
}

// 8
let array6 = [-1, -2, -3, 4];
function checkArray(array) {
    return array.some(number => number > 0);
}

//9
let str = '12345';
let arrayX = str.split('');
let numbers = arrayX.map(Number);
let sumX = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumX); 

//10
let anyNumbers = [5, 10, 15, 20];
let anySum = numbers.reduce((acc, curr) => acc + curr, 0);

//11
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let newArr = arr1.concat(arr2, arr3);
console.log(newArr);
