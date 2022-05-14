$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    // get the values
    let firstname = $("#firstname").val();
    let lastname = $("#lastname").val();
    let email = $("#email").val();
    let message = $("#message").val();

    let name = `${firstname} ${lastname}`;

    // send to server
    return $.ajax({
      type: "POST",
      url: "/process.php",
      data: {
        name,
        email,
        message,
      },
      success: function (data) {
        let result = JSON.parse(data);
        console.log("result", result);
      },
      error: function (xhr, status, error) {
        console.log("error", xhr);
      },
    });
  });
});
