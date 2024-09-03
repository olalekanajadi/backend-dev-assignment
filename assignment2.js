let students = [
    {
        "name" : "John Doe",
        "age" : 17,
        "grade": "C"
    },

    {
        "name" : "Oliver Twist",
        "age" : 20,
        "grade": "A"
    },

    {
        "name" : "Michael Williams",
        "age" : 18,
        "grade": "D"
    },

    {
        "name" : "Christian Joe",
        "age" : 22,
        "grade": "D"
    },

    {
        "name" : "Carrick Dice",
        "age" : 24,
        "grade": "F"
    },

    {
        "name" : "Bright Gift",
        "age" : 18,
        "grade": "A"
    },

    {
        "name" : "Daniel Lion",
        "age" : 21,
        "grade": "A"
    },

    {
        "name" : "Samson Powers",
        "age" : 24,
        "grade": "E"
    },

    {
        "name" : "Delilah Smart",
        "age" : 18,
        "grade": "A"
    },

    {
        "name" : "Simon Peter",
        "age" : 26,
        "grade": "B"
    },

    {
        "name" : "Judas IScariot",
        "age" : 23,
        "grade": "F"
    },

    {
        "name" : "Lucy Star",
        "age" : 19,
        "grade": "F"
    },

    {
        "name" : "Jesus Christian",
        "age" : 27,
        "grade": "A"
    },

    {
        "name" : "Elisha Burn",
        "age" : 24,
        "grade": "C"
    },

    {
        "name" : "Ramses King",
        "age" : 22,
        "grade": "F"
    },
];

function filterByGrade(grade){
let filtered = students.filter(content=> content.grade == grade);
    return filtered;
}

var show = filterByGrade('F');
console.log(show)


function averageAge(){
    let studentsAge = students.map(allAge => allAge.age);
    let totalAge = studentsAge.reduce((a,b)=>a+b);
    let average = (totalAge/studentsAge.length);
    return `Average age of the students = ${Math.round(average)}`;
    
}

var age = averageAge();
console.log(age);