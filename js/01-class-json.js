/* JSON */
var bike = {
    color: 'Blue',
    model: 'JIMG',
    type: 'Mountain',
    changeColor: function(newColor){
        //bike.color = newColor;
        this.color = newColor;
        console.log(this);
    }
};

console.log(bike);