// setTimeout(function() {
//     alert('Xin Chào Huy Nguyễn');
// }, 3000)

// setInterval(function(){
//     console.log("JavaScript" + Math.random())
// }, 2000)

// var a = 1;
// var b = 2;

// if (a==b) {
//     console.log('Toán tử đúng')  ;
// }
// else{
//     console.log('Toán tử sai');
// }

// var age = 25
// // Object
// var myObject = {
//     age : 25,
//     name : 'Nguyễn Thanh Huy',
//     adress: 'HCM City',
//     myFunction : function(){

//     }
// }

// console.log(typeof age)

// Templete String
// var firstName = 'Nguyen Thanh'
// var lastName = 'Huy'
// var description = '     Ben is funny Dog is is is  '
// var listString = 'ben, nhi, huy'

// console.log(`My Name is: ${firstName} ${lastName}`)

// console.log(description.lastIndexOf('is', 18))

// console.log(description.replaceAll('is','HuyMau'))

// console.log(description.length)

// console.log(listString.split(', '))

// ============= Làm việc với kiểu số ===============

// var age = 10;
// var PI = 3.14;
// var result = a /PI;
// console.log(isNaN(result))

// var age = 25;
// var PI = 3.5498345635439865;
// var myString = age.toString();
// console.log(age)
// console.log(typeof age)
// console.log(PI.toFixed(4))

// =============  Mảng Trong JavaScript===============
// var languages= [
//     'Python',
//     'C#',
//     'JavaScript',
//     'C++',
//     'Ruby',
//      null,
//      undefined,
//      function(){},
//      {}
// ]

// console.log(languages)
// console.log(typeof languages)

// ============= Làm việc với Mảng Trong JavaScript===============
// var languages= [
//     'Python',
//     'C#',
//     'JavaScript',
//     'C++',
//     'Ruby',
//      null,
//      undefined,
//      function(){},
//      {}
// ]

// var languages2= [
//     'Python',
//     'C#',
//     'JavaScript',
//     'C++',
//     'Ruby'
// ]

// languages2.splice(1, 1, "Ben") //(vị trí con trỏ, số phần tử xóa, phần tử mới cần chèn)
// console.log(languages2.push('PHP'))

// console.log(languages.concat(languages2))
// console.log(languages2.slice())

// ============= Hàm Trong JavaScript===============
// function showDialog() {
//     alert('Learn JavaScript')
// }
// showDialog();

// ============= Sử dụng Hàm Trong JavaScript===============
// function inputNumber(number, address){
//     console.log(number, address)
// }

// inputNumber(10, 'huy');

// function inputLog(){
//     var myString = ''
//     for(var param of arguments){
//         myString+=`${param} - `
//     }
//     console.log(myString)

// }

// inputLog(1,2,3,4,7,9)

// ============= Return Hàm Trong JavaScript===============
// showName();
// showName2();

// // Declaration
// function showName(){
//     console.log('Nguyen Thanh Huy')
// }
// // Expression
// var showName2 = function (){
//     console.log('Nguyen Thanh Huy 2')
// }

// ============= Object Trong JavaScript===============

// var myInfo = {
//     name: 'Huy',
//     age: 25,
//     address: "Dong Nai",
//     getName: function(){
//         return this.name;
//     }
// }
// myInfo['-phoneNumber']= '0379849760' //Them Object
// Khai báo 1 phương thức trong 1 Object

//function: Phuong thuc - Method
//Other : Thuoc tinh - Property
// console.log(myInfo.getName())

// ============= Object Constructor Trong JavaScript===============
//Tạo bản thiết kế
// var User= function (firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar

//     this.getName = function(){
//         return `${this.lastName} ${this.firstName}`
//     }
// }
//Sử dụng bản thiết kế
// var author = new User('Huy', 'Nguyen', 'Image');
// var user1 = new User('Vu', 'Nguyen','image2')
// // Thêm đặc tính khác nhau
// author.title = "I like code"
// user1.comment = 'I need learn code JavaScript'

// console.log(author.getName())
// console.log(user1.getName())

// // Test
// //Create
// function flower(color, width, height, fragrant){
//     this.color = color;
//     this.width = width;
//     this.height = height;
//     this.fragrant = fragrant;

// }
// // Use
// var tulip = new flower('Violet', '20cm', '30cm', 1)
// var lily = new flower('Orange', '20cm', '30cm', 2)

// console.log(lily.color)

