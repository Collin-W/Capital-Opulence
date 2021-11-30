//calculations and calculator

$('#submit-expense-row').click(() => {



    ifArray = expenseArray.map((x) => {
        return x.gainLoss
    })

    if(ifArray === "Gain") {
        gainArray = expenseArray.map((x) => {
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



















   gainArray = expenseArray.map((x) => {
        return x.date
    })

    lossArray = expenseArray.map((x) => {
        return x.date
    })
})