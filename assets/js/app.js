// skills
$('.skill-per').each(function () {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({ animatedValue: 0 }).animate({ animatedValue: per }, {
        duration: 1000,
        step: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});

// button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// loader
setTimeout(function(){
  $('.loader_bg').fadeToggle();

}, 2500);