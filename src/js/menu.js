$("#home-btn").click(function () {

    clickBtnMenu($("#home-btn"),$("#tela-home"));
  

})

$("#cancelamento-btn").click(function () {

    clickBtnMenu($("#cancelamento-btn"),$("#tela-cancelamento"));


})

$("#emissao-btn").click(function () {

    clickBtnMenu($("#emissao-btn"),$("#tela-emissao"));

})

$("#insere-xml-btn").click(function () {

    clickBtnMenu($("#insere-xml"),$("#tela-insere-xml"));

})



function clickBtnMenu(btn, screen) {

    $(".nav-link").removeClass("active");
    btn.addClass("active");
    $(".screen").addClass("d-none");
    screen.removeClass("d-none");
    $(".navbar-toggler").addClass("collapsed");
    $(".navbar-collapse").removeClass("show")



}