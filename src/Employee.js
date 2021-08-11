export class Employee {
    constructor(name, category) {
        this.__name = name;
        this.__category = category;
        this.__dogs = [];
    }
    getName() {
        return this.__name;
    }
    getDogs() {
        return this.__dogs;
    }
    getDogByName(name) {
        if (typeof name === 'string') {
            return this.__dogs.find(dog => dog.name === name);
        } else {
            console.error("Not a string!");
        }
    }
    addDog(dog) {
        this.__dogs.push(dog);
        return Promise.resolve(dog);
    }
    removeDogByName(dogName) {
        const dog = this.getDogByName(dogName);
        const index = this.__dogs.indexOf(dog);
        if (index !== -1) {
            allDogs.splice(index, 1);
        }
    }
    getCategory() {
        return this.__category;
    }

    setCategory(newCategory) {
        this.__category = newCategory;
    }
}

export const employees = {
    bing: new Employee("Chendler Bing", "guard"),
    holms: new Employee("Sherlock Holmes", "search"),
    dorian: new Employee("John Dorian", "patrol")
}
