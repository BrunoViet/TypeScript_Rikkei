function enumerable(value: boolean) {
    console.log(value);

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target)
        console.log(propertyKey);
        console.log(descriptor);
    };
}

class User {
    id: number

    name: string

    @enumerable(false)
    display() {

    }
}