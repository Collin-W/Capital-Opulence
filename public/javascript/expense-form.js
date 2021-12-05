let expenseArray = [];

//two special counters, the del counter is specifically for the delete button on each rendered rows
let i = 0;
let del = 0;

// listens to the expense form only
$("#expense-form-add-btn").click((evt) => {

    let gain_loss = $('#expense-gain-loss').val().trim()
    let amount = $('#expense-amount').val().trim()

    evt.preventDefault();

    //if a user chooses "Loss" the number they enter into the amount input will get converted to negative for the chart
    if (gain_loss === 'Loss') amount = -Math.abs(amount);

    //this object of data get pushed to an array for the database
    let rowObj = {
        date: $('#expense-date').val().trim(),
        gain_loss: gain_loss,
        description: $('#expense-description').val().trim(),
        amount: amount,
    }

    expenseArray.push(rowObj);

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
        value: rowObj.gain_loss
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
        class: 'delete-btn btn-styles',
        value: del++
    });

    //this list item is for the empty <ul> element in the html
    let newInputRow = document.createElement('li');

    //appending to page
    $(newInputRow).append(inputDate, inputGainLoss, inputDescription, inputAmount, deleteBtn)

    $('#expense-row-list').append(newInputRow)

    //resets main input row on top 
    $('#main-expense-row :input').val('')
});

//reset button listener- resets main input row on top
$('#reset-row-btn').click((evt) => {
    evt.preventDefault();
    $('#main-expense-row :input').val('')
})

// ".on('click'," is needed for dynamically created elements 
// this is specifically listening on the form for the delete button
$('#expense-row-list').on('click', ".delete-btn", function (evt) {
    evt.preventDefault();

    let btnIndex = this.value

    //listens to the delete button the user chose, then deletes the corresponding parent element  //this is for the rendered html
    $(this.parentNode).remove()

    //this deletes the actual data from the array 
    expenseArray.splice(btnIndex, 1)
})

// submit rendered rows button on click listener 2 of 2- chart.js/post request -this sends the expenseArray data to the database & renders the chart
$('#submit-expense-row').click(async (evt) => {
    evt.preventDefault()
    const res = await fetch('/api/expform', {
        method: 'post',
        body: JSON.stringify({
            expenseArray,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        chartJS()
    } else {
        alert(res.statusText)
    }
})

function chartJS() {

    //isolate data from form to use in the graph
    dateArray = expenseArray.map((x) => {
        return x.date
    })
    intArray = expenseArray.map((x) => {
        return x.amount
    })

    //chart data
    const data = {
        labels: dateArray,
        datasets: [{
            label: 'Daily Expenses',
            backgroundColor: 'rgb(255,122,0)',
            borderColor: 'rgb(255, 99, 132)',
            data: intArray,
        }]
    };

    //just info on the graph being rendered
    const config = {
        type: 'bar',
        data: data,
        options: {}
    };

    // creation of the new chart
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
