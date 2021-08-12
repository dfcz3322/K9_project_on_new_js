export class Dog {
    constructor(name, category) {
        this.__name = name;
        this.__category = category;
        this.__hasPartner = false;
    }
    getName() {
        return this.__name;
    }
    getCategory() {
        return this.__category;
    }
    getHasPartner() {
        return this.__hasPartner;
    }

    assignPartner() {
        this.getHasPartner = true;
    }
    removePartner() {
        this.__hasPartner = false;
    }
}

export const dogs = {
    hilde: new Dog("Hilde", "guard"),
    zeus: new Dog("Zeus", "search"),
    pride: new Dog("Pride", "patrol"),
    loki: new Dog("Loki", "search")
}

