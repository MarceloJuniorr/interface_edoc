$( ".submit-btn" ).click(function() {
    var teste = $('input[name="options"]:checked').val();
    console.log(teste);
    $(".progress").removeClass("d-none");
    });