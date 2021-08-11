import { Dog } from "./Dog.js";
import { Employee } from "./Employee.js";
import { remove } from "./utils.js";

export class K9 {
    constructor() {
        this.__dogs = [];
        this.__employees = [];
    }

    getEmployees() {
        return this.__employees;
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.getEmployees().push(employee);
        } else {
            console.error("Not an employee");
        }

    }

    getDogs() {
        return this.__dogs;
    }

    addDog(dog) {
        if (dog instanceof Dog) {
            this.getDogs().push(dog);
        } else {
            console.error("Not a dog");
        }
    }

    setDogToEmployee(employeeName, dogName) {
        const employee = this.getEmployees().find(employee => employee.getName() === employeeName);
        const dog = this.getDogs().find(dog => dog.getName() === dogName);
        employee.addDog(dog).then(dog => console.log(dog.getName() + " was added!"));
    }

    removeDogAndEmployee(employeeName, dogName) {
        remove(this.getEmployees(), employeeName);
        remove(this.getDogs(), dogName);
    }

    findEmployeeByDog(dogName) {
        const employee = this.getEmployees().find((employee) => {
            return employee.getDogs().find((dog) => dog.getName() === dogName);
        });

        return employee;
    }
}