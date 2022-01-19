var urlHm = "https://novonfeqas.avancoinfo.net"
var urlPrd = "https://www.nerus-edoc.net"
var url = ""

function selectAmbiente(){
    let ambiente = $('input[name="options"]:checked').val();
    if (ambiente == "HM") {
        url = urlHm;
    } else {
        url = urlPrd;
    }
    return url;
}