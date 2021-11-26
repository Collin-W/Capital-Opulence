let expenseArray = [];

let section = {
    login: $('#login-signup'),
    expenseForm: $('#expense-form-fieldset'),
    calculator: $('#calculator')
}

//$('').hide();
//$('').show();

//default html elements
$.map(section, (section) =>  {
section.hide()
}) 

//renders or hides html on button clicks
$('#start-login-signup').click(() => {
    $('#homepage').hide();
    $('#login-signup').show();
});

$('#start-expense-tracker').click(() => {
    $('#homepage').hide();
    form.show();
});

$('#start-calculator').click(() => {
    $('#homepage').hide();
    $('#calculator').show();
});

$('.go-back-home').click(() => {
    $('#homepage').show();
    form.hide();
    $('#login-signup').hide();
    $('#calculator').hide();

    // add each new section to this 
})

$("#expense-form-add-btn").click((evt) => {
    console.log('add button')

    evt.preventDefault();

    //this will render the html for a new row of form elements on an add button click
    let inputDate = $("<input>", {class: "expense-input expense-date", type: "date", placeholder:"Date Of Expense"});
    let inputGainLoss = $("<input>", {class: "expense-input expense-gain-loss", type: "boolean", placeholder:"Gain/Loss",  list:"gain-loss"});
    let inputDescription = $("<input>", {class: "expense-input expense-description", type: "text", placeholder:"Description Of Expense"});
    let inputAmount = $("<input>", {class: "expense-input expense-amount", type: "number", placeholder:"Amount - Or +"});
    let newInputRow = document.createElement('div');

     $(newInputRow).append(inputDate, inputGainLoss, inputDescription, inputAmount)

     $('#expense-form').append(newInputRow)
})

// collect expense form data and pushes it into an array.
$(".expense-input").each(function () {
    let userInputs = $(this).val().trim();
    expenseArray.push(userInputs);

    console.log(expenseArray);
})
