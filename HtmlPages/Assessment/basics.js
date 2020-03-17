//Object
/*var std = {
    rollNo: 101,
    name: "Ram",
    talk: function () {
        console.log("talk");
    },
    subjects: ['english', 'maths'],
    /* walk() {
         console.log("Walking");
     },
    walk() {
        console.log(this);
    },

    marks: {
        english: 80,
        maths: 90
    }
};
console.log(std.name);
console.log(std.rollNo);
console.log(std.subjects[0]);
console.log(std.subjects[1]);
console.log(std.talk());
//standalone function-parent window prop are seen
console.log(std.walk());
var std1 = std.walk;
console.log(std1());

console.log(std.marks.english);
console.log(std.marks["maths"]);
//binding object to function- returns std properties
var std2 = std.walk.bind(std);
console.log(std2());

//Class
//Parent class
class Person {
    constructor(name) {
        this.name = name;
    }
}

//Child class
class Student extends Person {
    marks1 = {};
    subjects = [];
    // constructor(rollNo, name) {
    constructor(rollNo) {
        super(name);
        this.rollNo = rollNo;
    }
    // this.rollNo = rollNo;
    //this.name = name;
    //}
    talk1() {
        console.log("Talking");
    }
    walk1() {
        console.log("Walking");
    }
}
var std2 = new Student(1001, "Ram");
console.log(std2.name);
console.log(std2.rollNo);
//std2.walk1();

//Arrow Functions
function add(n1, n2) {
    return n1 + n2;
}
//var sum = (n1, n2) => { return n1 + n2; }
var sum = (n1, n2) => n1 + n2;
console.log(sum(10, 20));

var square = n1 => n1 * n1;
console.log(square(10));

var cube = () => 10 * 10 * 10;
console.log(cube());

var arr = [11, 20, 31, 40];
var arr2 = [];
function sq() {
    for (var i = 0; i < arr.length; i++) {
        arr2[i] = arr[i] * arr[i];
        console.log(arr2[i]);
    }

}
sq();

//map(x=>f(x))- applies function on every element
console.log(arr.map(num => num * num));


//filter
console.log(arr.filter(num => num > 20));
console.log(arr.filter(num => ((num % 2) == 0)));
console.log(arr.filter(num => ((num % 2) !== 0)));


//reduce
console.log(arr.reduce((acc, val) => acc + val));

//Destructing
const address = {
    street: "7th cross",
    area: "Tnagar",
    city: "Chennai"
}
//instead of declaring as below the easy way iswritten down
//const street = address.street;
//const street = address.area;
//const street = address.city;

//shortcut to declare and access
//selected variables
const { street, area, city } = address;
console.log(street);
console.log(area);

console.log(street + " " + " " + area + " " + city);
//const { city } = address;
//console.log(city);

//accessing selected one with own names
//Alias
const { city: c } = address;
console.log(c);*/


//Spread Operator
var arr1 = [10, 20, 30];
var arr2 = [40, 50, 60];

var arr3 = [...arr1, ...arr2];
console.log(arr3);

//array clone
var arr4 = [...arr1];
console.log(arr4);

//adding elements in between array elements
var arr3 = [3, 6, ...arr1, 50, 55, ...arr2, 100];
console.log(arr3);

//Object clone- properties of one object is copied to another object
var student1 = {
    rollNo: 102,
    name: "Ram"
};

var student2 = { ...student1 };
console.log(student2);
student2.schoolname = "Sarath Vikas";
console.log(student2);

var student3 = {
    rollNo: 103,
    name: "Sam"
};
var std = { ...student2, ...student3, city: "Chennai" }
console.log(std);

//modules- means packages
//two keyword- import , export, default
//import {class_Name or function_Name or both} from 'path';
//import{Person} from '../es7';

//use export keyword infront of class or function to make it as public
//export talk(){}
//any class or function is defined as default and is export then no need to use the curley braces to imported classes
//import Person, walk from '../es';
export default class Person {
    constructor(name) {
        this.name = name;
    }
}

