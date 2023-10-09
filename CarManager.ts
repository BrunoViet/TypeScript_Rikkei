import { Cars } from "./Models/Cars";

export class CarManager {
    static cars: Cars[] = [];

    static createCar(data: Cars): void {
        CarManager.cars.push(data);
    }

    static updateCar(id: number, data: Cars): void {
        CarManager.cars = CarManager.cars.map((car: Cars) => {
            if (car.getId === id) {
                data.setId = id;
                return data
            }
            return car
        })
    }

    static showAllCar(): void {
        CarManager.cars.forEach((car: Cars) => {
            console.log(car);
        })
    }

    static deleteCar(id: number): void {
        CarManager.cars = CarManager.cars.filter((car: Cars) => car.getId !== id)
    }
}