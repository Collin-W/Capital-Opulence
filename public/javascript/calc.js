//calculations
let gainArray = [];
let lossArray = [];

$('#submit-expense-row').click(() => {

    ifArray = expenseArray.map((x) => {
        return {
            gainLoss: x.gainLoss,
            amount: x.amount
        }
    });

    $(ifArray).each((i) => {

        if (ifArray[i].gainLoss === "Gain") {

            gainArray.push(parseInt(ifArray[i].amount));

            let totalGains = gainArray.reduce((a, b) => a + b, 0);

            console.log("your total gains are " + totalGains);


        } else {

            lossArray.push(parseInt(ifArray[i].amount));

            let totalLoss = lossArray.reduce((a, b) => a + b, 0);

            console.log("your total loss are " + totalLoss);
        }
    });

//calculator
















    gainArray = expenseArray.map((x) => {
        return x.date
    })

    lossArray = expenseArray.map((x) => {
        return x.date
    })
})