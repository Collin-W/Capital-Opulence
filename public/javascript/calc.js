let gainArray = [];
let lossArray = [];

// these are just for the calculator
let operator = '';
let a = [];
let b = [];


// function reset() {
//     a = []
//     b = []
//     operator = ' '
   
// }

//this var is for the rendered input
let calcWindow = $('#calculator-window')

// submit rendered rows button on click listener 1 of 2- pushing each row object into an array for the database and calculations on front end
$('#submit-expense-row').click(() => {

    // declaring vars for front end UI
    let totalLoss;
    let totalGains;

    //on row submit- renders the chart and hides the form- a nice UI transition
    $(".exp-div-hide").hide(1000)

    //isolating specific key value pairs from my main array
    ifArray = expenseArray.map((x) => {
        return {
            gainLoss: x.gainLoss,
            amount: x.amount
        }
    });

    // named ifArray because the array separates the two conditions of the gainLoss key
    //this ifArray has ONLY a gain/loss string and its corresponding positive or negative integer
    $(ifArray).each((i) => {

        // ifArray becomes two separated arrays 
        if (ifArray[i].gainLoss === "Gain") {

            gainArray.push(parseInt(ifArray[i].amount));

            totalGains = gainArray.reduce((a, b) => a + b, 0);

            console.log("your total gains are " + totalGains);

        } else {

            lossArray.push(parseInt(ifArray[i].amount));

            totalLoss = lossArray.reduce((a, b) => a + b, 0);

            console.log("your total loss are " + totalLoss);
        }
    });


    // renders a the combined gain and loss ints to the page for the user, directly next to the rendered bar graph
    //this is causing a bug still
    let pEl = $("<p>", {
        class: "totalGainLoss-p-tag",
        type: "text",
        text: `
        Total gains: ${'$' + totalGains}
        Total loss: ${'$' + totalLoss}
        `
    });

    //appends to page
    $('#expense-chart').append(pEl)

})

//listens for all calc button clicks 
$('.calc-btn').click(function () {

    //reset calcWindow
    calcWindow.val('')

    if (operator === '') {

        let btnNum = $(this).val()

        a.push(btnNum)

        let windowVal1 = a.join('')

        calcWindow.val(windowVal1)
    } else {

        let btnNum = $(this).val()

        b.push(btnNum)

        let windowVal3 = b.join('')

        calcWindow.val(windowVal3)

    }
});

$('.operator').click(function () {

    operator = $(this).val()

    let windowVal2 = operator

    calcWindow.val(windowVal2)

});


$('#calculate').click(() => {

    let num1 = a.reduce((x, y) => x + y);
    let num2 = b.reduce((x, y) => x + y);

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;

            calcWindow.val(result)

            break;

        case '-':
            result = num1 - num2;

            calcWindow.val(result)

            break;

        case '*':
            result = num1 * num2;

            calcWindow.val(result)

            break;

        case '/':
            result = num1 / num2;

            calcWindow.val(result)

            break;

        default:
            console.log('Invalid operator');
    }

    //reset calcWindow and arrays for new calculations
    a = []
    b = []
    operator = ''
})


$('.delete').click(function () {

    if (operator === '') {

        a.pop()
        calcWindow.val(a.join(''))
    } else {

        //add operator delete
        b.pop()
        calcWindow.val(b.join(''))
    }
})

//clear btn
$('.clear').click(() => {
    a = []
    b = []
    operator = ' '
    calcWindow.val('')
    // reset()
    // calcWindow.val('')
})

