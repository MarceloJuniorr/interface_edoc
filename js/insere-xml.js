var xmlvalue = ""
var chave = ""
var cnpj

$("#upload-xml").click(async function () {
    var xml = $('#xml-file').prop('files')[0];
    xmlvalue = await xml.text();
    $(xmlvalue).find('protNFe').each(function () {
        console.log("entrei");
        chave = $(this).find("chNFe").text();
        if (chave == "") {
            alert("Não foi possível identificar a chave dentro do XML! \n Verifique se o arquivo de XML autorizado é válido")
            return;

        }
        console.log(chave);
        $("#chave-insere-xml-input").val(chave);
    })
    $(xmlvalue).find('emit').each(function () {
        cnpj = $(this).find("CNPJ").text();
        if (cnpj == "") {
            alert("Não foi possível identificar o CNPJ dentro do XML! \n Verifique se o arquivo de XML autorizado é válido")
            return;

        }
        console.log(cnpj);
        $("#cnpj-insere-xml-input").val(cnpj);
    })

});

$("#xml-send").click(function () {
    let url = selectAmbiente();
    console.log(url);
    let token = $("#token-insere-xml-input").val();
    let chave = $("#chave-insere-xml-input").val();
    let cnpj = $("#cnpj-insere-xml-input").val();
    let loja = $("#loja-insere-xml-input").val();

    if (xmlvalue == "") {
        alert("Realize o update do XML antes de prosseguir")
        return;

    }

    if (token == "") {
        alert("Preencha o campo API Token para prosseguir")
        return;

    }
    if (loja == "") {
        alert("Preencha o campo Loja para prosseguir")
        return;

    }
    let headerAuthorization = new Object;
    headerAuthorization.authorization = token;
    let headerApikey = new Object;
    headerApikey.apikey = token;
    let body = new Object;
    body.cnpj = cnpj;
    body.chave = chave;
    body.xml = xmlvalue;



    console.log("token: " + token + " | " + "chave: " + chave + " | " + "CNPJ: " + cnpj);


    $.ajax({
        url: url + "/api/Usuarios/selecionarfil",
        type: 'get',
        headers: headerAuthorization,
        beforeSend: function () {
            $(".progress-insere-xml").removeClass("d-none");
            $(".return-insere-xml-object").html("");
        }
    })
        .done(function (data) {
            $.each(data, function (key, value) {
                console.log("Alteração de filial concluída");
                let object = key + ' : ' + value;
                console.log(object);



            });

            $.ajax({
                url: url + "/migracaonfenotas",
                type: 'post',
                headers: headerAuthorization,
                data: body
            }).done(function (data) {
                $.each(data, function (key, value) {
                    let object = key + ' : ' + value;
                    let row = $("<p>").text(object);
                    $(".return-insere-xml-object").append(row);
                });
                $(".progress-insere-xml").addClass("d-none");

            }).fail(function (jqXHR, textStatus, msg) {
                alert(jqXHR.responseText);
                console.log(jqXHR.responseText);
                $(".progress-insere-xml").addClass("d-none");
            });




        })

        .fail(function (jqXHR, textStatus, msg) {
            alert(jqXHR.responseText);
            console.log(jqXHR.responseText);
            $(".progress-insere-xml").addClass("d-none");
        });






})






