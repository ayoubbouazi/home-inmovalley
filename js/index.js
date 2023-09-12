// ACTIVE INICIO
$(document).ready(function () {
  // Initially set the "INICIO" link as active
  $("ul.nav-menu li:first-child a").addClass("active");

  // Add click event handler to all menu items
  $("ul.nav-menu li a").click(function () {
    // Remove the "active" class from all links
    $("ul.nav-menu li a").removeClass("active");

    // Add the "active" class to the clicked link
    $(this).addClass("active");
  });
});


// MOVE DOWN
$(document).ready(function () {
  // Function to cheer up the image down
  $(".move-down").click(function () {
    $(this).animate({ top: "+=30px" }, 500); // Adjust the animation distance according to your needs
  });

  // Función para enviar hacia abajo al hacer clic
  $(".move-down").on("click", function () {
    var distancia = 800; // Change this amount at the distance you want
    $("html, body").animate({ scrollTop: distancia }, "slow");
    return false;
  });
});


// MODAL NAVBAR
$(document).ready(function () {
  // Capture click on the "Menu" link
  $("a[id='modal']").click(function () {
    // Muestra el modal
    $("#miModal").css("display", "block");
  });

  // Capture click on the modal closure button
  $(".close").click(function () {
    // Cierra el modal
    $("#miModal").css("display", "none");
  });
});


$(document).ready(function() {
  const icon = $('.fix-wsp-icon');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) { // Adjust the displacement threshold as necessary
      icon.addClass('show');
    } else {
      icon.removeClass('show');
    }
  });
});