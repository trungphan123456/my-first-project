// javascript là gì?
// ngôn ngữ dùng để tạo nên các trang web có thể tương tác

//---VARIABLE---
// ES5 (VAR)
// var a = 5;
// a = "Hello";
// console.log(a);
// git config user.email
// ES6 (LET, CONST)

//--OPERATORS(Toán tử)---
//+, -, *, **, /, %, ++, --(toán tử toán học)
// console.log(2 ** 3);

//=, +=, -=,*=, /=, %=, **=(toán tử gán)

//==,===,!=,!==,>,<,>=,<=,? (toán tử so sánh)

//&&,||, !(toán sử so sánh)

// var a = "123";
// var b = 123;
// console.log(a === b);

//---DATA TYPE ---
//Các loại dữ liệu chính(string, number, boolean, undefined)

//Object
// là tập hợp các vặp key: value
// Objects trong JavaScript, cũng tương tự như những ngôn ngữ khác, có thể so sánh như đối tượng trong đời thường
// Đối tượng là một tập hợp các thuộc tính
// Thuộc tính là một cặp khóa - giá trị chứa tên và giá trị
// Tên thuộc tính là một giá trị duy nhất có thể bị ép buộc vào một chuỗi và trỏ đến một giá trị
// Giá trị thuộc tính có thể là bất kỳ giá trị nào, bao gồm các đối tượng khác hoặc các hàm, được liên kết với tên/khóa

// let obj = new Object({ name: "Thien" });

// let obj = {
//   name: "Thien",
//   dob: 2003,
//   run: function () {
//     console.log("runing");
//   },
// };

// ---STRING, NUMBER---

//---STRING METHOD---
//length
// var a = "Hello";
// console.log(a.length);

//String.indexOf(str)
//String: chuỗi cha
//str: chuỗi con
//KQ: vị trí đầu tiên của chuỗi con, nếu không tìm thấy trả về -1
// hàm liên quan(lastIndexOf, search)
// var string = "Toi yeu WDS, Toi yeu WDS";
// console.log(string.lastIndexOf("WDS"));

//slice(start, end)
//start: vị trí bắt đầu, end: vị trí kết thúc
// var string = "Welcome to freetuts.net";
// console.log("Chuỗi cần lấy là: " + string.slice(11, 23));

//Nếu tham số truyền vào là số âm thì nó sẽ tính ngược lại, nghĩa là nó sẽ đếm từ cuối lên.
// var string = "Welcome to freetuts.net";
// console.log("Chuỗi cần lấy là: " + string.slice(-12, 23));

//Nếu bạn chỉ truyền một tham số đầu tiên thì nó sẽ tự hiểu vị trí end là vị trí cuối cùng.
// var string = "Welcome to freetuts.net";
// console.log("Chuỗi cần lấy là: " + string.slice(5));

// hàm liên quan (substring,substr)

//replace(str_find, str_replace)
//str_find: chuỗi cần tìm, str_replace: chuỗi sẽ được thay thế

// var string = "Welcome to freetuts.net";
// console.log(string.replace("freetuts.net", "123"));

//split (chuyển chuỗi sang mảng)
// var string = "1,2,3,4";
// console.log(string.split(","));

//---ARRAY---
// Array, hay được gọi là mảng, là kiểu dữ liệu mà giá trị của nó chứa nhiều giá trị khác. Mỗi giá trị của mảng được gọi là element (phần tử)
//Khai báo Array:
//C1:
// var arr = [1, 2, 3];
//C2:
// var arr = new Array(1, 2, 3);

//---IF ELSE ---
// var a = 1;
// var b = 2;
// if (a == b) {
//   console.log(a);
// } else {
//   console.log(b);
// }
//---SWITCH---
// var a = 2;

// switch (a) {
//   case 1: {
//     console.log("a = 1");
//     break;
//   }
//   case 2: {
//     console.log("a = 2");
//     break;
//   }
//   default:
//     break;
// }

//---LOOP---

// const numbers = [1, 2, 3, 4, 5, 6];

// for in
// for (let index in numbers) {
//   //   console.log(key);
//   console.log(numbers[index]);
// }

// // filter
// const arr = [
//   { id: 1, name: "Bao" },
//   { id: 2, name: "Quang" },
//   { id: 3, name: "Son" },
// ];
// const newArr = arr.map((item) => item.id !== 2);
// console.log(arr);
// map

// const d = new Date();
// console.log(d);

//--ARROW FUNCTION---
//-là một trong những tính năng mới và rất hay của ES6
//-thừa hưởng cách viết ngắn gọn bằng cú pháp ES6

//Arrow Function sử dụng kí tự =>
// function hello() {
//   console.log("Hello");
// }

// const hello = () => {
//   console.log("Hello");
// };

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((item) => {
//   if (item % 2 == 0) return item;
// });
// const newArr = arr.filter((item) =>
//   item % 2 == 0
// );
// console.log(newArr);
// const newArr2 = arr.filter(function (item) {
//   if (item % 2 == 0) return item;
// });
// console.log(newArr);
//Ngoài ra, ta còn sử dụng được arrow function trong trường hợp: map, filter, forEach,...
//---function
// const numbers = [1,2,3,4]
// const newArray = numbers.map(function(item){
// return item => item * 2
// })
// console.log(newArray)
//-- dung arrow function
// const numbers = [1, 2, 3, 4]
// const newArray = numbers.map(item => item * 2)
// console.log(newArray)

//---CALLBACK---
//Là một function sẽ được thực thi sau khi một function khác đã được thực thi xong
//Trong Javascript, functions là objects,do đó nó có thể nhận tham số là function, và cũng có thể trả về một function
//Vì vậy bất cứ function nào được truyền vào như một tham số và được gọi sau đó sẽ có tên là callback function

//Tại sao lại cần callback?

// vd: Muốn thức tự in ra là 1 2
// function first(callback) {
//   setTimeout(function () {
//     console.log(1);
//     callback();
//   }, 500);
// }
// function second() {
//   console.log(2);
// }
// first(second);
// second();

// const arr = [1, 2, 3, 4];

// const total1 = function () {
//   let count = 0;
//   arr.forEach(function (item) {
//     count += item;
//   });
//   return count;
// };

// const total2 = () => {
//   let count = 0;
//   arr.forEach((item) => {
//     count += item;
//   });
//   return count;
// };
// tìm hiểu trước EvenLoop, promise, bất đồng bộ trong js