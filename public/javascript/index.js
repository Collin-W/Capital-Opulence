//TO-DO removed migrated code, split expense and calc js to separate files
let expenseArray = [];
let i = 0;

const homepage = $('#homepage')

//this object for HTML sections only
let section = {
   // login: $('#login-signup'), // removed due to page splitting
    expenseForm: $('#expense-form-fieldset'),
    calculator: $('#calculator'),
    expenseChart: $('#expense-chart')
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

$('#submit-expense-row').click(() => {
    section.expenseChart.show()
})





//function CALLS
defaultState();