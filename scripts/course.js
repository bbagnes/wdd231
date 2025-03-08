
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

createCourseCard(courses);

const allLink = document.querySelector(".all");
const cseLink = document.querySelector(".cse");
const wddLink = document.querySelector(".wdd");


allLink.classList.add('active');

let clearActive  = () => {
	allLink.classList.remove('active');
	cseLink.classList.remove('active');
	wddLink.classList.remove('active');
};

allLink.addEventListener("click", () => {
	clearActive();
	createCourseCard(courses);	
	allLink.classList.add('active');
})

cseLink.addEventListener("click", () => {
	clearActive();
	createCourseCard(courses.filter((course) => course.subject === "CSE"));	
	cseLink.classList.add('active');
});

wddLink.addEventListener("click", () => {
	clearActive();
	createCourseCard(courses.filter((course) => course.subject === "WDD"));	
	wddLink.classList.add('active');
});

function createCourseCard(filteredCourses) {
	document.querySelector(".courses").innerHTML = "";
    let totalCredits = 0;
    let possibleCredits = 0;
    let card = document.createElement("ul");

	filteredCourses.forEach(course => {		
		let name = document.createElement("li");                

		name.textContent = `${course.subject}\u00A0${course.number}\u00A0(Credits:\u00A0${course.credits})`;
		if (course.completed === true) {
			name.classList.add('complete');
            totalCredits += course.credits;
		}
		possibleCredits += course.credits;
		card.appendChild(name);        
		
		document.querySelector(".courses").appendChild(card);
});
    let total = document.createElement("li");
    document.querySelector(".courses").appendChild(total);
    if (totalCredits == possibleCredits) {
            total.classList.add('complete');
        }
    total.textContent = `Total Credits Earned:\u00A0${totalCredits}/${possibleCredits}`
}