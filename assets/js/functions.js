

function tweet() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent($(".message")));
}

$(document).ready(function(){

    
//On Page Load
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); 
        $('.author').text(post.title);
        $('.message').html(post.content);     
      },
    });

//On Button click
    $('.new-quote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); 
        $('.author').text(post.title);
        $('.message').html(post.content);     
      },
      cache: false
    });

  });



$('.tweet-quote').on('click', tweet); 
    console.log($(".message")[0]);

});
