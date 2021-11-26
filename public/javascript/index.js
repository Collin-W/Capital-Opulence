
let expenseArray = [];

$("#expense-form-add-btn").click(() => {
    console.log('add button')

    evt.preventDefault();

    let inputDate = $("<input>", {class: "expense-input expense-date", type: "date", placeholder:"Date Of Expense"});
    let inputGainLoss = $("<input>", {class: "expense-input expense-gain-loss", type: "boolean", placeholder:"Gain/Loss",  list:"gain-loss"});
    let inputDescription = $("<input>", {class: "expense-input expense-description", type: "text", placeholder:"Description Of Expense"});
    let inputAmount = $("<input>", {class: "expense-input expense-amount", type: "number", placeholder:"Amount - Or +"});
    let newInputRow = document.createElement('div');

     $(newInputRow).append(inputDate, inputGainLoss, inputDescription, inputAmount)

     $('#expense-form').append(newInputRow)
})

// collect expense form data
$(".expense-input").each(function () {
    let userInputs = $(this).val().trim();
    expenseArray.push(userInputs);

    console.log(expenseArray);
})
