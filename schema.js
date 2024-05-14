const { buildSchema } = require("graphql");
const schema = buildSchema(`

type CustomClass
{
    prop1: String
}

type Student{
    id : ID
    name : String
    department : deptEnum
    age:Int
    isDomestic : Boolean
    courses : [Course]
}

enum deptEnum
{
    CSE
    MECH
}

type Course{
    name: String
    instructor : String
}


input StudentInput{
    name : String
    department : deptEnum
    age:Int
    isDomestic:Boolean
    courses : [CourseInput]
}
input CourseInput{
    name: String
    instructor : String
}
type Mutation{
    createStudent(input:StudentInput):Student
}

type CustomQueryType{
    student : Student,
    cusomObj : CustomClass,
    stringObj: String,
    getStudent(id: ID):Student
}

schema {
    query: CustomQueryType
    mutation: Mutation
}`);

module.exports = schema;
