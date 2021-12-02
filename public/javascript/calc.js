//calculations
let gainArray = [];
let lossArray = [];
let operator = '';
let a = [];
let b = [];
let calcWindow = $('#calculator-window')

$('#submit-expense-row').click(() => {

    let totalLoss;
    let totalGains;
   
    //on submit renders the chart and hides the form
    //$(".exp-div-hide").effect('slide', {direction: 'right', duration: 1000});
    $(".exp-div-hide").hide(1000)

    ifArray = expenseArray.map((x) => {
        return {
            gainLoss: x.gainLoss,
            amount: x.amount
        }
    });

    $(ifArray).each((i) => {

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

    let pEl = $("<p>", {
        class: "totalGainLoss-p-tag",
        type: "text",
        text: `Total gains: ${totalGains} Total loss: ${totalLoss}`
    });

    $('#expense-chart').append(pEl)

})

//calculator
$('.calc-btn').click(function () {

    calcWindow.val('')

    if (operator === '') {

        let btnNum = $(this).val()

        console.log(btnNum)

        a.push(btnNum)

        let windowVal1 = a.join('')

        calcWindow.val(windowVal1)

       // console.log(a + " a variable")

    } else {

        let btnNum = $(this).val()

        b.push(btnNum)

        let windowVal3 = b.join('')

        calcWindow.val(windowVal3)

        //console.log(b + " b var")
    }

})

$('.operator').click(function () {

    operator = $(this).val()

    let windowVal2 = operator

    calcWindow.val(windowVal2)

    //console.log(operator + " operator")
});


$('#calculate').click(() => {

    let num1 = a.reduce((x, y) => x + y);
    let num2 = b.reduce((x, y) => x + y);

    // console.log(num1)
    // console.log(num2)
    // console.log(operator)

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;

            calcWindow.val(result)
            console.log(`${num1} + ${num2} = ${result}`);
            break;

        case '-':
            result = num1 - num2;

            calcWindow.val(result)
            console.log(`${num1} - ${num2} = ${result}`);
            break;

        case '*':
            result = num1 * num2;

            calcWindow.val(result)
            console.log(`${num1} * ${num2} = ${result}`);
            break;

        case '/':
            result = num1 / num2;

            calcWindow.val(result)
            console.log(`${num1} / ${num2} = ${result}`);
            break;

        default:
            console.log('Invalid operator');
    }

    //make this a global object??
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

$('.clear').click(() => {
    a = []
    b = []
    operator = ''
    calcWindow.val('')
})