const homepage = $('#homepage')

//this object for HTML sections only
let section = {
    login: $('#login-signup'),
    expenseForm: $('#expense-form-fieldset'),
    calculator: $('#calculator'),
    expenseChart: $('#expense-chart'),
    goBackBtn: $('.go-back-home')
}

//DEFAULT html state
function defaultState() {
    $.map(section, (section) => {
        section.hide()
    });
};

//RENDERS or HIDES html on BUTTON CLICKS
$('#start-login-signup').click(() => {
    homepage.hide();
    section.login.show();
});

$('#start-expense-tracker').click(() => {
    homepage.hide();
    section.expenseForm.show();
    section.calculator.show();
    section.goBackBtn.show();
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