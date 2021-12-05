
//  update handler to send get data and send it to the data base to update a
//  expense form
async function updateHandler(evt){
  evt.preventDefault()

  // get id of form from the query
  const expFromId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ]

  // get the date from the input form
  const date = $('#expense-date').val().trim()
  //  get the gain or loss from the input form
  const gain_loss = $('#expense-gain-loss').val().trim()
  // get the description from the input form
  const description = $('#expense-description').val().trim()
  // get the amount from the input form
  const amount =  $('#expense-amount').val().trim()

  // update the expense from with fetch call
  const res = await fetch(`/api/expform/${expFromId}`, {
    method: 'put',
    body: JSON.stringify({
      date,
      gain_loss,
      description,
      amount
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // if the response is ok then go back to the dashboard if not then alert what
  // went wrong
  if(res.ok){
    document.location.replace('/dashboard')
  }else{
    alert(res.statusText)
  }
  
}

// listener for the button to update expense form
$("#update-btn").click(updateHandler)