import { Student } from "./Models/Student"
export class StudentManager {

    //không static thì luôn tạo lại initial value
    static students: Student[] = []

    //tao Student moi
    public static createStudent(data: Student): void {
        StudentManager.students.push(data)
        //this.students.push(data) //this=>con tro
    }

    public static updateStudent(id: number, data: Student): void {
        //Gan lai mang 
        StudentManager.students = StudentManager.students.map((student: Student) => {
            if (student.getStudentId === id) {
                data.setStudentId = id;
                return data;
            }
            return student
        })
    }

    public static showAllStudent(): any {
        StudentManager.students.forEach((student: Student) => {
            student.displayData()
        })
    }

    public static deleteStudent(id: number): void {
        StudentManager.students = StudentManager.students.filter(student => student.getStudentId !== id)
    }
}

//static thuoc pham vi class va khong phu thuoc vao instance