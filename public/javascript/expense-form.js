let expenseArray = [];
let i = 0;
let del = 0;

// listens to the expense form only
$("#expense-form-add-btn").click((evt) => {
  //  console.log('add button')

    let gain_loss = $('#expense-gain-loss').val().trim()
    let amount = $('#expense-amount').val().trim()

    evt.preventDefault();

    if (gain_loss === 'Loss') {
        amount = -Math.abs(amount);
      //  console.log(amount)

      
    } else {
        console.log('Gain')
    }


    let rowObj = {
        date: $('#expense-date').val().trim(),
        gain_loss: gain_loss,
        description: $('#expense-description').val().trim(),
        amount: amount,
    }

    console.log(JSON.stringify(rowObj) + "object " + i++)

    expenseArray.push(rowObj)

   // console.log(expenseArray)

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
        // onclick: "Delete(this);",
        class: 'delete-btn btn-styles',
        value: del++

    })

    let newInputRow = document.createElement('li');

    // let inputDataAtt = jQuery.data(newInputRow, 'inputRow', 'row ' + i++)

    $(newInputRow).append(inputDate, inputGainLoss, inputDescription, inputAmount, deleteBtn)
   // console.log(newInputRow)

    $('#expense-row-list').append(newInputRow)

    //resets main input row on top 
    $('#main-expense-row :input').val('')
});

$('#expense-row-list').on('click', ".delete-btn", function (evt) {

    evt.preventDefault();

    $(this.parentNode).remove()

    let btnIndex = this.value
    let test = btnIndex

    // console.log(btnIndex + " btn counter")

    // console.log(expenseArray + " expense array")

    // console.log(test + " test")


    expenseArray.splice(test, 1)
})

//chart.js/post request
$('#submit-expense-row').click( async(evt) => {
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

    if(res.ok){
        chartJS()
    }else {
        alert(res.statusText)
    }
})



function chartJS () {
    dateArray = expenseArray.map((x) => {
        return x.date
    })

    intArray = expenseArray.map((x) => {
        return x.amount
    })

    const labels = dateArray


    const data = {
        labels: labels,
        datasets: [{
            label: 'Daily Expenses',
            backgroundColor: 'rgb(255,122,0)',
            borderColor: 'rgb(255, 99, 132)',
            // data is money
            data: intArray,
        }]
    };


    const config = {
        type: 'bar',
        data: data,
        options: {}
    };


    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}