// ============= Object Prototype Trong JavaScript===============
// function flower(color, width, height, fragrant){
//     this.color = color;
//     this.width = width;
//     this.height = height;
//     this.fragrant = fragrant;
//     this.getFlower = function(){
//         return `${this.color} and ${this.beautiful}`
//     }
// }
// // Thêm thuộc tính
// flower.prototype.beautiful = 'Extremely Beauty'
// // Thêm phương thức
// flower.prototype.getSize = function(){
//     return `${this.width} and ${this.height}`
// }

// // Use
// var tulip = new flower('Violet', '20cm', '30cm', 1)
// var lily = new flower('Orange', '20cm', '30cm', 2)

// console.log(tulip.beautiful)
// console.log(lily.getSize())
// console.log(lily.getFlower())

// ============= Date Trong JavaScript===============
// var date = new Date();

// var dayPre = date.getDate();
// var monthPre = date.getMonth() + 1;
// var yearPre = date.getFullYear();

// console.log(`${dayPre}/${monthPre}/${yearPre}`)

//Object Constructor : Use to create the Design
// and Object Prototype : Add Property and Method

// function Car(speed, color, fuel){
//     this.speed = speed;
//     this.color = color;
//     this.fuel = fuel;
//     this.getSpeedAndFuel = function(){
//         return `${this.speed} ${this.fuel}`
//     }
// }

// //Add Property
// Car.prototype.beautiful = 'Nice'
// //Add Method
// Car.prototype.getColorAndBeautiful = function(){
//     return `${this.color} ${this.beautiful}`
// }

// var honda = new Car('150km/h', 'Red', 'Old');
// var ferrari = new Car('300km/h', 'Orange', 'Electric');

// console.log(honda);
// console.log(ferrari.getColorAndBeautiful());

// Switch Case

// var day = 8;

// switch(day){
//     case 2:
//         console.log('Hôm nay là thứ 2')
//         break;
//     case 3:
//         console.log('Hôm nay là thứ 3')
//         break;
//     case 4:
//         console.log('Hôm nay là thứ 4')
//         break;

//     case 5:

//     case 6:

//     case 7:
//         console.log('Hôm nay là thứ 5,6,7')
//         break;
//     default: console.log('Không xác đinh')
// }

//Toán tử 3 ngôi
//1 Object
// var car ={
//     useAge : 20,
//     name: 'Toyota',
//     color: "black"
// }

// var checkCar = car.useAge >= 30 ? `${'Name: '+ car.name}\n${'Color: '+car.color}` : 'No Age';

// console.log(checkCar)

// loop For with Array
// var myArray = [
//     'Hyundai',
//     'Toyota',
//     'Ferrari',
//     'Lamborghini',
//     'Porches'
// ]

// var lengthMyArray = myArray.length;
// console.log(lengthMyArray);
// for(i = 0; i < lengthMyArray; i++){
//     console.log(myArray[i-2])
// }

// loop For In

// var myArray = [
//     'Hyundai',
//     'Toyota',
//     'Ferrari',
//     'Lamborghini',
//     'Porches'
// ]

// for(var key in myArray){
//     console.log(myArray[key])
// }

// var car ={
//     useAge : 20,
//     name: 'Toyota',
//     color: "black"
// }

// for(var key in car){
//     console.log(car[key])
// }

// var myName = 'Nguyen Thanh Huy'
// for(var key in myName){
//     // console.log(myName[key])
//     if(myName[key] === 'H'){
//         console.log('my name is huy')
//     }
//     else{
//         console.log("Don't See")

//     }
// }

//Loop Of
// var car ={
//     useAge : 20,
//     name: 'Toyota',
//     color: "black"
// }
// var a =Object.values(car)
// console.log(a)
// for(var value of a){
//     console.log(value)
// }

//while

// var myCar = [
//     'Hyundai',
//     'Toyota',
//     'Ferrari',
//     'Lamborghini',
//     'Porches'
// ]

// var i = 0;
// var lengthCar =myCar.length
// while( i < lengthCar){
//     console.log(myCar[i]);
//     i++;
// }

//do while

// var i = 0
// var isSuccess = false

// do {
//     i++
//     console.log('Nap lan thu: '+ i)

//     if(true){
//         isSuccess = true
//     }
// } while (!isSuccess && i<=3);

//break and continues

// for (let index = 0; index < 10; index++) {
//     if(index > 5){
//         break;
//     }
//     console.log(index)
// }

// for (let index = 0; index < 10; index++) {
//     if(index % 2 === 0){
//         continue
//     }
//     console.log(index)
// }

// 48: Nested Loop
// var myArray = [
//     [6,5],
//     [4,3],
//     [2,1]
// ]

// // Order By
// for (let i = 0; i < myArray.length; i++) {
//     // console.log(myArray[i])
//     for (let j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j])
//     }

// }

