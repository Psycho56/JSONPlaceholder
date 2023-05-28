$(document).ready(() => {
    let users = [];

  $("#usersBtn").click(() => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      type: 'get',
      success: (data) => {users = data},
      async: false
    })
    draw();
  })

  function draw() {
    let g =  users.map(usersItem => `<div class="col-md-3">
      <div class="card my-5">
        <div class="card-header" style="background-color:rgb(206, 221, 219);">
          <h4>Id number is: ${usersItem.id}</h4>
          <h5>Name: ${usersItem.name}</h5>
          <p class="text-success"><span class="text-danger">Contact:</span> ${usersItem.email}</p>
        </div>
        <div class="card-body">
        Address:
        <select class="mx-2" style="border:1px double black; border-radius:3px;">
         <option value="">${usersItem.address.street}</option>
         <option value="">${usersItem.address.suite}</option>
         <option value="">${usersItem.address.city}</option>
         <option value="">${usersItem.address.zipcode}</option>
      </select>
        </div>
        <div class="geo-group d-flex">
          <p class="mx-3">Geo lat: ${usersItem.address.geo.lat}</p>
          <p class="mx-3">Geo lng: ${usersItem.address.geo.lng}</p>
        </div>
      </div>`)
    $('#usersRow').html(g);
  }
})