class Student {
  constructor(id, name, department, age, isDomestic, courses) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.age = age;
    this.isDomestic = isDomestic;
    this.courses = courses;
  }
}


const studentsArray = [];

let counter = 0;

const resolvers = {
  stringObj: () => {
    return "string value";
  },
  cusomObj: () => {
    return {
      prop1: "Prop1 value",
    };
  },
  student: () => {
    return {
      id: 1234,
      name: "Subbu",
      department: "CSE",
      courses: [
        {
          name: "Bigdata1",
          instructor: "John",
        },
        {
          name: "Android",
          instructor: "Adam",
        },
      ],
    };
  },

  getStudent: (index) => {
    // console.log("Array values---", studentsArray);
    // console.log("-------------------" + index.id);
    // console.log("index value----", studentsArray[id]);
    return studentsArray[index.id];
  },

  createStudent: ({ input }) => {
    let student = new Student(
      counter,
      input.name,
      input.department,
      input.age,
      input.isDomestic,
      input.courses
    );
    studentsArray[counter] = student;
    counter++;
    return student;
  },
};

module.exports = resolvers;
