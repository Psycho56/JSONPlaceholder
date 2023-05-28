$(document).ready(() => {
    let todos = [];

  $("#todosBtn").click(() => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      type: 'get',
      success: (data) => {todos = data},
      async: false
    })
    draw();
  })

  function draw() {
    let e =  todos.map(todosItem => `<div class="col-md-3">
      <div class="card my-5" style="height:150px; border:2px dashed lightgrey;">
        <div class="card-header">
        <div class="id-group d-flex justify-content-between px-4">
        <h3><span>User id:</span> ${todosItem.userId}</h3>
        <h3><span>Id:</span> ${todosItem.id}</h3>
        </div>
        </div>
        <div style="height:100%;gap:25px;"  class="card-body d-flex align-items-center justify-content-center">
        <h3 style="font-size:18px;">${todosItem.title}</h3>
        <input type="checkbox" checked="${todos.completed}">
        </div>
      </div>
    </div>`)
    $('#todosRow').html(e);
  }
})