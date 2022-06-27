
$(".submit-cancelamento-btn").click(function () {

    let url = selectAmbiente();
    console.log(url);
    let token = $("#token-cancelamento-input").val();
    let chave = $("#chave-cancelamento-input").val();
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
            $(".progress-cancelamento").removeClass("d-none");
            $(".return-object").html("");
        }
    })
        .done(function (data) {
            $.each(data, function (key, value) {
                let object = key + ' : ' + value;
                let row =$("<p>").text(object);

                $(".return-object").append(row);
            });
            $(".progress-cancelamento").addClass("d-none");



        })
        .fail(function (jqXHR, textStatus, msg) {
            alert(msg);
            $(".progress-cancelamento").addClass("d-none");
        });

});

