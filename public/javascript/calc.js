let gainArray = [];
let lossArray = [];

// these are just for the calculator
let operator = '';
let a = [];
let b = [];

//this var is for the rendered input
let calcWindow = $('#calculator-window')

//listens for all calc button clicks 
$('.calc-btn').click(function () {

    //reset calcWindow
    calcWindow.val('')

    if (operator === '') {

        let btnNum = $(this).val()

        console.log(btnNum)

        a.push(btnNum)

        let windowVal1 = a.join('')

        calcWindow.val(windowVal1)


    } else {

        let btnNum = $(this).val()

        b.push(btnNum)

        let windowVal3 = b.join('')

        calcWindow.val(windowVal3)

    }

})

$('.operator').click(function () {

    operator = $(this).val()

    let windowVal2 = operator

    calcWindow.val(windowVal2)

});


$('#calculate').click(() => {

    let num1 = a.reduce((x, y) => x + y);
    let num2 = b.reduce((x, y) => x + y);

    num1 = parseInt(num1)
    num2 = parseInt(num2)

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
})