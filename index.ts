import readline from "readline";
import { Student } from "./Models/Student";
import { StudentManager } from "./StudentManager";

//Khởi tạo 1 instance của chức năng cho phép nhập giá trị từ bàn phím 
let readLineInstance = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Hàm để chạy chương trình
function main() {
    //Khởi tạo các thuộc tính và các chức năng nhập vào
    readLineInstance.question("Vui long nhap: ", (action: string) => {
        switch (action) {
            //Thêm student
            case "C":
                //Tương tự
                const student: Student = new Student(1, "HAHA", true, 28, "RA", "DN");
                StudentManager.createStudent(student)
                main()
                break;
            //Show toàn bộ student
            case "R":
                //Tương tự
                StudentManager.showAllStudent()
                main()
                break;
            //Cập nhật
            case "U":
                const student1: Student = new Student(1, "Abasbdabsdahsdh", true, 20, "RA1", "DN1");
                //Gọi phương thức cập nhật student từ class StudentManager
                StudentManager.updateStudent(1, student1)
                main()
                break;
            //Xóa
            case "D":
                //Tương tự
                StudentManager.deleteStudent(1)
                main()
                break;
            case "E":
                //Đóng chức năng nhập vào => thoát chương trình
                readLineInstance.close();
                break;
            default:
                console.log(action)
                main()
                break;
        }
    })
}

main()