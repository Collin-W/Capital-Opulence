//LOGIN/SIGNUP SCRIPT- might move to its own file

// $('#').val().trim()
//login
let loginEmail = $('#email-login').val().trim()
let loginPassword = $('#password-login').val().trim()

$('#login-btn').click( async (evt) => {

    evt.preventDefault();

    if (loginEmail && loginPassword) {


        const res = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                loginEmail,
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

//signup

let signupFirstName = $('#first-name-signup').val().trim()
let signupLastName = $('#last-name-signup').val().trim()
let signupEmail = $('#email-signup').val().trim()
let signupPassword = $('#password-signup').val().trim()

$('#signup-btn').click( async (evt) => {

    evt.preventDefault();

    if (signupFirstName && signupLastName && signupEmail && signupPassword) {

        const res = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
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