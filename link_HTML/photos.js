$(document).ready(() => {
    let photos = [];

  $("#photoBtn").click(() => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/photos",
      type: 'get',
      success: (data) => {photos = data},
      async: false
    })
    draw();
  })

  function draw() {
    let a =  photos.map(item => `<div class="col-md-3">
      <div class="card my-5" style="height:430px;">
        <div class="card-header">
          <h3 class="fs-5">${item.title}</h3>
        </div>
        <div class="card-body">
        <img width="100%" src="${item.url}" alt="no"/>
        </div>
      </div>
    </div>`)
    $('#row').html(a);
  }
})
