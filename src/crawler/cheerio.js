var request = require('request');
var cheerio = require('cheerio');

request('https://www.developer-tech.com/categories/Android/', function (error, response, html){
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var result = [];
        console.log("something");
        $('article').each(function (i, element) {
            var Title = $(this).find("h2").text();
            var Link = $(this).find("a").attr("href");
            var Image = $(this).find("img").attr("src");
            var payload = {
                "Title":Title,
                "Link":Link,
                "Image":Image,
            };
            result.push(payload);            
        });
        console.log("aaa", result);
        console.log(typeof result);
    }});


// request('https://news.ycombinator.com', function (error, response, html) {
//     if (!error && response.statusCode == 200) {
//         var $ = cheerio.load(html);
//         $('span.comhead').each(function(i, element){
//         var a = $(this).prev();
//         var rank = a.parent().parent().text();
//         var title = a.text();
//         var url = a.attr('href');
//         var subtext = a.parent().parent().next().children('.subtext').children();
//         var points = $(subtext).eq(0).text();
//         var username = $(subtext).eq(1).text();
//         var comments = $(subtext).eq(2).text();
//         // Our parsed meta data object
//         var metadata = {
//             rank: parseInt(rank),
//             title: title,
//             url: url,
//             points: parseInt(points),
//             username: username,
//             comments: parseInt(comments)
//         };
//         console.log(metadata);
//         });
//     }
//     });
    