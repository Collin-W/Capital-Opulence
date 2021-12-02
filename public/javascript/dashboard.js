async function deletePostHandler (event){
  event.preventDefault()

  //get the furtherest out parent element
  const thisPost = event.currentTarget.parentNode.parentNode
  //get the href link from anchor tag
  const hrefLink = thisPost.querySelector(`a`).href
  //split the hreflink and get the number at the end of it
  const breakdownHref = hrefLink.split('/').slice(-1)
  //then convert it to a int
  const postId =  parseInt(breakdownHref[0])
  // //Delete request
  const res = await fetch(`/api/expform/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  // //if response ok then reload the page else alert what went wrong
  if(res.ok){
    document.location.reload()
  } else {
    alert(res.statusText)
  }
}


$('#form-delete-btn').click(deletePostHandler)