//49: Làm việc với Mảng trong JavaScript
// var sports = [
//     {
//         id: 1,
//         name: 'Soccer',
//         tired: 1
//     },
//     {
//         id: 2,
//         name: 'Volleyball',
//         tired: 1
//     },
//     {
//         id: 3,
//         name: 'Badminton',
//         tired: 1
//     },
//     {
//         id: 4,
//         name: 'BaseBall',
//         tired: 100
//     },
//     {
//         id: 5,
//         name: 'Swimming',
//         tired: 0
//     },

//     {
//         id: 6,
//         name: 'Badminton',
//         tired: 100
//     },

// ]
// sports.forEach(function(sport, index){
//     console.log(index,sport)
// });
//--------------- EVERY---------------------
// var checkTired = sports.every(function(sport, index){
//     return sport.tired === 0
// });
// var huy = ` ${checkTired ? 'Quá khỏe': 'Quá Mệt'}`
// console.log(checkTired)

//--------------- SOME---------------------
// var checkTired = sports.some(function(sport, index){
//     return sport.tired === 0
// });

// var huy = checkTired ? 'Quá khỏe': 'Quá Mệt'
// console.log(checkTired)
//--------------- FIND---------------------

// var checkTired = sports.find(function(sport, index){
//     return sport.name === 'Badminton'
// });

// var huy = checkTired ? 'Quá khỏe': 'Quá Mệt'
// console.log(checkTired)
//--------------- Filter---------------------

// var checkTired = sports.filter(function(sport, index){
//     return sport.name === 'Badminton'
// });

// var huy = checkTired ? 'Quá khỏe': 'Quá Mệt'
// console.log(checkTired)

//================ 50. Array map method trong JavaScript | Làm việc với mảng =====================
// var sports = [
//   {
//     id: 1,
//     name: "Soccer",
//     tired: 1,
//     coin: 105,
//   },
//   {
//     id: 2,
//     name: "Volleyball",
//     tired: 1,
//     coin: 103,
//   },
//   {
//     id: 3,
//     name: "Badminton",
//     tired: 1,
//     coin: 102,
//   },
//   {
//     id: 4,
//     name: "BaseBall",
//     tired: 100,
//     coin: 109,
//   },
//   {
//     id: 5,
//     name: "Swimming",
//     tired: 0,
//     coin: 156,
//   },

//   {
//     id: 6,
//     name: "Badminton",
//     tired: 100,
//     coin: 199,
//   },
// ];

// Tổng tiền
// const sum = sports.reduce((count, value) => {
//   return count + value.coin;
// }, 0);

// console.log("Total: ", sum);

// function game(game){
//     return {
//         id : game.id,
//         name: `New Game ${game.name}`,
//         tired: game.tired,
//         // index: index
//     }
// }

// Create New Array Name
// function newName(names){
//     return
//     {
//         id: names.id,
//         name: `New Game ${game.name}`,
//         tired: game.tired
//     }
// }
// var newSports = sports.map((game, index)=>{
//     return[
//         `id : ${game.id}`
//         // sport: game.name''
//         // mucdo: game.tired,
//         // index: index + 1
//     ]

// }); // Array
// console.log("Learn map: ", newSports)

//============= Phương thức reduce khi làm việc với array =======================
// Dùng Vòng Lặp
// var totalCoin = 0;
// for (var iterator of sports) {
//     totalCoin += iterator.coin
// }

// console.log(totalCoin)

//Dùng Reduce nó có 2 tham sô truyền vào
//1. function 2. Giá trị ban đầu
//Function truyền vào có 4 tham số:
//1. accumulator: Giá trị khởi tạo = Giá trị ban đầu = 0
//2. curentValue: Giá trị phần tử trong mảng
//3: curentIndex: Vị trí trong mảng 0,1,2...
//4: originArray: = sports, mảng ban đầu có bao nhiêu thì nó có bấy nhiêu.

// function totalHanderCoin(accumulator, curentValue, curentIndex, originArray){
//     console.table({
//         "Môn thể thao thứ": curentIndex + 1,
//         "Chi phí chơi": `${curentValue.coin} ngàn đồng`
//     })
//     accumulator+=curentValue.coin
//     return accumulator
// }

// var totalCoin = sports.reduce(totalHanderCoin, 0)

// console.log("Tổng chi phí chơi thể thao: " , totalCoin)

// viết ngắn gọn
// var sumCoin = sports.reduce((count, val)=>{
//     return count+val.coin
// } , 0)
// console.log("Total Coin: ", sumCoin)

// const random = Math.floor(Math.random() * 100);
// if (random < 50) {
//   console.log("Success!", random);
// }

//! Call back function:  call back là 1 hàm đc làm đối số truyền nào của 1 hàm khác

