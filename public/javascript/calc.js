//calculations
let gainArray = [];
let lossArray = [];
let operator = '';
let a = [];
let b = [];
let calcWindow = $('#calculator-window')

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

$('.calc-btn').click(function () {

    calcWindow.val('')



    if (operator === '') {

        let btnNum = $(this).val()

        console.log(btnNum)

        a.push(btnNum)

        let windowVal1 = a.join('')

        calcWindow.val(windowVal1)

        console.log(a + " a variable")

    } else {

        let btnNum = $(this).val()

        b.push(btnNum)

        let windowVal3 = b.join('')

        calcWindow.val(windowVal3)

        console.log(b + " b var")
    }

})

$('.operator').click(function () {

    operator = $(this).val()

    let windowVal2 = operator

    calcWindow.val(windowVal2)


    console.log(operator + " operator")
});


$('#calculate').click(() => {

    let num1 = a.reduce((x, y) => x + y);
    let num2 = b.reduce((x, y) => x + y);

    console.log(num1)
    console.log(num2)
    console.log(operator)

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

    //make this a golbal object??
    a = []
    b = []
    operator = ''

})



$('.delete').click(function () {

    if (operator === '') {

        a.pop()
        calcWindow.val(a.join(''))
    } else {
        
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