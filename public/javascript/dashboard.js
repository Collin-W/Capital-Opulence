// delete button handler when delete button is clicked delete a expense form
async function deleteExpFormHandler (evt){
  console.log('hello')
  evt.preventDefault()

  //get the furtherest out parent element
  const thisExpFrom = evt.currentTarget.parentNode.parentNode
  //get the href link from anchor tag
  const hrefLink = thisExpFrom.querySelector(`a`).href
  //split the hreflink and get the number at the end of it
  const breakdownHref = hrefLink.split('/').slice(-1)
  //then convert it to a int
  const expFormId = parseInt(breakdownHref[0])

  //Delete request
  const res = await fetch(`/api/expform/${expFormId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  //if response ok then reload the page else alert what went wrong
  if(res.ok){
    document.location.reload()
  } else {
    alert(res.statusText)
  }
}

// listener on the from delete btn
$('#form-delete-btn').click(deleteExpFormHandler)