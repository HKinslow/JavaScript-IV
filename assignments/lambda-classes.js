// CODE here for your Lambda Classes

class Person {
    constructor(personalInfo) {
        this.name = personalInfo.name;
        this.location = personalInfo.location;
        this.age = personalInfo.age;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructors extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
       console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listSubjects() {
        console.log(`${this.favSubjects}`)
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructors {
    constructor(projectManagerInfo) {
        super(projectManagerInfo);
        this.gradClassName = projectManagerInfo.gradClassName;
        this.favInstructor = projectManagerInfo.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const Keiran = new Instructors ({
    name: 'Keiran',
    location: 'Las Vegas',
    age: 26,
    favLanguage: 'JavaScript',
    specialty: 'Front-End',
    catchPhrase: 'no, I wont play guitar for you guys',
});

const Heather = new Student ({
    name: 'Heather',
    location: 'Daytona Beach',
    age: 25,
    previousBackground: 'Food Industry', 
    className: 'Webpt10',
    favSubjects: 'CSS',
});

const Griffin = new ProjectManager ({
    name: 'Griffin',
    location: 'Utah',
    age: 35,
    gradClassName: 'webpt2',
    favInstructor: 'Josh Knell',
});

Keiran.speak();
Keiran.demo('JavaScript');
Keiran.grade(Heather, 'science');
Heather.listSubjects();
Griffin.standup('webpt2')
Griffin.debugsCode(Heather, 'math');
