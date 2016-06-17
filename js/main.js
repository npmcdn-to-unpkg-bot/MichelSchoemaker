/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var DEBUG = false;
// Accepts any class name
var rellax = new Rellax('.rellax');
