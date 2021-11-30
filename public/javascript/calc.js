//calculations
let gainArray = [];
let lossArray = [];
const a = []
const b = []

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
})

//calculator

// i want loss labels to have a minus added absolute value


// program for a simple calculator

$('.calc-btn').click(() => {

    // const a = []

    $(a).push($('.calc-btn').val())

    //should have a concatenated string
    a.reduce((x, y) => x + y);

    //now parsing
    console.log(parseInt(a[1]))


    if ($('.operator').click()) {
        $('.operator').click(() => {
            const operator = $('.operator').val()

            console.log(operator)


            $('.calc-btn').click(() => {
                //const b = []

                $(b).push($('.calc-btn').val())

                //should have a concatenated string
                b.reduce((x, y) => x + y);

                //now parsing
                console.log(parseInt(b[1]))
            })

        });
    }
})

$('#calculate').click(() => {

    let result;

    switch (operator) {
        case '+':
            result = a + b;
            console.log(`${a} + ${b} = ${result}`);
            break;

        case '-':
            result = a - b;
            console.log(`${a} - ${b} = ${result}`);
            break;

        case '*':
            result = a * b;
            console.log(`${a} * ${b} = ${result}`);
            break;

        case '/':
            result = a / b;
            console.log(`${a} / ${b} = ${result}`);
            break;

        default:
            console.log('Invalid operator');
            break;
    }

})