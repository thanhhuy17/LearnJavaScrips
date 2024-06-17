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



