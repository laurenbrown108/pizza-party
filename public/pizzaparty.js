$(function() {

    $(".devour").on("click", function(event) {
        console.log("clicked!");
    }
    )

    $(".create-form").on("submit", function (event) {
        console.log("hello??")
        // event.preventDefault();

        // var newPizza = {
        //   name: $("#pz").val().trim(),
        // };

        // // Send the POST request.
        // $.ajax("/api/pizza", {
        //   type: "POST",
        //   data: newPizza
        // }).then(
        //   function() {
        //     console.log("made a pizza!");
        //     // Reload the page to get the updated list
        //     location.reload();
        //   }
        // );
    });
})