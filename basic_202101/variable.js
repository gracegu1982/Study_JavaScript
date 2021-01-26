// 1. Use strict
// added in ES 5
// use this for Valina JavaScript
'use strict';

// 2. Variable, rw(read/write) 메모리의 값을 읽고 쓸 수 있다
// let (added in ES 6) -> Mutable
// Block scope: 블럭 밖에서는 블럭 안의 내용을 볼 수 없다
// Global scope: 블럭 안/밖에서 모두 볼 수 있다
// 글로벌 스콥은 최소한으로 사용한다. 클래스, 함수, if, for 필요한 부분한 정의해서 쓴다.
let globalName = 'global naem';
{
    let name = 'Grace';
    console.log(name);
    name ='hello';
    console.log(name);
    console.log(globalName);

}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration form bottom to top)
// 자바스크립트 var은 값을 선언하기 전에 사용할 수 있기 때문
// 블럭 안에 넣어도 어디에서나 볼 수 있다

// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable needs to change
// 선언하고 나면 값을 변경할 수 없다
// 변경 가능: Mutable, 변경 불가능: Immutable
const daysInweek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function
// first-class function: function이 변수에 할당이 가능 하다
const count = 17; // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numberic valuse: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ 2*53)
// 숫자 뒤에 n을 붙이면 bigInt로 인지한다.
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MIN_SAFE_INTEGER;

// string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string) 자주쓰인다
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// bollean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요할 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol
// .description: string으로 변환해서 출력한다

// object, real-life object, date structure
const grace = {name: 'grace', age: 20}; // grace는 잠겨있어서 수정이 안되지만 .name, .age는 수정이 가능하다
grace.age = 21;

// 5. Dynamic typing: dynamically typed language
// 런타임에서 타입이 정해지기 때문에 조심해야한다 -> 그래서 타입스크립트가 나왔다
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value 4, type: number
console.log(text.charAt(0)); // errror  