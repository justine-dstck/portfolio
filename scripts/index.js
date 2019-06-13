/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");


const image = document.querySelector('.parallax');
const speed = -0.5;
image.style.transform = 'translateY( calc( var(--scrollparallax) * 1px ) )';
   
window.addEventListener('scroll', function() {
  image.style.setProperty("--scrollparallax", (document.body.scrollTop || document.documentElement.scrollTop) * speed);
}, { passive: true });

var scroll = new SmoothScroll('a[href*="#"]');

var options = {
  threshold: 0.1
};
  
var links = document.querySelectorAll('a[href*="#"]')

function callback(entries) {
  entries.forEach(function(entry) {
    var id = entry.target.getAttribute('id');
    if (entry.isVisible || entry.isIntersecting) {
      links.forEach(function(link) {
        link.classList.remove('green');
      });
      var link = document.querySelector('a[href="#' + id + '"]');
      link.classList.add('green');
    }
  })
}

var observer = new IntersectionObserver(callback, options);

var targets = document.querySelectorAll('[id]');
targets.forEach(function(target) {
  observer.observe(target);
})