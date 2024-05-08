class Car = {
    constructor() {
        this.parts = []
    }
}

class CarBuilder { 
    constructor() {
        this.car = new Car()
    }

    buildDoors(doors) {
        this.car.parts.push(`Doors: ${doors}`)
        return this
    }

    buildEngine(engine) {
        this.car.parts.push(`Engine: ${engine}`)
        return this
    }

    buildSeats(seats) {
        this.car.parts.push(`Seats: ${seats}`)
        return this
    }
    

    getResult() {
        return this.car
    }
}