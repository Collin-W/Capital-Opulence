//TO-DO removed migrated code, split expense and calc js to separate files
let expenseArray = [];

const homepage = $('#homepage')

//this object for HTML sections only
let section = {
   // login: $('#login-signup'), // removed due to page splitting
    expenseForm: $('#expense-form-fieldset'),
    calculator: $('#calculator')
}

//DEFAULT html state
function defaultState() {
    $.map(section, (section) => {
        section.hide()
    });
};

// removed section due to login-split, will handle with handlebars
/* RENDERS or HIDES html on BUTTON CLICKS
$('#start-login-signup').click(() => {
    homepage.hide();
    section.login.show();
});
*/


$('#start-expense-tracker').click(() => {
    homepage.hide();
    section.expenseForm.show();
});

$('#start-calculator').click(() => {
    homepage.hide();
    section.calculator.show();
});

$('.go-back-home').click(() => {
    defaultState();
    homepage.show();
})

// listens to the expense form only
$("#expense-form-add-btn").click((evt) => {
    console.log('add button')
    let i = 0;

    evt.preventDefault();

    //this will render the html for a new row of form elements on an add button click
    let inputDate = $("<input>", {
        class: "expense-input expense-date",
        type: "date",
        placeholder: "Date Of Expense"
    });
    let inputGainLoss = $("<input>", {
        class: "expense-input expense-gain-loss",
        type: "boolean",
        placeholder: "Gain/Loss",
        list: "gain-loss"
    });
    let inputDescription = $("<input>", {
        class: "expense-input expense-description",
        type: "text",
        placeholder: "Description Of Expense"
    });
    let inputAmount = $("<input>", {
        class: "expense-input expense-amount",
        type: "number",
        placeholder: "Amount - Or +"
    });
    
    let deleteBtn = $("<button>", {
        text: "X",
        onclick: "Delete(this);"
    })
    let newInputRow = document.createElement('li');

    let inputDataAtt = $('li').data('row', i++)
    

    $(newInputRow).append(inputDate, inputGainLoss, inputDescription, inputAmount, deleteBtn, inputDataAtt)

    $('#expense-list').append(newInputRow)
});

// COLLECTS expense form data and pushes it into an array.
//for chart js I am going to start with just the spending data
$('#submit-expense-row').click(() => {


    $(".expense-input").each(function () {
        let userInputs = $(this).val().trim();
        expenseArray.push(userInputs);
    
        console.log(expenseArray + ' expense array');
    });
});







//LOGIN/SIGNUP SCRIPT- moved to own file
/*
// $('#').val().trim()
//login
let loginUsername = $('#username-login').val().trim()
let loginPassword = $('#password-login').val().trim()

$('#login-btn').click( async (evt) => {

    evt.preventDefault();

    if (loginUsername && loginPassword) {


        const res = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                loginUsername,
                loginPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });


        if (res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }

    }
    //test
    alert('enter all inputs to login')
    console.log('not all login inputs entered')
    //end test

    //this needs to handle and notify user about input verification

})
*/

//signup - moved to own file
/*
let signupFirstName = $('#first-name-signup').val().trim()
let signupLastName = $('#last-name-signup').val().trim()
let signupUsername = $('#username-signup').val().trim()
let signupEmail = $('#email-signup').val().trim()
let signupPassword = $('#password-signup').val().trim()

$('#signup-btn').click( async (evt) => {

    evt.preventDefault();

    if (signupFirstName && signupLastName && signupUsername && signupEmail && signupPassword) {

        const res = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                signupUsername,
                signupEmail,
                signupPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.ok) {
            console.log('signup was successful');
        } else {
            alert(res.statusText);
        }

    }
    //test
    alert('enter all inputs to signup')
    console.log('not all sign up inputs entered')
    //end test

    //this needs to handle and notify user about input verification

})
*/

//function CALLS
defaultState();