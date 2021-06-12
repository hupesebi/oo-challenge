class Vehicle{
    constructor(make,model,year){
        this.make = make,
        this.model = model,
        this.year = year
    }
    honk(){
        return 'beep';
    }
    toString(){
        return 'The vehicle is a' + this.make + this.model + 'from' + this.year    
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels = 2
    }
    revEngine(){
        return 'VROOM!!!'
    }
}
class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(veh){
        if (veh instanceof Vehicle){
            if (this.capacity <= this.vehicles.length ){
                return "Sorry we are full"
            }
            this.vehicles.push(veh);
            return 'Vehicle added!'
        }
        return 'Sorry not a vehicle'
    }
}
