//calculations and calculator

let gainArray = []
let lossArray = []

$('#submit-expense-row').click(() => {



    ifArray = expenseArray.map((x) => {
        return {
            gainLoss: x.gainLoss,
            amount: x.amount
        }
        //x.gainLoss + x.amount
    })

    // ifArray.forEach(() => {

    for (var i = 0; i < ifArray.length; i++) {


        if (ifArray[i].gainLoss === "Gain") {

            gainArray.push(parseInt(ifArray[i].amount))

            //////////////////////////////////////////////////////

            let totalGains = gainArray.reduce((a, b) => a + b, 0);

            console.log("your total gains are " + totalGains)


        } else {

            lossArray.push(ifArray[i])

            console.log(lossArray)



            //////////////////////////////////////////////
            // lossArray = expenseArray.map((x) => {
            //     return parseInt(x.amount)
            // })

            // let totalLoss = lossArray.reduce((a, b) => a + b, 0);

            // console.log("your total loss are " + totalLoss)




        }
    };


















    gainArray = expenseArray.map((x) => {
        return x.date
    })

    lossArray = expenseArray.map((x) => {
        return x.date
    })
})