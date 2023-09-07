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

$(document).ready(function() {
  // Función para animar la imagen hacia abajo
  $(".move-down").click(function() {
    $(this).animate({ top: "+=30px" }, 500); // Ajusta la distancia de animación según tus necesidades
  });

  // Función para enviar hacia abajo al hacer clic
  $(".move-down").on("click", function() {
    var distancia = 1000; // Cambia esta cantidad a la distancia que desees
    $("html, body").animate({ scrollTop: distancia }, "slow");
    return false;
  });
});
