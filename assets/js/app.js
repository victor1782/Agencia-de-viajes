



$(document).scroll(function(){
    const y = $('html').scrollTop ();
    y > 300 ? $('nav').addClass('nav-bg') : $('nav').removeClass('nav-bg');

    $("#enviarCorreo").click(function (){
      alert("El correo fue enviado correctamente");
    });

});


/* Tooltip */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})