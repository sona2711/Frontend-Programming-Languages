//assingment 3
function calc (a,b) {
    if (a==0) return "Enter numbers greater or less than 0."
    return function operation (symbol){
        switch (symbol){
            case "+":
              console.log(a+b) ;
              break;
            case "-":
              console.log(a-b);
              break;
            case "/":
              console.log(a/b);
              break;
            case "*":
              console.log(a*b);
              break;
            default:
              return "Wrong symbol"
    }
    }}
    console.log(calc(7,25)("/"))


//assingment 5
const notConstractorFunc = ()=>{ console.log("Happy coding!!");}
notConstractorFunc();

const newFunc = new notConstractorFunc();


//assingment 6
function sleep(seconds) {
    let date = Date.now();
    while (Date.now() - date < seconds*1000){
    }
}
console.log(new Date().toString()); 
sleep(2);
console.log(new Date().toString()); 