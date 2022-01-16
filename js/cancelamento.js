var urlHm = "https://novonfeqas.avancoinfo.net"
var urlPrd = "https://www.nerus-edoc.net"
var url = ""

$(".submit-btn").click(function () {

    let ambiente = $('input[name="options"]:checked').val();
    if (ambiente == "HM") {
        url = urlHm;
    } else {
        url = urlPrd;
    }
    console.log(url);
    let token = $("#token-input").val();
    let chave = $("#chave-input").val();
    let justificativa = $("#justifica-input").val();
    let storeno = $("#loja-input").val();
    let body = new Object;
    body.chave = chave;
    body.justificativa = justificativa;
    let header = new Object;
    header.apikey = token;
    header.numeroLoja = storeno;
    $.ajax({
        url: url + "/api/Nfes/cancelarNfeViaCarga",
        type: 'post',
        data: body,
        headers: header,

        beforeSend: function () {
            $(".progress").removeClass("d-none");
            $(".return-object").html("");
        }
    })
        .done(function (data) {
            $.each(data, function (key, value) {
                let object = key + ' : ' + value;
                let row =$("<p>").text(object);

                $(".return-object").append(row);
            });
            $(".progress").addClass("d-none");



        })
        .fail(function (jqXHR, textStatus, msg) {
            alert(msg);
            $(".progress").addClass("d-none");
        });

});

