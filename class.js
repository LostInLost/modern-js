class Holiday {
    constructor(destination, days) {
        this.destination = destination
        this.days = days
    }

    info() {
        alert(`${this.destination} will take ${this.days}`)
    }
}


class Expedition extends Holiday {
    constructor(destination, days, gear) {
        super(destination, days)
        this.gear = gear
    }

    info() {
        super.info()
        alert(`Bring your ${this.gear.join(' and your ')}`)
    }
}

const tripWithGear = new Expedition('Semeru', 10, ['Camera', 'Flags'])

tripWithGear.info();