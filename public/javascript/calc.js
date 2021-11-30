//calculations and calculator

let gains = []
let loss =[]

$('#submit-expense-row').click(() => {



    ifArray = expenseArray.map((x) => {
        return x.gainLoss
    })

    // ifArray.forEach(() => {

        for (var i = 0; i < ifArray.length; i++) {

            console.log(ifArray[i])
        
    

    if(ifArray[i] === "Gain") {
        (ifArray[i].val()).push(gains)
        gainArray = expenseArray.map( (x) => {
            return parseInt(x.amount)
        })

       let totalGains = gainArray.reduce((a, b) => a + b, 0);

        console.log("your total gains are " + totalGains)
    } else {
        lossArray = expenseArray.map((x) => {
            return parseInt(x.amount)
        })

        let totalLoss = lossArray.reduce((a, b) => a + b, 0);

        console.log("your total loss are " + totalLoss)
    }
};


















   gainArray = expenseArray.map((x) => {
        return x.date
    })

    lossArray = expenseArray.map((x) => {
        return x.date
    })
})