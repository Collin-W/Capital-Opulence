// array to hold all the expense form data
let expenseArray = [];

//two special counters, the del counter is specifically for the delete button on each rendered rows
let i = 0;
let del = 0;

function addFormHandler (evt){
    evt.preventDefault();

    //this object of data get pushed to an array for the database
    let rowObj = {
        date: $('#expense-date').val().trim(),
        gain_loss: $('#expense-gain-loss').val().trim(),
        description: $('#expense-description').val().trim(),
        amount: $('#expense-amount').val().trim()
    }

    //if a user chooses "Loss" the number they enter into the amount input will get converted to negative for the chart
    if (rowObj.gain_loss === 'Loss') {rowObj.amount = -Math.abs(rowObj.amount);} 


    // get input values
    let rowObjEntries = Object.values(rowObj)
    
    // if input values include a empty string then do not add row and alery user
    // there was missing data
    if(!rowObjEntries.includes('')){

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
    }else{
        alert('Missing data. Please try again')
    }
        
}


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


// submit form handler
// this async function will create all of the expense forms with a post call to
// the back end then it checks to make sure the response is ok if it is then it
// will call a secondary function to create the chart on the page and also
// display total losses and gains
async function submitFormHandler(evt){
    evt.preventDefault()
    // post fetch call
    const res = await fetch('/api/expform', {
        method: 'post',
        body: JSON.stringify({
            expenseArray,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // if ok then call a funtion 
    // else alert what went wrong to user
    if(res.ok){
        chartAndDisplay()
    }else {
        alert(res.statusText)
    }
}
// call chart function and gain/loss function
function chartAndDisplay () {
    chartjs()
    displayGainLosses()
}

// chart function this will create a chart with all of the gains/losses entered
// in the expense form
function chartjs(){

    //isolate data from form to use in the graph
    dateArray = expenseArray.map((x) => { return x.date })
    intArray = expenseArray.map((x) => { return x.amount })

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

// display function this will display all of the gains/losses on the side of the
// chart
function displayGainLosses(){
    // declaring vars for front end UI
    let totalLoss;
    let totalGains;

    //on row submit- renders the chart and hides the form- a nice UI transition
    $(".exp-div-hide").hide(1000)

    //isolating specific key value pairs from my main array
    ifArray = expenseArray.map((x) => {
        return {
            gainLoss: x.gain_loss,
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

    if(totalGains === undefined){
        totalGains = 0
    }
    if(totalLoss === undefined){
        totalLoss = 0
    }
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
}

// listens to the expense form only
$("#expense-form-add-btn").click(addFormHandler);

 // submit button listener when clicked call submit form handler
 $('#submit-expense-row').click(submitFormHandler)