import { Student } from "./Models/Student"
export class StudentManager {

    //không static thì luôn tạo lại initial value
    static students: Student[] = []

    //tao Student mới có chứa static sẽ không cần phải dùng new tạo 1 instance mới
    public static createStudent(data: Student): void {
        StudentManager.students.push(data)
        //this.students.push(data) //this => con trỏ
    }

    public static updateStudent(id: number, data: Student): void {
        //Gán lại mảng vì static lưu lại giá trị khi chương trình chạy 
        StudentManager.students = StudentManager.students.map((student: Student) => {
            if (student.getStudentId === id) {
                data.setStudentId = id;
                return data;
            }
            return student
        })
    }

    //Chú ý ở đây vì biến tĩnh static nên hàm vẫn phải có static
    public static showAllStudent(): any {
        StudentManager.students.forEach((student: Student) => {
            student.displayData()
        })
    }

    public static deleteStudent(id: number): void {
        StudentManager.students = StudentManager.students.filter(student => student.getStudentId !== id)
    }
}

//static thuộc phạm vi class và không phụ thuộc vào instance