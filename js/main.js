/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var DEBUG = false;
// Accepts any class name
var rellax = new Rellax('.rellax');

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

$(function setMenu() {
    var secs = 4;
    var duration = 200;
    var h = $(window).height();
    // Init Controller
    var controller = new ScrollMagic.Controller();
    //create animation
    var hideName = new TimelineMax()
    .to('.title', duration, {opacity:0})
    .to('#aboutHover', secs, {opacity:0})
    .to('#softwareHover', secs, {opacity:0})
    .to('#hardwareHover', secs, {opacity:0})
    .to('#contactHover', secs, {opacity:0})
    //create a scene
    new ScrollMagic.Scene({
      duration:duration,
      offset:100,
    })
    .setTween(hideName)
    .addTo(controller);

    var showAbout = new TimelineMax()
    .to('#about', secs, {height:100, opacity:1})
    .to('#aboutTitle', secs, {opacity:1})
    //create a scene
    new ScrollMagic.Scene({
      duration:duration,
      offset:3*h/4,
    })
    .setTween(showAbout)
    .addTo(controller);

    var hideAbout = new TimelineMax()
    .to('#about', secs, {height:70, opacity:0.7})
    .to('#aboutTitle', secs, {opacity:0})
    //create a scene
    new ScrollMagic.Scene({
      duration:duration,
      offset:h/4+h,
    })
    .setTween(hideAbout)
    .addTo(controller);

    var showSoftware = new TimelineMax()
    .to('#software', secs, {height:100, opacity:1})
    .to('#softwareTitle', secs, {opacity:1})
    new ScrollMagic.Scene({
      duration:duration,
      offset:3*h/4+h,
    })
    .setTween(showSoftware)
    .addTo(controller);

    var hideSoftware = new TimelineMax()
    .to('#software', secs, {height:70, opacity:0.7})
    .to('#softwareTitle', secs, {opacity:0})
    new ScrollMagic.Scene({
      duration:duration,
      offset:h/4+2*h,
    })
    .setTween(hideSoftware)
    .addTo(controller);

    var showHardware = new TimelineMax()
    .to('#hardware', secs, {height:100, opacity:1})
    .to('#hardwareTitle', secs, {opacity:1})
    new ScrollMagic.Scene({
      duration:duration,
      offset:3*h/4+2*h,
    })
    .setTween(showHardware)
    .addTo(controller);

    var hideHardware = new TimelineMax()
    .to('#hardware', secs, {height:70, opacity:0.7})
    .to('#hardwareTitle', secs, {opacity:0})
    new ScrollMagic.Scene({
      duration:duration,
      offset:h/4+3*h,
    })
    .setTween(hideHardware)
    .addTo(controller);

    var showContact = new TimelineMax()
    .to('#contact', secs, {height:100, opacity:1})
    .to('#contactTitle', secs, {opacity:1})
    new ScrollMagic.Scene({
      duration:duration,
      offset:3*h/4+3*h,
    })
    .setTween(showContact)
    .addTo(controller);

    $("#about").click(function () {
      $('html,body').animate({
        scrollTop: h,
      }, 1000);
    });

    $("#software").click(function () {
      $('html,body').animate({
          scrollTop: h*2,
      }, 1250);
    });

    $("#hardware").click(function () {
      $('html,body').animate({
          scrollTop: h*3,
      }, 1500);
    });

    $("#contact").click(function () {
      $('html,body').animate({
          scrollTop: h*4,
      }, 1750);
    });
});
