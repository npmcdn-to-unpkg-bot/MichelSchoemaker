/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var DEBUG = false;
// Accepts any class name
var rellax = new Rellax('.rellax');
var h = $(window).height()

$(function() {
    // Init Controller
    var controller = new ScrollMagic.Controller();
    //create animation
    var aboutTween = new TimelineMax()
    .to('#about', 2, {height:80, opacity:1})
    //create a scene
    new ScrollMagic.Scene({
      duration:200,
      offset:h/4,
    })
    .setTween(aboutTween)
    .addTo(controller);

    var softwareTween = new TimelineMax()
    .to('#about', 2, {height:70, opacity:0.7})
    .to('#software', 2, {height:80, opacity:1})
    new ScrollMagic.Scene({
      duration:200,
      offset:h/4+h,
    })
    .setTween(softwareTween)
    .addTo(controller);

    var hardwareTween = new TimelineMax()
    .to('#software', 2, {height:70, opacity:0.7})
    .to('#hardware', 2, {height:80, opacity:1})
    new ScrollMagic.Scene({
      duration:200,
      offset:h/4+2*h,
    })
    .setTween(hardwareTween)
    .addTo(controller);

    var contactTween = new TimelineMax()
    .to('#hardware', 2, {height:70, opacity:0.7})
    .to('#contact', 2, {height:80, opacity:1})
    new ScrollMagic.Scene({
      duration:200,
      offset:h/4+3*h,
    })
    .setTween(contactTween)
    .addTo(controller);
});
