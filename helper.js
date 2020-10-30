const fs = require('fs');

//Function to log the oldest student
const getOldestStudent = (arr) => {
    let {age: highestAge, name} = arr[0];

    arr.forEach(element => {
        if(highestAge < element.age) {
            highestAge = element.age;
            name = element.name;
        }
    });
    return { name: name, age: highestAge};
}

const getTotalMarks = (arr) => {
    let stArr = [];
    arr.forEach(element => {
        stArr.push(...element.marks);
    });
    let sum = 0;
    return stArr
        .filter(ele => ele != "")
        .reduce((a,b) => parseInt(a) + parseInt(b));
}


const writeStudentsToFile = (arr) => {
    arr
        .map(student => student.name + "-" + student.grade + "\r\n")
        .forEach(ele => fs.appendFile("student.txt",ele, (err) => {
            if(err){
                throw err;
            }
        }));
}

module.exports = {
    getOldestStudent, 
    getTotalMarks,
    writeStudentsToFile
};

