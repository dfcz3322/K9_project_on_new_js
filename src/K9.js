import { Dog } from "./Dog.js";
import { Employee } from "./Employee.js";

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
            this.__employees.push(employee);
        } else {
            console.error("Not an employee");
        }

    }

    getDogs() {
        return this.__dogs;
    }

    addDog(dog) {
        if (dog instanceof Dog) {
            this.__dogs.push(dog);
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
        this.__employees = this.__employees.filter(employee => employee.name !== employeeName);
        this.__dogs = this.__dogs.filter(dog => dog.name !== dogName);
    }

    findEmployeeByDog(dogName) {
        const employee = this.__employees.find((employee) => {
            return employee.getDogs().find((dog) => dog.getName() === dogName);
        });

        return employee;
    }
}