async function updateHandler(event){

  const expFromId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ]

  const date = $('#expense-date').val().trim()
  const gain_loss = $('#expense-gain-loss').val().trim()
  const description = $('#expense-description').val().trim()
  const amount =  $('#expense-amount').val().trim()

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

  if(res.ok){
    document.location.replace('/dashboard')
  }else{
    alert(res.statusText)
  }
  
}


$("#update-btn").click(updateHandler)