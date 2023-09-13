//Basic variables
const username: string = "Viet";
const age: number = 20;
const isActivated: boolean = true;
console.log(age);
console.log(username);
console.log(isActivated);

//Arrays
const number: number[] = [1, 2, 3];
const mixed: any = ["a", 1, { name: "hello" }];
console.log(number);
console.log(mixed);

//Object
const user: object = {
  name: "user",
  age: 20,
};
console.log(user);

//Function trả về number
const sumNumber = (a: number, b: number): number => {
  return a + b;
};

console.log(sumNumber(1, 2));

//Function không trả về gì
const showName = (name: string): void => {
  console.log(name);
}

showName("Viet1")