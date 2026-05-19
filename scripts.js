
let car = {
    brand:  'Honda',
    start: function(){
        console.log(this.brand  + ' is starting !')
    }
}

car.start(); // Output: "Honda is starting."