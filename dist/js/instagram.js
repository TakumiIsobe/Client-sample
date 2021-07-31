$.ajax({
    type: 'GET',
    url: 'https://graph.facebook.com/v11.0/17841404535449845?fields=name%2Cmedia.limit(10)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Cthumbnail_url%7D&access_token=EAAHkGRJuaFUBAC5WgtOpw2a2juucVH71vpZBm66onhLpUNX7pEwKfstnFyNTDvdrXiiTs7Idm0bQPtZCVwZC0j492W8CTUdNi3wltXa3Q0NaJszQZB647iP503ixbPneqGs3B4ceFBbD4M3rur73RUQZCfqU47xOII8RYZBsLpxCf2SJjeqr6o',
    dataType: 'json',
     success: function(json) {
    var ig = json.media.data;
    var html = "";
    for (var i = 0; i < ig.length; i++) {
    var link = ig[i].permalink;
    var image
    if(!ig[i].thumbnail_url) {
    // 動画の場合はこちら
    image = ig[i].media_url;}
    else {
    // 写真の場合はこちら
    image = ig[i].thumbnail_url;
    }
    //html += '<div class="swiper-slide"><a href="' + link + '" target="_blank"><img src="' + image + '"></a></div>'
    html += '<div><a href="' + link + '" target="_blank"><img src="' + image + '"></a></div>'
    }
    $(".instagram").append(html);
    }
});


/*

$(window).load(function () {
    //facebook-jsonを取得して表示
        var count = 0;
        var limit = 10; //表示件数
        var text = '';
        var data;
        var graph_api = 'https://graph.facebook.com/v11.0/';
        var accessToken = 'EAAHkGRJuaFUBAC5WgtOpw2a2juucVH71vpZBm66onhLpUNX7pEwKfstnFyNTDvdrXiiTs7Idm0bQPtZCVwZC0j492W8CTUdNi3wltXa3Q0NaJszQZB647iP503ixbPneqGs3B4ceFBbD4M3rur73RUQZCfqU47xOII8RYZBsLpxCf2SJjeqr6o'; // アクセストークン
        var businessID = '17841404535449845'; //グラフAPIエクスプローラで取得したinstagram_business_accountのID
        var fields = 'media{caption,media_url,permalink,timestamp,username}';
        var url = graph_api + businessID + '?fields=' + fields + "&access_token=" + accessToken;
        $.ajax({
            url: url
        })
        .done(function(res) {
            data = res.media;
            limit = 9;
            count = 0;
            $.each(data, function(index, val) {
                $.each(val, function(i, elem) {
                    if (elem.media_url && count < limit) {
                        text1 = '<li><a href="'+elem.permalink+'" target="_blank">';
                        text2 = '<img src="'+elem.media_url+'">';
                        text3 = '</a></li>';
                        count ++;
                        text = text + text1 + text2 + text3;
                    }
                });
            });
            $('#instagram-list').html(text);
        })
        .fail(function(jqXHR, status) {
            $('#instagram-list').html('<li>読み込みに失敗しました。</li>');
        })
    });
*/
