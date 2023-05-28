$(document).ready(() => {
    let comments = [];

  $("#commentsBtn").click(() => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments",
      type: 'get',
      success: (data) => {comments = data},
      async: false
    })
    draw();
  })

  function draw() {
    let b =  comments.map(commentItem => `<div class="col-md-3">
      <div class="card my-5">
        <div class="card-header">
        <div class="id-group d-flex justify-content-between">
        <h2 class="fs-5"><span class="text-danger">Post ID:</span>  ${commentItem.postId}</h2>
        <h2 class="fs-5"><span class="text-danger"> ID:</span> ${commentItem.id}</h2>
        </div>
          <h3 class="fs-5"><span class="text-danger">Name:</span> <span style="font-size: 16px">${commentItem.name}</span></h3>
          <h3 class="fs-5"><span class="text-danger">Email:</span> <span style="font-size: 16px">${commentItem.email}</span></h3>
        </div>
        <div class="card-body">
        <p style="font-size:14px;">${commentItem.body}</p>
        </div>
      </div>
    </div>`)
    $('#commentRow').html(b);
  }
})