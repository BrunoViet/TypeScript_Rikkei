//định nghĩa decorator
function Imutable(constructor: Function) {
    console.log("This is immutable");
    console.log(constructor);
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

//Tiêm decorator (ở đây là dạng class decorator)
@Imutable
class User {
    id: number;

    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

//Tạo mới một instance để test
const user: User = new User(1, "VietTDQ");//kết quả trả về là 1 function theo decorator chứ không theo class
//class => tiêm decorator dạng class vào => class biến thành hàm theo decorator

Object.seal(user)

user.name = "aaa"

delete user.name

console.log(user)

//Ví dụ 2

//Định nghĩa decorator
function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

//Tiêm decorator
@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

//Tạo instance
const bug = new BugReport("Needs dark mode");//Instance khi được tạo ra từ class được tiêm decorator sẽ được thêm 1 thuộc tính như trong hàm decorator định nghĩa
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
console.log(bug)
