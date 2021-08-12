import { Dog } from "./Dog.js";

export class Puppy extends Dog {
    constructor(name, category, isPuppy) {
        super(name, category);
        this.__isPuppy = isPuppy;
    }
    checkPuppy(dogName) {
        if (dogName !== "hilde") {
            this.__isPuppy = false;
        } else {
            this.__isPuppy = true;
        };
    }

    getIsPuppy() {
        return this.__isPuppy;
    }
}
