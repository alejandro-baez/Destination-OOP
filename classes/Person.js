class Person {
    #bags = [];
    constructor(name,destination){
        this.name = name;
        this.destination = destination;
    }

    getBags(){
        return this.#bags
    }

    addBag(bag){
        this.#bags.push(bag)
    }


}


module.exports = Person;