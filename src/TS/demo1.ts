function greeter(person: string, age: number) {
  return "Hello, " + person + age;
}

const user = "Jane User";
const age = 1


document.body.innerHTML = greeter(user, age);

let y: any = '1'
y = 1

// const obj: object = 1
// console.log(obj.toFixed(2))

const list: number[] = [1, 2, 3, 4, 5]
list[1] = 100
console.log(list)
const unusable: void = undefined;

const someValue: any = "this is a string";
const strLength = (someValue as string).length;
// const strLength6 = (<string>someValue).length
console.log(strLength, 'strLength6')

//枚举
enum Color { Red = 5, Green, Blue }
const colorName: string = Color[6];

console.log(colorName);

function f(x: number, y?: number) {
  return x + (y || 0);
}

console.log(f(6, undefined))

//接口
interface Point {
  x: number;
  readonly y: number;
}
const p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
// p1.y = 5; // error!

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig) {
  const newSquare = { color: "white", area: 100 };
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

const mySquare = createSquare({ color: "black" });

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
