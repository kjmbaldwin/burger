$(function() {
  $(".eat").on("click", function(event) {
    //get ID
    var id = $(this).data("id");
    var eaten = { devoured: true }
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function() {
        console.log("updated to devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});