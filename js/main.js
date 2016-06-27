/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var DEBUG = false;
// Accepts any class name
var rellax = new Rellax('.rellax');
var h = $(window).height();

(function(){
  var grid;
  function init() {
    grid1 = new Minigrid({
      container: '.cards1',
      item: '.card',
      gutter: 12
    });
    grid1.mount();
    grid2 = new Minigrid({
      container: '.cards2',
      item: '.card',
      gutter: 12
    });
    grid2.mount();
  }

  // mount
  function update() {
    grid1.mount();
    grid2.mount();
  }

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', update);
})();

$(function() {
    var secs = 4;
    var duration = 200;
    // Init Controller
    var controller = new ScrollMagic.Controller();
    //create animation
    var nameTween = new TimelineMax()
    .to('.title', duration, {opacity:0})
    //create a scene
    new ScrollMagic.Scene({
      duration:200,
      offset:100,
    })
    .setTween(nameTween)
    .addTo(controller);

    var aboutTween = new TimelineMax()
    .to('#about', duration, {height:100, opacity:1})
    .to('#aboutTitle', secs, {opacity:1})
    .to('#aboutHover', secs, {opacity:0})
    .to('#softwareHover', secs, {opacity:0})
    .to('#hardwareHover', secs, {opacity:0})
    .to('#contactHover', secs, {opacity:0})
    //create a scene
    new ScrollMagic.Scene({
      duration:duration,
      offset:h/2,
    })
    .setTween(aboutTween)
    .addTo(controller);

    var softwareTween = new TimelineMax()
    .to('#about', secs, {height:70, opacity:0.7})
    .to('#aboutTitle', secs, {opacity:0})
    .to('#software', secs, {height:100, opacity:1})
    .to('#softwareTitle', secs, {opacity:1})
    new ScrollMagic.Scene({
      duration:duration,
      offset:h/2+h,
    })
    .setTween(softwareTween)
    .addTo(controller);

    var hardwareTween = new TimelineMax()
    .to('#software', secs, {height:70, opacity:0.7})
    .to('#softwareTitle', secs, {opacity:0})
    .to('#hardware', secs, {height:100, opacity:1})
    .to('#hardwareTitle', secs, {opacity:1})
    new ScrollMagic.Scene({
      duration:duration,
      offset:h/2+2*h,
    })
    .setTween(hardwareTween)
    .addTo(controller);

    var contactTween = new TimelineMax()
    .to('#hardware', secs, {height:70, opacity:0.7})
    .to('#hardwareTitle', secs, {opacity:0})
    .to('#contact', secs, {height:100, opacity:1})
    .to('#contactTitle', secs, {opacity:1})
    new ScrollMagic.Scene({
      duration:duration,
      offset:h/2+3*h,
    })
    .setTween(contactTween)
    .addTo(controller);
});

$("#about").click(function () {
  $('html,body').animate({
      scrollTop: h,
  }, 1000);
});

$("#software").click(function () {
  $('html,body').animate({
      scrollTop: h*2,
  }, 1000);
});

$("#hardware").click(function () {
  $('html,body').animate({
      scrollTop: h*3,
  }, 1000);
});

$("#contact").click(function () {
  $('html,body').animate({
      scrollTop: h*4,
  }, 1000);
});