// function myTestFunction(param) {
//   param("Học Đi Đôi vs Hành");
// }

// function callBackFunc(value) {
//   console.log("value: ", value);
// }

// myTestFunction(callBackFunc); // Call back

// Call back function: PART 2

// Array.prototype.map2 = function (callback) {
//   // console.log(this);
//   var arrayLength = this.length;
//   var output = [];
//   for (var i = 0; i < arrayLength; i++) {
//     var result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };

// const listUsers = [
//   {
//     name: "Hung",
//     age: 15,
//   },
//   {
//     name: "David",
//     age: 2,
//   },
//   {
//     name: "Dang",
//     age: 8,
//   },
//   {
//     name: "Dan",
//     age: 8,
//   },
// ];

// const users = listUsers.map2(function (user, index) {
//   return  `<h2>Name:  ${user.name} ${index}</h2>`;
// });

// const users = listUsers.map(function (user) {
//   return `<h2>Name:  ${user.name}</h2>`;
// });

// console.log("Hay", users.join("\n"));

// Array.prototype.filter2 = function(callback){
//     const arrayLength = this.length
//     const output = []
//     console.log(arrayLength);
//     for(let i = 0; i < arrayLength; i++){
//         var result = callback(this[i], i)
//         if(result == true){
//             output.push(this[i])
//         }
//     }
//     return output
// }

// const a= listUsers.filter2((nameTrung, index)=>{
//     return nameTrung.name =="Dan"
// })

// console.log(a);

// const listUsers = [
//   {
//     name: "Hung",
//     age: 15,
//   },
//   {
//     name: "David",
//     age: 2,
//   },
//   {
//     name: "Dang",
//     age: 8,
//   },
//   {
//     name: "Dan",
//     age: 8,
//   },
// ];

// listUsers.length = 10;

// console.log(listUsers.length);

// for (let i = 0; i < listUsers.length; ++i) {
//   console.log(listUsers[i]);
// }

//

//!-------- Xây dựng phương thức forEach -------------
// Array.prototype.forEach2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
// //console.log( index);
//       callback(this[index], index, this);
//     }
//   }
// };

// const listUsers = [
//   {
//     name: "Hung",
//     age: 15,
//   },
//   {
//     name: "David",
//     age: 2,
//   },
//   {
//     name: "Dang",
//     age: 8,
//   },
// ];

// listUsers.forEach2((user, index, array) => {
//   console.log("All: ", user, index, array);
// });
// console.log(result);

//!-------- Xây dựng phương thức Filter -------------

// Array.prototype.filter2 = function (callback) {
//   var output = []
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result= callback(this[index], index, this);
//       if(result){
//         output.push(this[index])
//       }
//     }
//   }
//   return output
// };

// const listUsers = [
//   {
//     name: "Hung",
//     age: 15,
//   },
//   {
//     name: "David",
//     age: 2,
//   },
//   {
//     name: "Dang AHai",
//     age: 8,
//   },
// ];

// var filterResult = listUsers.filter2((user, index, array) => {
//   return user.name.includes('Da');
//   // console.log(user, index, array);
//   // return user.age > 2;
// });

// console.log(filterResult);

//!-------- Xây dựng phương thức Some -------------
//? Chỉ 1 điều kiện thỏa là trả về True và dừng vòng lặp
// Array.prototype.some2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       // console.log(index);
//       var result = callback(this[index], index, this);
//       if (result) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// const listUsers = [
//   {
//     name: "Hung",
//     age: 15,
//     isFinish: true,
//   },
//   {
//     name: "David",
//     age: 2,
//     isFinish: true,
//   },
//   {
//     name: "Dang AHai",
//     age: 8,
//     isFinish: false,
//   },
// ];

// // var listUsers = new Array(1000)

// const result = listUsers.some2(function (user, index, array) {
//   // console.log(listUsers);
//   return user.age < 2;
// });

// console.log(result);

//!-------- Xây dựng phương thức Every -------------
//? Tất cả điều kiện đều phải thỏa thì every mới trả về True, 1 cái không thỏa là dừng vòng lặp

Array.prototype.every2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      // console.log(index);
      var result = callback(this[index], index, this);
      if (!result) {
        return false;
      }
    }
  }
  return true;
};
const listUsers = [
  {
    name: "Hung",
    age: 15,
    isFinish: true,
  },
  {
    name: "David",
    age: 2,
    isFinish: true,
  },
  {
    name: "Dang AHai",
    age: 8,
    isFinish: false,
  },
];

const User = listUsers.every2((user, index, array) => {
  // console.log(user, index, array);
  return user.age > 1;
});

console.log(User);
