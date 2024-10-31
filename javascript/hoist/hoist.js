 
console.log(hello);                                   
var hello = 'world';                                 
/*
var hello;
console.log(hello);
hello = 'world';  
*/
//output: undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/*
var needle; 
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
*/
//output: magnet


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
*/
//output: super cool




var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
*/

/* 
output:
chicken
half-chicken
*/

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/*
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
*/
//output: ERROR

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
*/

/* 
output: 
undefined
rock
r&b
disco
*/

var dojo;
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/*
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
*/

/*
output: 
san jose
seattle
burbank
san jose
*/

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/*
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
*/

/*
output: ERROR
*/