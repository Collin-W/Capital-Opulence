let expenseArray = [];
let i = 0;
let del = 0;


// listens to the expense form only
$("#expense-form-add-btn").click((evt) => {
    console.log('add button')

    let gainLoss = $('#expense-gain-loss').val().trim()
    let amount = $('#expense-amount').val().trim()

    evt.preventDefault();

    if (gainLoss === 'Loss') {
        amount = -Math.abs(amount);
        console.log(amount)

        for(i = 0; i > expenseArray.length; i++) {
        //expenseArray
        }

    } else {
        console.log('Gain')
    }


    let rowObj = {
        date: $('#expense-date').val().trim(),
        gainLoss: gainLoss,
        description: $('#expense-description').val().trim(),
        amount: amount
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
        type: 'button',
        // onclick: "Delete(this);",
        class: 'delete-btn btn-styles',
        value: del++

    })

    let newInputRow = document.createElement('li');

    // let inputDataAtt = jQuery.data(newInputRow, 'inputRow', 'row ' + i++)

    $(newInputRow).append(inputDate, inputGainLoss, inputDescription, inputAmount, deleteBtn)
    console.log(newInputRow)

    $('#expense-row-list').append(newInputRow)

    //resets main input row on top 
    $('#main-expense-row :input').val('')
});

$('#expense-row-list').on('click', ".delete-btn", function (evt) {

    evt.preventDefault();

    $(this.parentNode).remove()

    let btnIndex = this.value
    let test = btnIndex

    console.log(btnIndex + " btn counter")

    console.log(expenseArray + " expense array")

    console.log(test + " test")


    expenseArray.splice(test, 1)
})



// `<p>
//         Total gains: ${}
//         Total loss: ${}     
// </p>
// `


