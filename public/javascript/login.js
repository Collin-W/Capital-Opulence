// Signup handler when someone signs up get data then create a new users and log
// them in
async function signUpHandler(evt){
    evt.preventDefault();

    // get first_name from input form
    let first_name= $('#first-name-signup').val().trim()
    // get last_name from input form
    let last_name = $('#last-name-signup').val().trim()
    // get email from input form
    let email = $('#email-signup').val().trim()
    // get password from input form
    let password = $('#password-signup').val().trim()

    // if all the input is entered then create a user
    // else alert them that something is wrong
    if (first_name && last_name && email && password) {

        // fetch call to create a new user
        const res = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({
               first_name,
               last_name,
               email,
               password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        // if response is ok then go back to homepage
        // else alert user something went bad
        if (res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }

    } else {
        alert('enter all inputs to signup')
    }
}

async function loginHandler(evt){
    evt.preventDefault();

     // get email from input form
    let email = $('#email-login').val().trim()
    // get password from input form
    let password = $('#password-login').val().trim()

    // if both email and password are given login a user
    // else alert user missing input
    if (email && password) {

        // fetch to login user
        const res = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // if response is okay then go back to the homepage
        // else alert the user something went bad
        if (res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }

    }else{
    alert('enter all inputs to login')
    }
}


// Listener for the login button
$('#login-btn').click( loginHandler)



// Listener for the signup button
$('#signup-btn').click(signUpHandler)