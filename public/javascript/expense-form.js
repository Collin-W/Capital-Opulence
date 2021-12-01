let expenseArray = [

    {
        date: '2021-01-01',
        gainLoss: 'Loss',
        description: 'car payment',
        amount: '300'
    },
    {
        date: '2021-01-02',
        gainLoss: 'Gain',
        description: 'fast food',
        amount: '15'
    },
    {
        date: '2021-01-03',
        gainLoss: 'Loss',
        description: 'new shoes',
        amount: '75'
    },
    {
        date: '2021-01-04',
        gainLoss: 'Loss',
        description: 'bill',
        amount: '25'
    },
    {
        date: '2021-01-05',
        gainLoss: 'Loss',
        description: 'bought ticket',
        amount: '5'
    }

];
let i = 0;


// listens to the expense form only
$("#expense-form-add-btn").click((evt) => {
    console.log('add button')

    evt.preventDefault();


    let rowObj = {
        date: $('#expense-date').val().trim(),
        gainLoss: $('#expense-gain-loss').val().trim(),
        description: $('#expense-description').val().trim(),
        amount: $('#expense-amount').val().trim()

    }

    console.log(JSON.stringify(rowObj) + "object " + i++)

    expenseArray.push(rowObj)

    console.log(expenseArray)

    //this will render the html for a new row of form elements on an add button click
    let inputDate = $("<input>", {
        class: "expense-input expense-date",
        type: "date",
        placeholder: "Date Of Expense",
        value: rowObj.date
    });
    let inputGainLoss = $("<input>", {
        class: "expense-input expense-gain-loss",
        type: "boolean",
        placeholder: "Gain/Loss",
        list: "gain-loss",
        value: rowObj.gainLoss
    });
    let inputDescription = $("<input>", {
        class: "expense-input expense-description",
        type: "text",
        placeholder: "Description Of Expense",
        value: rowObj.description
    });
    let inputAmount = $("<input>", {
        class: "expense-input expense-amount",
        type: "number",
        placeholder: "Amount - Or +",
        value: rowObj.amount
    });

    let deleteBtn = $("<button>", {
        text: "X",
        onclick: "Delete(this);",

    })

    let newInputRow = document.createElement('li');

    let inputDataAtt = jQuery.data(newInputRow, 'inputRow', 'row ' + i++)

    $(newInputRow).append(inputDate, inputGainLoss, inputDescription, inputAmount, deleteBtn, inputDataAtt)
    console.log(newInputRow)

    $('#expense-row-list').append(newInputRow)

    //resets main input row on top 
    $('#main-expense-row :input').val('')
});


// COLLECTS expense form data and pushes it into an array.
//for chart js I am going to start with just the spending data
// $('#submit-expense-row').click(() => {

//     expenseArray


// });