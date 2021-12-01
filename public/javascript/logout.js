<<<<<<< HEAD
$('#logout-btn').click( async (evt) => {
  evt.preventDefault()

  const res = await fetch('/api/users/logout', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (res.ok) {
      document.location.replace('/');
  } else {
      alert(res.statusText);
  }

})
=======
async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);
>>>>>>> f39a06ef094c28e0d9f8566a0dc35f88a8b47798
