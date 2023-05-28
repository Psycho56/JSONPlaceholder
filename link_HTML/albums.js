$(document).ready(() => {
    let albums = [];

  $("#albumsBtn").click(() => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/albums",
      type: 'get',
      success: (data) => {albums = data},
      async: false
    })
    draw();
  })

  function draw() {
    let album =  albums.map(albumItem => `<div class="col-md-3">
      <div class="card my-5" style="height:135px;">
        <div class="card-header">
        <div class="id-group d-flex justify-content-between">
        <h3><strong class="text-danger">User id:</strong>  ${albumItem.userId}</h3>
        <h3><strong class="text-danger">Id:</strong> ${albumItem.id}</h3>
        </div>
        </div>
        <div class="card-body">
        <p><strong class="text-success fs-5">Title:</strong> ${albumItem.title}</p>
        </div>
      </div>
    </div>`)
    $('#albumsRow').html(album);
  }
})