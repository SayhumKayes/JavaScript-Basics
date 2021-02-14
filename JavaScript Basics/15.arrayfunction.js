var cars = new Array(5);
cars[0] = " Audi";
cars[1] = " BMW";
cars[2] = " Honda";
cars[3] = " Ferrari";
cars[4] = " Ford";
document.write(cars);

// function in object
var message = {
    body: function () {
        return `I am learning js`
    }
}
console.log(message.body());