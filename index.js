const inquirer = require('inquirer');

const helper = require('./helper');

//Array to hold the students
const students = [];



const populateStudentArray = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Name of the student? ",
            name: "studentName"
        },
        {
            type: "number",
            message: "Age of the student? ",
            name: "studentAge"
        },
        {
            type: "list",
            message: "Grade of the student? ",
            name: "studentGrade",
            choices: ["A", "B", "C", "D"]
        },
        {
            type: "input",
            message: "Marks of the student for Science, Maths, English, Hindi (comma separated)? ",
            name: "studentMarks"
        },
        {
            type: "input",
            message: "Do you wish to continue (Y/N) ",
            name: "cont"
        }
    ]).then(ans => {
        // create object based on the answer
        let student = {
            name: ans.studentName,
            age: ans.studentAge,
            grade: ans.studentGrade,
            marks: ans.studentMarks.split(",")
        }
        // Push the object in array
        students.push(student);

        //Check if user wants to continue inserting students 
        if (ans.cont.toLowerCase() === "y") {
            console.log("************ Enter details for next student *********");
            populateStudentArray();
        } else {
            console.log("************ Printing oldest student *********");
            let {name: highestName, age: highestAge} = helper.getOldestStudent(students);
            console.log("Eldest student is " + highestName + " and is " + highestAge + " years old!!");

            console.log("********** Sum of all the marks for all students ********");
            console.log("Total marks is " + helper.getTotalMarks(students));

            console.log("********* Writing to file ***********");
            console.log(helper.writeStudentsToFile(students));
        }

    });
}

populateStudentArray();











