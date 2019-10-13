
        var jsonData = data;
        for (var i = 0; i < jsonData['events'].length; i++) {
        var counter = jsonData['events'][i]['message_create']['message_data'];
        //console.log(counter['text']);
        var myVar = counter['text'];
        if (/[of]/i.test(myVar)){
        tweetPost(myVar);  
        }
        delDM(jsonData['events'][i]['id']);
        }
});
// Fungsi membuat sebuah Tweet
function tweetPost(msg) {
    var tweet = {
        status: msg
    }
    T.post('statuses/update', tweet, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("sukses => " + msg);
        }
    });
}
// Fungsi menghapus DM
function delDM(id) {
    var tweet = {
        id: id
    }
    T.delete('direct_messages/events/destroy', tweet, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}
