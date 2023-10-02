export class Student {
    //Private chỉ cho truy cập trong phạm vi class
    private studentId: number;

    private studentName: string;

    private sex: boolean;

    private className: string;

    private age: number;

    private address: string;

    //Hàm khởi tạo
    constructor(studentId: number, studentName: string, sex: boolean,
        age: number, address: string, className: string) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.sex = sex;
        this.age = age;
        this.address = address;
        this.className = className;
    }

    public get getStudentId(): number {
        return this.studentId;
    }

    public set setStudentId(studentId: number
    ) {
        this.studentId = studentId;
    }

    public get getStudentName(): string {
        return this.studentName;
    }

    public set setStudentName(studentName: string
    ) {
        this.studentName = studentName;
    }

    public get getSex(): boolean {
        return this.sex;
    }

    public set setSex(sex: boolean
    ) {
        this.sex = sex;
    }

    public get getClassName(): string {
        return this.className;
    }

    public set setClassName(className: string
    ) {
        this.className = className;
    }

    public get getAge(): number {
        return this.age;
    }

    public set setAge(age: number
    ) {
        this.age = age;
    }

    public get getAddress(): string {
        return this.address;
    }

    public set setAddress(address: string) {
        this.address = address;
    }

    //Phương thức để nhập các dữ liệu cho student
    public inputData(data: Student): void {
        this.studentId = data.studentId;
        this.studentName = data.studentName;
        this.sex = data.sex;
        this.age = data.age;
        this.address = data.address;
        this.className = data.className;
    }

    //phương thức để show hết mọi thông tin student ra
    public displayData(): void {
        console.log(this)
    }
}