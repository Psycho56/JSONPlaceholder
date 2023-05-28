$(document).ready(() => {
  $("#runBtn").click(() => {
    $("#span").html(`{ 
      <p style="color:#7EC495;font-size:14px;" class="mx-4 px-4">"userId": <span style="color:#F08D43;">1</span>,</p>
      <p style="color:#7EC495;font-size:14px;" class="mx-4 px-4">"id": <span style="color:#F08D43;">1</span>,</p>
      <p style="color:#7EC495;font-size:14px;" class="mx-4 px-4">"title": <span style="color:#F08D43;">"delectus aut autem"</span>,</p>
      <p style="color:#7EC495;font-size:14px;" class="mx-4 px-4">"completed": <span style="color:#F08D43;">false</span> 
      </p><span class="mx-4">}</span>`);
    $("#run-message").css("display", "block");
  });
});
