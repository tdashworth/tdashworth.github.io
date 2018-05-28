

function encrypt() {
    var call = jQuery.get("https://home.tdashworth.uk:55555/encrypt", {
                   text: $('#unencrypted')[0].value
               }, function(data, status) {
                   $('#encrypted')[0].value = data;
               });
}

function decrypt() {
   var call = jQuery.get("https://192.168.0.10:55555/decrypt", {
                  text: $('#encrypted')[0].value
              }, function(data, status) {
                  $('#unencrypted')[0].value = data;
              });
}