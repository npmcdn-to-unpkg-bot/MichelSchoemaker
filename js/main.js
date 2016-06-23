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
    // Init Controller
    var controller = new ScrollMagic.Controller();
    //create animation
    var nameTween = new TimelineMax()
    .to('.title', 2, {opacity:0})
    //create a scene
    new ScrollMagic.Scene({
      duration:200,
      offset:100,
    })
    .setTween(nameTween)
    .addTo(controller);

    var aboutTween = new TimelineMax()
    .to('#about', 2, {height:100, opacity:1})
    //create a scene
    new ScrollMagic.Scene({
      duration:200,
      offset:h/4,
    })
    .setTween(aboutTween)
    .addTo(controller);

    var softwareTween = new TimelineMax()
    .to('#about', 2, {height:70, opacity:0.7})
    .to('#software', 2, {height:100, opacity:1})
    new ScrollMagic.Scene({
      duration:200,
      offset:h/4+h,
    })
    .setTween(softwareTween)
    .addTo(controller);

    var hardwareTween = new TimelineMax()
    .to('#software', 2, {height:70, opacity:0.7})
    .to('#hardware', 2, {height:100, opacity:1})
    new ScrollMagic.Scene({
      duration:200,
      offset:h/4+2*h,
    })
    .setTween(hardwareTween)
    .addTo(controller);

    var contactTween = new TimelineMax()
    .to('#hardware', 2, {height:70, opacity:0.7})
    .to('#contact', 2, {height:100, opacity:1})
    new ScrollMagic.Scene({
      duration:200,
      offset:h/4+3*h,
    })
    .setTween(contactTween)
    .addTo(controller);
});
