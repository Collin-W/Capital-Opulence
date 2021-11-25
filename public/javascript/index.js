
let expenseArray = [];

// collect expense form data
$(".expense-input").each(function () {
    let userInputs = $(this).val().trim();
    expenseArray.push(userInputs);

    console.log(expenseArray);
})

$("#expense-form-add-btn").click(() => {

    let inputDate = document.createElement('input');
    let inputGainLoss = document.createElement('input');
    let inputDescription = document.createElement('input');
    let inputAmount = document.createElement('input');

    inputDate.setAttribute('class', 'expense-input expense-date');
    inputGainLoss.setAttribute('class', 'expense-input expense-gain-loss');
    inputDescription.setAttribute('class', 'expense-input expense-description');
    inputAmount.setAttribute('class', 'expense-input expense-amount');

    inputDate.setAttribute('placeholder', "Date Of Expense")
    inputGainLoss.setAttribute('placeholder', "Gain/Loss")
    inputDescription.setAttribute('placeholder', "Description Of Expense")
    inputAmount.setAttribute('placeholder', "Amount - Or +")

    //this jQuery might work and will make code more dry

    // var inputDate = $("<input>", {class: "expense-input expense-date", type: "date", placeholder:"Date Of Expense"});
    // var inputGainLoss = $("<input>", {class: "expense-input expense-gain-loss", type: "boolean", placeholder:"Gain/Loss"});
    // var inputDescription = $("<input>", {class: "expense-input expense-description", type: "text", placeholder:"Description Of Expense"});
    // var inputAmount = $("<input>", {class: "expense-input expense-amount", type: "number", placeholder:"Amount - Or +"});



     //let newInputRow = 
})