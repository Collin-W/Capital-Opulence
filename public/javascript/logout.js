//  logout handler function that will logout a user
 async function logOutHandler(evt) {
  evt.preventDefault()

  // call fetch route to logout or destory current session
  const res = await fetch('/api/users/logout', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // if response ok then go to homepage else alert what is wrong
  if (res.ok) {
      document.location.replace('/');
  } else {
      alert(res.statusText);
  }
 }

//  listener for the logout btn
$('#logout-btn').click(logOutHandler)