//wait for doc to load
$(function() {

  //function for the devour button on each burger
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

  //add new burger function
  $("#burger-submit").on("click", function(event){
    event.preventDefault();

    var newBurger = {burger_name : $("#burger-name-input").val().trim()}

    console.log("newBurger", newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("new burger added ");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});