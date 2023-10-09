import readline from "readline"
import { CarManager } from "./CarManager"
import { Cars } from "./Models/Cars"

let readLineInstance = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



function main() {
    let name = prompt("nhap", "Hello")
    console.log(name)


    // readLineInstance.question("Vui long nhap: ", (action: string) => {
    //     while (action != "E") {
    //         if (action == "R") {

    //             CarManager.showAllCar()
    //             main()
    //             break
    //         } else if (action == "C") {
    //             const newCar: Cars = new Cars(1,
    //                 "Tesla",
    //                 142800,
    //                 "White",
    //                 "SUV")
    //             CarManager.createCar(newCar)
    //             main()
    //             break;
    //         } else if (action == "U") {
    //             const updateCar: Cars = new Cars(1, "ASDadsasd",
    //                 123123, "Black", "RR"
    //             )

    //             CarManager.updateCar(1, updateCar)
    //             main()
    //             break;
    //         } else if (action == "D") {
    //             CarManager.deleteCar(1)
    //             main()
    //             break;
    //         }
    //     }

    //     readLineInstance.close()

    // })
}

main()