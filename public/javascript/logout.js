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
