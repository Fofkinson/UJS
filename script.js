'use strict';

var number = 5; //число
var string = "Hello!"; //строка
var sum = Symbol(); //символ
var boolean = true; //булево значение, то есть "да(true)" или "нет(false)"
null;
undefined; //не определенное значение
var obj = {}; //объект

console.log(4 / 0);
console.log('string' * 9);

let something;
console.log(something);

let persone = {
  name: "John",
  age: 25,
  isMarried: false
};

console.log(persone["name"]); //также можно писать в виде (persone.name)

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
//массив, может содержать что угодно

console.log(arr[1]);

//alert('hello world!'); //простое модальное окно

//let answer = confirm("are you here?");
//модальное окно, позволяющее получить булевое значение
//console.log(answer);

// let answer = +prompt("есть ли вам 18?", "Да");
//модальное окно, позволяющее получить информацию от пользователя
// console.log(typeof(answer));
//typeof - для получения информации о типе данных

// console.log("arr" + " - object");
// console.log(4 + " - object");

let incr = 10,
    decr = 10;

// console.log(++incr); //11
// console.log(--decr); //9

console.log(incr++); //10
console.log(decr--); //10

console.log(5%2);
console.log("2" === 2);

