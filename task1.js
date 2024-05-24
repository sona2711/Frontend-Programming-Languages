//assignment 1 
function fizzBuzz(num){
     for(let i = num ; i <= 100; i++){
         if(i % 3 == 0 && i% 5 != 0 ){ console.log("fizz")};
         if(i% 5 == 0 && i % 3 != 0 ){ console.log("buzz")};
         if(i % 3 == 0 && i % 5 == 0){ console.log("fizzBuzz")}
    }
}   
fizzBuzz(1)


//assignment 2
function isPalindrom(str){
    const regex = /[^a-z0-9]/g;
    let newStr = str.toLowerCase().replace(regex , "");
    let reverseStr = newStr.split("").reverse().join("") ;

        return  newStr === reverseStr
}
console.log(isPalindrom("abba"))
console.log(isPalindrom("hello"))
console.log(isPalindrom('Sit on a potato pan, Otis'))


//assignment 3
function drawCalendar(year, month){
    const date = new Date(year, month - 1)
  
     return date.toString()
}
console.log(drawCalendar( 2024, 8))



//assignment 4
function isDeepEqual(obj1, obj2) { 
     let sortObj1= Object.values(obj1).sort()
     let sortObj2= Object.values(obj2).sort()
     
     return JSON.stringify(sortObj1) === JSON.stringify(sortObj2)
}
const a = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const b = { list: [1, 2, 3], o: { x: 2 } };
console.log(isDeepEqual(a, b)); // false
b.prop1 = 1;
console.log(isDeepEqual(a, b)); // true




//assignment 5
function spiral(arr){
     let dimensionalArr = []
     let i, startRowIndex = 0, startColIndex = 0;
     let endRowIndex = arr.length;
     let endColIndex = arr[0].length
         if(arr.length == 0 ){
             return dimensionalArr
         }

     while (startRowIndex < endRowIndex && startColIndex < endColIndex) {
        // print the first row from the remaining rows
         for (i = startColIndex; i < endColIndex; ++i) {
            dimensionalArr.push(arr[startRowIndex][i]);
         }
         startRowIndex++;
 
        // print the last column from the remaining columns
         for (i = startRowIndex; i < endRowIndex; ++i) {
            dimensionalArr.push(arr[i][endColIndex - 1]);
         }
         endColIndex--;
 
        // print the last row from the remaining rows
         if (startRowIndex < endRowIndex) {
            for (i = endColIndex - 1; i >= startColIndex; --i) {
                dimensionalArr.push(arr[endRowIndex - 1][i]);
            }
            endRowIndex--;
         }
 
        // print the first column from the remaining columns
         if (startColIndex < endColIndex) {
            for (i = endRowIndex - 1; i >= startRowIndex; --i) {
                dimensionalArr.push(arr[i][startColIndex]);
            }
            startColIndex++;
         }
    }
    return dimensionalArr
}

console.log(spiral([[4, 5], [6, 7]])); // [4,5,7,6]
console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,7,8,7,4,5]
console.log(spiral([
[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]
])); // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]








//assignment 6
//equation = a*x^2 + b*x + c
function quadraticEquation(a,b,c){
    let rootsArr = []
 if (a == 0) { console.log("Invalid");
            return;   
        }
  let discriminant = b * b - 4 * a * c;
  let sqrt_val = Math.sqrt(Math.abs(discriminant));
 
     if (discriminant > 0) {
        //Roots are real and different
        rootsArr.push((-b + sqrt_val) / (2 * a) ,(-b - sqrt_val) / (2 * a));
           return rootsArr
    } else if (discriminant == 0) {
        //Roots are real and same
        rootsArr.push(-b / (2 * a));
        return rootsArr               
        }
        //discriminant < 0
        else { return rootsArr  }
  
}
console.log(quadraticEquation(1, -8, 72)); // x^2 - 8*x + 72 -> []
console.log(quadraticEquation(1, 12, 36)); // x^2 + 12*x + 36 -> [-6]
console.log(quadraticEquation(1, 6, 1)); // 1*x^2 + 6*x + 1 -> [-0.1715728752538097,-5.82842712474619]