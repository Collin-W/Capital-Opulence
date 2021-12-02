//login
$('#login-btn').click( async (evt) => {
    evt.preventDefault();

    let email = $('#email-login').val().trim()
    let password = $('#password-login').val().trim()


    if (email && password) {


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


        if (res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }

    }else{
    alert('enter all inputs to login')
    console.log('not all login inputs entered')
    }

})



//signup
$('#signup-btn').click( async (evt) => {

    evt.preventDefault();

    let first_name= $('#first-name-signup').val().trim()
    let last_name = $('#last-name-signup').val().trim()
    let email = $('#email-signup').val().trim()
    let password = $('#password-signup').val().trim()


    console.log(first_name,
        last_name,
        email,
        password)
    

    if (first_name && last_name && email && password) {

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
        if (res.ok) {
            console.log('signup was successful');
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }

    } else {
        alert('enter all inputs to signup')
        console.log('not all sign up inputs entered')
    }
 
})