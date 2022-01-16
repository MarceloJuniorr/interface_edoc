$("#home-btn").click(function () {

    clickBtnMenu($("#home-btn"));
  

})

$("#cancelamento-btn").click(function () {

    clickBtnMenu($("#cancelamento-btn"));

})

$("#emissao-btn").click(function () {

    clickBtnMenu($("#emissao-btn"));

})

$("#insere-xml-btn").click(function () {

    clickBtnMenu($("#insere-xml"));

})

function clickBtnMenu(btn) {

    $(".nav-link").removeClass("active");
    btn.addClass("active");


    
    
}