var LiveForm = require('./LiveForm.js')
//խոտի կլասը
module.exports = class Grass  extends LiveForm{
    constructor(x, y, ind) {
        super(x, y, ind);
    }

    //mul() Բազմացում
    mul() {
        this.multiply++;
        if (this.multiply == 3) {

            //Հետազոտում է շրջապատը, որոնում դատարկ տարածքներ
            var fundCords = this.getDirections(0);
            var cord = fundCords[Math.floor(Math.random()*fundCords.length)];
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                //Ավելացնում է նոր խոտ խոտերի զանգվածում
                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                //Ավելացնում է նոր խոտի մասին գրառում հիմնական matrix-ում 
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}
