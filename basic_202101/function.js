'use strict';
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration 함수 선언
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello(); // 함수호출

// 유용한 함수
function log(message) { // 파라미터로 메세지를 전달하는 것이 좋다 
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const grace = {name: 'grace'};
changeName(grace);
console.log(grace);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // from의 인자값이 없으면 unknown으로 표시된다

// 4. Rest parameters (added in ES6)
function printAll(...args) { // 배열 형태로 전달된다
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

// 간단하게 for of 문법을 이용할 수 도 있다
//   for (const arg of args) {
//     console.log(arg);
//   }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie'); // 3개의 값이 담겨진 배열

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable 지역변수
  console.log(globalMessage); // 안에서는 밖에 있는 글로벌 변수를 볼 수 있다
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) {
    if (user.point > 10) { 
      // long upgrade logic...
      // 블럭 안에서 로직을 작성하게 되면 가독성이 떨어진다
    }
  }
  // good
  function upgradeUser(user) {
    if (user.point <= 10) {
      return; // 빨리 리턴을 해서 함수를 종료하고, 아래 필요한 로직을 만든다
    }
    // long upgrade logic...
  }

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression 함수 표현
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function 함수에 이름이 없다
    console.log('print');
  };
  print(); // 함수 호출
  const printAgain = print;
  printAgain();
  const sumAgain = sum; // 위에 만든 sum 함수를 다시 불러올 수 있다
  console.log(sumAgain(1, 3));

  // 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
// anonymous function
const printYes = function () {
    console.log('yes!');
  };

// named function
// better debugging in debugger's stack traces
// recursions
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };
// 아래처럼 간결하게 만들 수 있다
const simplePrint = () => console.log('simplePrint!');

// const add = function (a, b) {
//     return a + b;
// };
// 아래처럼 간결하게 만들 수 있다
const add = (a, b) => a + b;

// 블럭이 필요할 때
const simpleMultiply = (a, b) => { 
  // do something more
  return a * b; // 리턴키워드로 값을 리턴해줘야한다
};

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 바로 호출하려면
// 최근엔 많이 사용하진 않는다
(function hello() {
    console.log('IIFE');
  })();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b){
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('add', 2, 3));